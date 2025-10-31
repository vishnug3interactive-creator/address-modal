import { Box, Button, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { NormalTextField } from "../helpers/FormInput";

function AddressModal() {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        marginTop: "50vh",
      }}
    >
      <Button variant="contained" onClick={handleOpen}>
        Add Billing Address
      </Button>

      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "50.5rem",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            overflowY: "scroll",
            maxHeight: "90vh",
            borderRadius: "0.75rem",
          }}
        >
          <Box
            sx={{
              marginLeft: "1.5rem",
              marginRight: "1.5rem",
              marginTop: "1rem",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ minHeight: "1.875rem" }}>
                <Typography
                  id="modal-modal-title"
                  fontWeight="700"
                  sx={{
                    fontSize: "1.25rem",
                    color: "#111827",
                    lineHeight: "1.875",
                  }}
                >
                  Add New Billing Address
                </Typography>
              </Box>
              <Box onClick={handleClose}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.4143 0.413086C12.7658 0.061594 13.3361 0.0617674 13.6877 0.413086C14.0393 0.764662 14.0393 1.33494 13.6877 1.68652L8.32349 7.0498L13.6858 12.4141C14.0374 12.7656 14.0373 13.3359 13.6858 13.6875C13.5108 13.8625 13.2804 13.9511 13.05 13.9512C12.8487 13.9512 12.6466 13.8843 12.4817 13.749L12.4133 13.6875L7.04907 8.32324L1.68579 13.6875C1.5108 13.8625 1.28042 13.9511 1.05005 13.9512C0.848737 13.9512 0.646642 13.8843 0.481689 13.749L0.41333 13.6875C0.0620191 13.3359 0.0618407 12.7656 0.41333 12.4141L5.77759 7.0498L0.41333 1.68652C0.0620189 1.33492 0.0618406 0.764575 0.41333 0.413086C0.764825 0.0615914 1.33517 0.0617595 1.68677 0.413086L7.05005 5.77734L12.4143 0.413086Z"
                    fill="#4B5563"
                    stroke="#4B5563"
                    stroke-width="0.3"
                  />
                </svg>
              </Box>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 2,
                mt: "1.875rem",
              }}
            >
              <Box>
                <NormalTextField
                  type="text"
                  name="jobTitle"
                  label="Job Title"
                  placeholder="Enter Job Title"
                //   value={formData.jobTitle}
                //   handleChange={handleChange}
                  required
                />
                {/* {errors.jobTitle && (
                  <span style={{ color: "red", fontSize: "0.875rem" }}>
                    {errors.jobTitle}
                  </span>
                )} */}
              </Box>
              <Box>
                <NormalTextField
                  type="number"
                  label="Quantity"
                  name="quantity"
                  placeholder="1"
                //   value={formData.quantity}
                //   handleChange={handleChange}
                  sx={{ ml: "12px" }}
                />
                {/* {errors.quantity && (
                  <span style={{ color: "red", fontSize: "0.875rem" }}>
                    {errors.quantity}
                  </span>
                )} */}
              </Box>
            </Box>
          </Box>

          {/* <Box component="form">
            <Box
              sx={{
                display: "flex",
                padding: "24px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box>
                <Button variant="outlined" sx={{ height: "3rem" }}>
                  Save & Show
                </Button>
              </Box>
              <Box sx={{ ml: "1rem" }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ height: "3rem" }}
                >
                  Save
                </Button>
              </Box>
            </Box>
          </Box> */}
        </Box>
      </Modal>
    </Box>
  );
}

export default AddressModal;
