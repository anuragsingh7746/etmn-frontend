import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

function PricingCalculator() {
  const [infill, setInfill] = useState("");
  const [layerHeight, setLayerHeight] = useState("");
  const [material, setMaterial] = useState("");
  const [quote, setQuote] = useState(null);

  const handleCalculate = () => {
    if (infill && layerHeight && material) {
      const estimatedPrice = (parseFloat(infill) + parseFloat(layerHeight) + material.length) * 10;
      setQuote(estimatedPrice);
    } else {
      alert("Please fill in all the fields.");
    }
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Pricing Calculator
      </Typography>
      <TextField
        label="Infill Percentage"
        type="number"
        fullWidth
        margin="normal"
        value={infill}
        onChange={(e) => setInfill(e.target.value)}
        variant="outlined"
      />
      <TextField
        label="Layer Height (mm)"
        type="number"
        fullWidth
        margin="normal"
        value={layerHeight}
        onChange={(e) => setLayerHeight(e.target.value)}
        variant="outlined"
      />
      <TextField
        label="Material"
        fullWidth
        margin="normal"
        value={material}
        onChange={(e) => setMaterial(e.target.value)}
        variant="outlined"
      />
      <Button variant="contained" color="primary" onClick={handleCalculate} sx={{ mt: 2 }}>
        Calculate Price
      </Button>
      {quote !== null && (
        <Typography variant="h6" sx={{ mt: 2 }}>
          Estimated Price: ${quote.toFixed(2)}
        </Typography>
      )}
    </Box>
  );
}

export default PricingCalculator;

