import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  TextField,
  Button,
  Grid,
  Snackbar,
  Alert,
  Divider,
} from '@mui/material';
import { Email, Phone, Send } from '@mui/icons-material';

const Contact = () => {
  const [formData, setFormData] = useState({
    subject: '',
    description: '',
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSendMessage = () => {
    if (!formData.subject.trim() || !formData.description.trim()) {
      setSnackbarMessage('Please fill in both subject and description fields.');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return;
    }

    // Create mailto link with subject and body
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(formData.description);
    const mailtoLink = `mailto:karthiksiva1286@gmail.com?subject=${subject}&body=${body}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Clear form
    setFormData({
      subject: '',
      description: '',
    });
    
    setSnackbarMessage('Email client opened! Please send the email from your email application.');
    setSnackbarSeverity('success');
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box sx={{ pt: 10, minHeight: '100vh', pb: 4 }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              background: 'linear-gradient(45deg, #64b5f6 30%, #f50057 90%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold',
            }}
          >
            Get In Touch
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <Paper
              sx={{
                p: 4,
                height: 'fit-content',
                background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.8) 0%, rgba(26, 26, 26, 0.4) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(100, 181, 246, 0.2)',
              }}
            >
              <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                Contact Information
              </Typography>
              
              <Box sx={{ mt: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Email sx={{ mr: 3, color: 'primary.main', fontSize: 30 }} />
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      Email
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      karthiksiva1286@gmail.com
                    </Typography>
                  </Box>
                </Box>

                <Divider sx={{ my: 3, backgroundColor: 'rgba(100, 181, 246, 0.2)' }} />

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Phone sx={{ mr: 3, color: 'primary.main', fontSize: 30 }} />
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      Phone
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      +91 63697 88360, +91 78128 62956
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Paper
              sx={{
                p: 4,
                background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.8) 0%, rgba(26, 26, 26, 0.4) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(100, 181, 246, 0.2)',
              }}
            >
              <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                Send Message
              </Typography>
              
              <Box sx={{ mt: 4 }}>
                <TextField
                  fullWidth
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  variant="outlined"
                  sx={{
                    mb: 3,
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': {
                        borderColor: 'primary.main',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'primary.main',
                      },
                    },
                  }}
                />

                <TextField
                  fullWidth
                  label="Description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  variant="outlined"
                  multiline
                  rows={6}
                  sx={{
                    mb: 4,
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': {
                        borderColor: 'primary.main',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'primary.main',
                      },
                    },
                  }}
                />

                <Button
                  variant="contained"
                  startIcon={<Send />}
                  onClick={handleSendMessage}
                  fullWidth
                  sx={{
                    py: 1.5,
                    fontSize: '1.1rem',
                    background: 'linear-gradient(45deg, #64b5f6 30%, #f50057 90%)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #42a5f5 30%, #e91e63 90%)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* Snackbar for notifications */}
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbarSeverity}
            variant="filled"
            sx={{ width: '100%' }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Contact;