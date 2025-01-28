import React, { useState } from "react";
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

export const BCGDialog: React.FC<{ open: boolean; onClose: () => void }> = ({
  open,
  onClose,
}) => {
  const [selectedValue, setSelectedValue] = useState("1 Month");

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
              {/* Add Week Options */}
              {Array.from({ length: 6 }, (_, index) => {
                const week = 1 + index;
                return (
                  <FormControlLabel
                    key={`week-${week}`}
                    value={`${week} Week${week > 1 ? "s" : ""}`}
                    control={<Radio />}
                    label={`${week} Week${week > 1 ? "s" : ""}`}
                  />
                );
              })}

              {/* Add Month Options */}
              {Array.from({ length: 12 }, (_, index) => {
                const month = 1 + index;
                return (
                  <FormControlLabel
                    key={`month-${month}`}
                    value={`${month} Month${month > 1 ? "s" : ""}`}
                    control={<Radio />}
                    label={`${month} Month${month > 1 ? "s" : ""}`}
                  />
                );
              })}
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
