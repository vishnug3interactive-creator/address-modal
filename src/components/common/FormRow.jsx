import { Box } from "@mui/material";
import React from "react";

export const FormRow = ({ children, columns = 2 }) => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: { 
        xs: "1fr", 
        sm: `repeat(${columns}, 1fr)` 
      },
      gap: 2,
      mt: "1rem",
    }}
  >
    {children}
  </Box>
);