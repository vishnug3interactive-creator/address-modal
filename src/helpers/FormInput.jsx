import { Box, Typography } from '@mui/material';
import React from 'react'



export const NormalTextField = ({
  label,
  name,
  value,
  handleChange,
  placeholder,
  minLength,
  isNumber = false,
}) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      {label && (
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: 500,
            lineHeight: "1.5rem",
            color: "#4B5563",
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
          borderRadius: "8px",
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
            color: "#111827",
            background: "transparent",
          }}
        />
      </Box>
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
}) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      {label && (
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: 500,
            lineHeight: lineHeight || "1.5rem",
            color: "#4B5563",
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
          borderRadius: "8px",
          color: "#111827",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box sx={{ minWidth: "23.25rem" }}>
          <FormControl fullWidth>
           
            <Select
              name={name}
              value={value ?? ""}
              onChange={handleChange}
              displayEmpty
              sx={{
                height: "3.125rem",
                fontFamily: "Nunito",
                fontSize: "1rem",
                color: "#111827",
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
        </Box>
      </Box>
    </Box>
  );
};