import { Box } from "@mui/material";
import React from "react";

export const FormField = ({ error, children }) => (
  <Box>
    {children}
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