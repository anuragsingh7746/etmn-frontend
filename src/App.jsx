import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, Box, Typography, Button, Grid, Card, CardMedia, CardContent, TextField, useTheme, useMediaQuery } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { motion } from 'framer-motion';
import FileUpload from './FileUpload';
import PricingCalculator from './PricingCalculator';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
  },
});

const sampleImages = [
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
];

function App() {

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [darkMode, setDarkMode] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent from: ${formData.name} (${formData.email})`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="false">

        {/* Hero Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            textAlign: 'center',
            gap: 2,
            backgroundImage: darkMode ? 'url(/dark-bg.jpg)' : 'url(/light-bg.jpg)', // Change based on mode
            backgroundSize: 'cover',
            width: '100%',
            color: darkMode ? '#fff' : '#000',
          }}
        >
          <Typography variant="h2" component="h1" gutterBottom>
            High-Quality 3D Printing Services
          </Typography>
          <Typography variant="h5" component="p" gutterBottom>
            Upload your model and get an instant quote based on your specifications.
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Get Instant Quote
          </Button>
        </Box>

        {/* Dark Mode Toggle */}
        <Box sx={{ position: 'absolute', top: '16px', right: '30px' }}>
          <Button onClick={() => setDarkMode(!darkMode)} variant="contained">
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </Button>
        </Box>

        {/* How It Works Section */}
        <Box sx={{ textAlign: 'center', my: 6 }}>
          <Typography variant="h4" gutterBottom>
            How It Works
          </Typography>
          <Typography variant="body1">
            1. Upload your 3D model file. <br />
            2. Select infill, layer height, and material. <br />
            3. Get an instant price estimate. <br />
            4. Place your order and receive your print!
          </Typography>
        </Box>

        {/* Services Section */}
        <Box sx={{ textAlign: 'center', my: 6 }}>
          <Typography variant="h4" gutterBottom>
            Our 3D Printing Services
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">FDM Printing</Typography>
                  <Typography variant="body2">Affordable and durable plastic prints.</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Resin Printing</Typography>
                  <Typography variant="body2">High-detail prints with smooth finishes.</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Multi-Material Prints</Typography>
                  <Typography variant="body2">Print in different colors and materials.</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Gallery Section */}
        <Box sx={{ textAlign: 'center', my: 6 }}>
          <Typography variant="h4" gutterBottom>
            Sample 3D Prints
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {sampleImages.map((image, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Card>
                  <CardMedia component="img" height="200" image={image} alt="3D Print" />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Testimonials Section */}
        <Box sx={{ textAlign: 'center', my: 6 }}>
          <Typography variant="h4" gutterBottom>
            What Our Customers Say
          </Typography>
          <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
            "Amazing quality! The prints turned out exactly as expected." - John D.
          </Typography>
        </Box>

        {/* Upload 3D Model and Pricing Calculator */}
        <Grid container spacing={3} justifyContent="center" sx={{ my: 6 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Upload Your 3D Model
              </Typography>
              <FileUpload />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Get Instant Quote
              </Typography>
              <PricingCalculator />
            </Card>
          </Grid>
        </Grid>

        {/* Contact Section with Form */}
        <Box sx={{ textAlign: 'center', my: 6 }}>
          <Typography variant="h4" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Have a question? Send us a message and we'll get back to you soon.
          </Typography>
          <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: 'auto' }}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              margin="normal"
              multiline
              rows={4}
              required
            />
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Send Message
            </Button>
          </form>
        </Box>

      </Container>
    </ThemeProvider>
  );
}

export default App;
