import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

interface BCGDialogProps {
  open: boolean;
  onClose: () => void;
  doseId: string;
}

export const BCGDialog: React.FC<BCGDialogProps> = ({ open, onClose, doseId }) => {
  const [selectedValue, setSelectedValue] = useState("1 Month");
  const [options, setOptions] = useState<string[]>([]);

  // Function to handle ObjectId conversion if required
  const convertToObjectId = (id: string) => {
    // If using mongoose in the backend, you can do something like this:
    // return mongoose.Types.ObjectId(id); // This assumes mongoose is used, but you can add a check to see if conversion is necessary.
    return id; // If ObjectId conversion is not needed or handled at the backend, keep it as is.
  };

  // Fetching data from the API
  useEffect(() => {
    if (doseId) {
      const dose_id = convertToObjectId(doseId); // Convert doseId to ObjectId if needed
      fetch(`http://localhost:4000/api/schedule/${dose_id}`)
        .then((response) => response.json())
        .then((data) => {
          // Assuming the API returns an array of schedule options like { weeks: [1, 2, 3], months: [1, 2, 3] }
          const weekOptions = data.weeks || [];
          const monthOptions = data.months || [];

          const allOptions = [
            ...weekOptions.map((week: number) => `${week} Week${week > 1 ? "s" : ""}`),
            ...monthOptions.map((month: number) => `${month} Month${month > 1 ? "s" : ""}`),
          ];
          setOptions(allOptions); // Setting options from API data
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [doseId]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleOk = () => {
    console.log("Selected Value:", selectedValue);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm">
      <div className="flex flex-col max-h-[20rem]">
        {/* Fixed Title */}
        <DialogTitle className="sticky top-0 bg-white z-10 border-b border-gray-300">
          BCG
        </DialogTitle>

        {/* Scrollable Content */}
        <DialogContent className="overflow-y-auto flex-1">
          <FormControl component="fieldset">
            <RadioGroup value={selectedValue} onChange={handleChange}>
              {options.length > 0 ? (
                options.map((option, index) => (
                  <FormControlLabel
                    key={index}
                    value={option}
                    control={<Radio />}
                    label={option}
                  />
                ))
              ) : (
                <div>Loading options...</div>
              )}
            </RadioGroup>
          </FormControl>
        </DialogContent>

        {/* Fixed Actions */}
        <DialogActions className="sticky bottom-0 bg-white z-10 border-t border-gray-300">
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={handleOk}>OK</Button>
        </DialogActions>
      </div>
    </Dialog>
  );
};
