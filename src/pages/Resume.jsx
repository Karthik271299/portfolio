import React from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Paper,
} from '@mui/material';
import { Download } from '@mui/icons-material';

const Resume = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Karthik-Updated_CV_2025.pdf'; 
    link.download = 'Karthik-Updated_CV_2025.pdf';
    link.click();
  };

  const resumeUrl = '/Karthik-Updated_CV_2025.pdf'

  return (
    <Box sx={{ pt: 10, minHeight: '100vh', pb: 4 }}>
      <Container maxWidth="lg">
        {/* Header with Download Button */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              background: 'linear-gradient(45deg, #64b5f6 30%, #f50057 90%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold',
            }}
          >
            My Resume
          </Typography>
          <Button
            variant="contained"
            startIcon={<Download />}
            onClick={handleDownloadCV}
            sx={{
              background: 'linear-gradient(45deg, #64b5f6 30%, #f50057 90%)',
              px: 3,
              py: 1.5,
              fontSize: '1.1rem',
              '&:hover': {
                background: 'linear-gradient(45deg, #42a5f5 30%, #e91e63 90%)',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Download CV
          </Button>
        </Box>

        {/* PDF Display */}
        <Paper
          sx={{
            p: 0,
            background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.8) 0%, rgba(26, 26, 26, 0.4) 100%)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(100, 181, 246, 0.2)',
            borderRadius: 2,
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: { xs: '70vh', md: '80vh' },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <iframe
              src={resumeUrl} // Place your PDF in the public folder as resume.pdf
              width="100%"
              height="100%"
              style={{
                border: 'none',
                borderRadius: '8px',
              }}
              title="Karthik Siva Resume"
            />
          </Box>
        </Paper>

        {/* Fallback message */}
        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Typography variant="body2" color="text.secondary">
            Can't view the PDF? 
            <Button 
              onClick={handleDownloadCV} 
              sx={{ ml: 1, textTransform: 'none' }}
              color="primary"
            >
              Click here to download
            </Button>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Resume;  