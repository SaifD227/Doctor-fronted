import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { Dialog, DialogActions, DialogTitle, Button } from "@mui/material";

const DeleteConfirmationModal = () => {
  const [open, setOpen] = useState(false);

  // Open the modal
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Close the modal
  const handleClose = () => {
    setOpen(false);
  };

  // Handle delete action
  const handleDelete = () => {
    console.log("Item deleted");
    handleClose();
  };

  return (
    <div>
      <button className="text-3xl text-blue-600" onClick={handleClickOpen}>
        <MdDelete />
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Are you sure you want to delete?</DialogTitle>
        <DialogActions>
          <Button
            onClick={handleClose}
            className=" hover:bg-yellow-600 bg-yellow-400 text-white px-4 py-2 font-bold rounded hover:text-white"
            color="primary"
          >
            Cancel
          </Button>
          <Button
            onClick={handleDelete}
            className="bg-red-800 text-white px-4 py-2 font-bold rounded hover:bg-red-900  hover:text-white"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteConfirmationModal;
