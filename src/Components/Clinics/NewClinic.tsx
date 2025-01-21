import { useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import { MdAdd } from "react-icons/md";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const CustomizedDialogs = () => {
  const [open, setOpen] = useState(false);
  const [clinicDetails, setClinicDetails] = useState({
    name: "",
    phone_number: "",
    address: "",
    consultation_fee: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClinicDetails({
      ...clinicDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/clinic", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...clinicDetails,
          latitude: 34.0522,
          longitude: -118.2437,
          is_online: true,
          monogram_image: "https://example.com/image.jpg",
          doctor_id: "60b8d2951f8b7f1f0c1d2c8f",
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Clinic saved successfully:", data);
        setClinicDetails({
          name: "",
          phone_number: "",
          address: "",
          consultation_fee: "",
        });
        handleClose();
      } else {
        console.error("Failed to save clinic:", response.statusText);
      }
    } catch (error) {
      console.error("Error saving clinic:", error);
    }
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
        startIcon={<MdAdd />}
        className="flex items-center space-x-2"
      >
        New Clinic
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Enter Details
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <TextField
            fullWidth
            margin="normal"
            label="Name"
            name="name"
            value={clinicDetails.name}
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Phone Number"
            name="phone_number"
            value={clinicDetails.phone_number}
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Address"
            name="address"
            value={clinicDetails.address}
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Consultation Fee"
            name="consultation_fee"
            value={clinicDetails.consultation_fee}
            onChange={handleChange}
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleSave}>
            Save
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
};

export default CustomizedDialogs;
