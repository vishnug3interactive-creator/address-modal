import { Box, Button, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NormalTextField } from "../helpers/FormInput";
import { NormalDropdown } from "../helpers/FormInput";
import { Country, State } from "country-state-city";
import { FormField } from "./common/FormField";
import { FormRow } from "./common/FormRow";
import Divider from "@mui/material/Divider";

function AddressModal() {
  const Initial_State = {
    address: "",
    addressType: "",
    labels: "",
    streetNumber: "",
    streetnum: "",
    suburb: "",
    city: "",
    country: "",
    state: "",
    postcode: "",
    attention: "",
  };

  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);

  const [formData, setFormData] = useState(Initial_State);

  const handleClose = () => {
    setOpen(false);
    setFormData(Initial_State);
  };

  const handleCancel = () => {
    setFormData(Initial_State);
    setOpen(true);
    setErrors({});
  };

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);

  useEffect(() => {
    const countryList = Country.getAllCountries().map((c) => ({
      value: c.isoCode,
      label: c.name,
    }));
    setCountries(countryList);
  }, []);

  useEffect(() => {
    if (formData.country) {
      const stateList = State.getStatesOfCountry(formData.country).map((s) => ({
        value: s.isoCode,
        label: s.name,
      }));
      setStates(stateList);
    } else {
      setStates([]);
    }
  }, [formData.country]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.addressType)
      newErrors.addressType = "Address Type is required";
    if (!formData.labels.trim()) newErrors.labels = "Labels is required";
    if (!formData.streetNumber.trim())
      newErrors.streetNumber = "Street Number is required";
    if (!formData.streetnum.trim())
      newErrors.streetnum = "Street Number 1 is required";
    if (!formData.suburb.trim()) newErrors.suburb = "Suburb is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.country.trim()) newErrors.country = "Country  is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.postcode) newErrors.postcode = "Postcode is required";
    if (!formData.attention) newErrors.attention = "Attention is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    alert("Form Submitted");
  };

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
            bgcolor: "#FFFFFF",
            maxHeight: "90vh",
            display: "flex",
            flexDirection: "column",
            borderRadius: "0.75rem",
            width: {
              xs: "90%",
              sm: "80%",
              md: "70%",
              lg: "50.5rem",
            },
            outline: "none",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              position: "sticky",
              top: 0,
              zIndex: 2,
              marginLeft: "1.5rem",
              marginRight: "1.5rem",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            <Typography
              id="modal-modal-title"
              fontWeight="700"
              sx={{
                fontSize: "1.25rem",
                color: "#111827",
                lineHeight: "1.875rem",
              }}
            >
              Add New Billing Address
            </Typography>
            <Box onClick={handleClose} sx={{ cursor: "pointer" }}>
              <svg
                width="15"
                height="15"
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
          <Divider />
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              maxHeight: "calc(90vh - 100px)",
            }}
          >
            <Box
              sx={{
                flex: 1,
                overflowY: "auto",
                p: "1.5rem",
              }}
            >
              <Box>
                <NormalTextField
                  type="text"
                  name="address"
                  label="Search Online"
                  placeholder="Enter your address"
                  value={formData.address}
                  handleChange={handleChange}
                  required
                  error={errors.address}
                />
              </Box>
              <FormRow columns={2}>
                <NormalDropdown
                  label="Address Type"
                  placeholder="Select your Address Type"
                  name="addressType"
                  value={formData.addressType}
                  handleChange={handleChange}
                  options={[
                    { value: "address1", label: "Address 1" },
                    { value: "address2", label: "Address 2" },
                  ]}
                  error={errors.addressType}
                />

                <NormalTextField
                  type="number"
                  label="Labels"
                  name="labels"
                  placeholder="Enter your Label"
                  value={formData.labels}
                  handleChange={handleChange}
                  sx={{ ml: "12px" }}
                  error={errors.labels}
                />
              </FormRow>

              <FormRow columns={2}>
                <NormalTextField
                  type="text"
                  name="streetNumber"
                  label="Street Number"
                  placeholder="Enter your Street Number"
                  value={formData.streetNumber}
                  handleChange={handleChange}
                  required
                  error={errors.streetNumber}
                />

                <NormalTextField
                  type="number"
                  label="Street 1"
                  name="streetnum"
                  placeholder="Enter your Street 1 Number"
                  value={formData.streetnum}
                  handleChange={handleChange}
                  sx={{ ml: "12px" }}
                  error={errors.streetnum}
                />
              </FormRow>

              <FormRow columns={2}>
                <NormalTextField
                  type="text"
                  name="suburb"
                  label="Suburb"
                  placeholder="Enter your Suburb"
                  value={formData.suburb}
                  handleChange={handleChange}
                  required
                  error={errors.suburb}
                />
                <NormalTextField
                  type="number"
                  label="City"
                  name="city"
                  placeholder="Enter your City"
                  value={formData.city}
                  handleChange={handleChange}
                  sx={{ ml: "12px" }}
                  error={errors.city}
                />
              </FormRow>

              <FormRow columns={3}>
                <NormalDropdown
                  label="Country"
                  name="country"
                  placeholder="Select your Country"
                  value={formData.country}
                  handleChange={handleChange}
                  options={countries}
                  sx={{ width: "100%" }}
                  error={errors.country}
                />

                <NormalDropdown
                  label="State"
                  name="state"
                  value={formData.state}
                  handleChange={handleChange}
                  options={states}
                  placeholder="Select Your State"
                  sx={{ width: "100%" }}
                  error={errors.state}
                />

                <NormalTextField
                  type="number"
                  label="Post Code"
                  name="postcode"
                  placeholder="Enter your Post Code"
                  value={formData.postcode}
                  handleChange={handleChange}
                  error={errors.postcode}
                />
              </FormRow>

              <FormRow columns={2}>
                <Box>
                  <NormalTextField
                    type="number"
                    label="Attention To"
                    name="attention"
                    placeholder="Enter Attention To"
                    value={formData.attention}
                    handleChange={handleChange}
                    sx={{ width: "100%" }}
                    error={errors.attention}
                  />
                </Box>
              </FormRow>
            </Box>

            <Box>
              <Box
                sx={{
                  display: "flex",
                  mt: "1.5rem",
                  mb: "1.5rem",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "sticky",
                  bottom: 0,
                  bgcolor: "white",
                  zIndex: 2,
                }}
              >
                <Box>
                  <Button
                    variant="outlined"
                    sx={{
                      height: "3rem",
                      width: "7.5rem",
                      color: "#EF4A00",
                      borderColor: "#EF4A00",
                      fontSize: "1rem",
                      textTransform: "none",
                      cursor: "pointer",
                      "&:hover": {
                        backgroundColor: "#EF4A00",
                        color: "#FFFFFF",
                        borderColor: "#EF4A00",
                      },
                    }}
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                </Box>
                <Box sx={{ ml: "1rem" }}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      height: "3rem",
                      width: "7.5rem",
                      fontSize: "1rem",
                      textTransform: "none",
                    }}
                  >
                    Save
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
export default AddressModal;
