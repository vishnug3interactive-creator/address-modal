import { Box, Typography, FormControl, Select, MenuItem } from "@mui/material";
import React from "react";
import { Dropdown } from "primereact/dropdown";
import Arrow from "../assets/images/angle-down.png";

export const NormalTextField = ({
  label,
  name,
  value,
  handleChange,
  placeholder,
  minLength,
  isNumber = false,
  error
}) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      {label && (
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: "Bold",
            lineHeight: "1.5rem",
            color: "#111827",
            fontFamily: "Nunito",
          }}
        >
          {label}
        </Typography>
      )}

      <Box
        sx={{
          height: "3.125rem",
          background: "none",
          border: "1px solid #D1D5DB",
          borderRadius: "0.5rem",
          color: "#111827",
          display: "flex",
          alignItems: "center",
          padding: "0 12px",
        }}
      >
        <input
          type={isNumber ? "number" : "text"}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          minLength={minLength}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            outline: "none",
            fontSize: "1rem",
            fontFamily: "Nunito",
            color: "#4B5563",
            background: "transparent",
          }}
        />
           
      </Box>
       {error && (
      <span 
        style={{ 
          color: "#f27466", 
          fontSize: "0.875rem", 
          fontFamily: 'Nunito' 
        }}
      >
        {error}
      </span>
    )}
    </Box>
  );
};

export const NormalDropdown = ({
  label,
  name,
  value,
  handleChange,
  options = [],
  placeholder,
  lineHeight,
  width='100%',
  error
}) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      {label && (
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: "Bold",
            lineHeight: lineHeight || "1.5rem",
            color: "#111827",
            fontFamily: "Nunito",
          }}
        >
          {label}
        </Typography>
      )}

      <Box
        sx={{
          height: "3.125rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box sx={{ minWidth: width }}>
          <Box sx={{ position: "relative",  }}>
            <FormControl fullWidth >
              <Select
                name={name}
                value={value ?? ""}
                onChange={handleChange}
                displayEmpty
                IconComponent={() => null}
                sx={{
                  height: "3.125rem",
                  fontFamily: "Nunito",
                  fontSize: "1rem",
                  border: "1px solid #D1D5DB",
                  color:'#4B5563' ,
                  borderRadius: "0.5rem",
                 
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
            
                }}
              >
                <MenuItem value="">{placeholder}</MenuItem>

                {options.map((option, index) => (
                  <MenuItem key={index} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Box
              component="img"
              src={Arrow}
              alt="arrow icon"
              sx={{
                position: "absolute",
                right: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "20px",
                height: "20px",
                pointerEvents: "none",
              }}
            />
          </Box>
        </Box>
      </Box>
      {error && (
      <span 
        style={{ 
          color: "#f27466", 
          fontSize: "0.875rem", 
          fontFamily: 'Nunito' 
        }}
      >
        {error}
      </span>
    )}
    </Box>
  );
};
