// src/components/PhotoPopup/PhotoPopup.tsx
import React, { useState, useEffect } from 'react';
import { 
  Card, 
  CardMedia, 
  CardContent, 
  Typography, 
  IconButton, 
  Box,
  Chip,
  Modal,
  Fade,
  useMediaQuery,
  useTheme
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import { LocationMarker } from '../../types/types';

interface PhotoPopupProps {
  marker: LocationMarker | null;
  onClose: () => void;
}

const PhotoPopup: React.FC<PhotoPopupProps> = ({ marker, onClose }) => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  // Reset expanded state when marker changes
  useEffect(() => {
    setExpanded(false);
  }, [marker?.id]);

  if (!marker) return null;

  const handleExpand = () => {
    setExpanded(true);
  };

  const handleCollapse = () => {
    setExpanded(false);
  };

  // Card content to reuse in both regular and expanded views
  const cardContent = (
    <>
      <CardMedia
        component="img"
        height={expanded ? "400" : "250"}
        image={marker.imageUrl}
        alt={marker.title}
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {marker.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {marker.description}
        </Typography>
        
        {marker.city && (
          <Typography variant="body2" color="text.secondary">
            <strong>Location:</strong> {marker.city}
          </Typography>
        )}
        
        {marker.date && (
          <Typography variant="body2" color="text.secondary">
            <strong>Date:</strong> {marker.date}
          </Typography>
        )}
        
        {marker.containsPeople && marker.containsPeople.length > 0 && (
          <Box mt={1}>
            <Typography variant="body2" component="span" sx={{ mr: 1 }}>
              <strong>People:</strong>
            </Typography>
            {marker.containsPeople.map(person => (
              <Chip 
                key={person} 
                label={person} 
                size="small" 
                sx={{ mr: 0.5, mb: 0.5 }} 
              />
            ))}
          </Box>
        )}
      </CardContent>
    </>
  );

  // If expanded, show in a modal
  if (expanded) {
    return (
      <Modal
        open={expanded}
        onClose={handleCollapse}
        closeAfterTransition
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2 // Add padding to ensure it's not flush against screen edges
        }}
      >
        <Fade in={expanded}>
          <Card sx={{ 
            maxWidth: '90%',
            maxHeight: '90vh',
            width: isMobile ? '100%' : 800,
            overflow: 'auto',
            position: 'relative',
            boxShadow: 24
          }}>
            {cardContent}
            <IconButton 
              sx={{ 
                position: 'absolute', 
                top: 10, 
                right: 10, 
                bgcolor: 'rgba(255,255,255,0.7)',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' }
              }}
              onClick={handleCollapse}
            >
              <FullscreenExitIcon />
            </IconButton>
            <IconButton 
              sx={{ 
                position: 'absolute', 
                top: 10, 
                right: 60, 
                bgcolor: 'rgba(255,255,255,0.7)',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' }
              }}
              onClick={onClose}
            >
              <CloseIcon />
            </IconButton>
          </Card>
        </Fade>
      </Modal>
    );
  }

  // Regular card - position differently based on screen size
  return (
    <Card sx={{ 
      position: 'absolute', 
      bottom: isMobile ? 10 : 20, 
      right: isMobile ? 10 : 20,
      left: isMobile ? 10 : 'auto', // On mobile, stretch from left to right edge
      zIndex: 1000, 
      maxWidth: isMobile ? '100%' : 400,
      width: isMobile ? 'calc(100% - 20px)' : 400, // Adjust width for mobile
      boxShadow: 3,
      maxHeight: isMobile ? 'calc(50vh - 20px)' : 'auto', // Limit height on mobile
      overflow: 'auto' // Allow scrolling if content is too tall
    }}>
      {cardContent}
      <IconButton 
        sx={{ 
          position: 'absolute', 
          top: 10, 
          left: 10, 
          bgcolor: 'rgba(255,255,255,0.7)',
          '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' }
        }}
        onClick={handleExpand}
        aria-label="expand"
      >
        <FullscreenIcon />
      </IconButton>
      <IconButton 
        sx={{ 
          position: 'absolute', 
          top: 10, 
          right: 10, 
          bgcolor: 'rgba(255,255,255,0.7)',
          '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' }
        }}
        onClick={onClose}
        aria-label="close"
      >
        <CloseIcon />
      </IconButton>
    </Card>
  );
};

export default PhotoPopup;
