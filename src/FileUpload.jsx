import React, { useState } from "react";
import { Button, TextField, Box } from "@mui/material";

function FileUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  const handleFileUpload = () => {
    if (file) {
      alert(`File uploaded: ${file.name}`);
    } else {
      alert("Please select a file first.");
    }
  };

  return (
    <Box>
      <TextField
        type="file"
        onChange={handleFileChange}
        fullWidth
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button variant="contained" color="primary" onClick={handleFileUpload} sx={{ mt: 2 }}>
        Upload Model
      </Button>
    </Box>
  );
}

export default FileUpload;

