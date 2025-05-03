// src/components/ScavengerHunt/ScavengerHuntCounter.tsx
// Add to existing file

import React, { useEffect, useState } from 'react';
import { Paper, Typography, Box, Snackbar, Alert } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { LocationMarker } from '../../types/types';

interface ScavengerHuntCounterProps {
  markers: LocationMarker[];
}

const ScavengerHuntCounter: React.FC<ScavengerHuntCounterProps> = ({ markers }) => {
  const totalMarkers = markers.length;
  const foundMarkers = markers.filter(marker => marker.found).length;
  const [showCelebration, setShowCelebration] = useState(false);
  
  // Check if all markers are found
  useEffect(() => {
    if (foundMarkers === totalMarkers && totalMarkers > 0) {
      setShowCelebration(true);
    }
  }, [foundMarkers, totalMarkers]);
  
  const handleCloseCelebration = () => {
    setShowCelebration(false);
  };
  
  return (
    <>
      <Paper
        elevation={3}
        sx={{
          position: 'absolute',
          top: 20,
          right: 20,
          zIndex: 1000,
          padding: 1.5,
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: 2
        }}
      >
        {foundMarkers === totalMarkers ? 
          <EmojiEventsIcon color="primary" sx={{ mr: 1 }} /> :
          <SearchIcon color="primary" sx={{ mr: 1 }} />
        }
        <Typography variant="h6" component="div">
          <Box component="span" sx={{ fontWeight: 'bold' }}>
            {foundMarkers}/{totalMarkers}
          </Box>
          <Box component="span" sx={{ ml: 1, fontSize: '0.9rem', color: 'text.secondary' }}>
            pictures found
          </Box>
        </Typography>
      </Paper>
      
      <Snackbar
        open={showCelebration}
        autoHideDuration={6000}
        onClose={handleCloseCelebration}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseCelebration} 
          severity="success" 
          variant="filled"
          sx={{ width: '100%' }}
        >
          Congratulations! You've found all the pictures!
        </Alert>
      </Snackbar>
    </>
  );
};

export default ScavengerHuntCounter;
