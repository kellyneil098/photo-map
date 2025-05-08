// src/components/PhotoPopup/PhotoPopup.tsx
import React, { useState } from 'react';
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
  useTheme,
  Checkbox,
  FormControlLabel
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import { LocationMarker } from '../../types/types';

interface PhotoPopupProps {
  marker: LocationMarker | null;
  onClose: () => void;
  onMarkFound: (markerId: string, found: boolean) => void;
}

const PhotoPopup: React.FC<PhotoPopupProps> = ({ marker, onClose, onMarkFound }) => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (!marker) return null;

  const handleExpand = () => {
    setExpanded(true);
  };

  const handleCollapse = () => {
    setExpanded(false);
  };

  const handleFoundChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onMarkFound(marker.id, event.target.checked);
  };

  const cardContent = (
    <>
      <CardMedia
        component="img"
        height={expanded ? "400" : "250"}
        image={marker.imageUrl}
        alt={marker.title}
        sx={{ objectFit: "contain" }}
      />
      <CardContent>
        {/* Improved layout for title and checkbox */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' }, 
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', sm: 'center' },
          mb: 1
        }}>
          <Typography 
            gutterBottom 
            variant="h5" 
            component="div" 
            sx={{ 
              mb: { xs: 1, sm: 0 },
              mr: 2,
              flex: '1 1 auto',
              overflowWrap: 'break-word'
            }}
          >
            {marker.title}
          </Typography>
          
          <FormControlLabel
            control={
              <Checkbox 
                checked={!!marker.found} 
                onChange={handleFoundChange}
                color="success"
              />
            }
            label="找到了!"
            sx={{ 
              ml: 0, 
              flex: '0 0 auto', // Prevent shrinking
              whiteSpace: 'nowrap', // Keep text on one line
              '& .MuiFormControlLabel-label': { 
                fontSize: '0.875rem',
                fontWeight: 'bold'
              } 
            }}
          />
        </Box>
        
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {marker.description}
        </Typography>
        
        {/* Rest of the content remains the same */}
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
          p: 2
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

  // Regular card in the corner
  return (
    <Card sx={{ 
      position: 'absolute', 
      bottom: isMobile ? 10 : 20, 
      right: isMobile ? 10 : 20,
      left: isMobile ? 10 : 'auto',
      zIndex: 1000, 
      maxWidth: isMobile ? '100%' : 400,
      width: isMobile ? 'calc(100% - 20px)' : 400,
      boxShadow: 3,
      maxHeight: isMobile ? 'calc(50vh - 20px)' : 'auto',
      overflow: 'auto'
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
