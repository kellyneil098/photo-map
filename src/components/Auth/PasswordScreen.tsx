// src/components/Auth/PasswordScreen.tsx
import React, { useState } from 'react';
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Paper,
  Container
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';

interface PasswordScreenProps {
  onAuthenticate: () => void;
}

const PasswordScreen: React.FC<PasswordScreenProps> = ({ onAuthenticate }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const CORRECT_PASSWORD = "eh";
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === CORRECT_PASSWORD) {
      setError(false);
      setErrorMessage('');
      onAuthenticate();
    } else {
      setError(true);
      setErrorMessage('Password incorrect');
    }
  };
  
  return (
    <Container maxWidth="sm" sx={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
      <Paper 
        elevation={3} 
        sx={{ 
          p: 4, 
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Box sx={{ mb: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <LockIcon fontSize="large" color="primary" sx={{ mb: 1 }} />
          <Typography variant="h5" component="h1" gutterBottom>
            Photo Map Access
          </Typography>
          <Typography variant="body1" color="text.secondary" align="center">
            Please enter the password to view the photo map
          </Typography>
        </Box>
        
        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
          <TextField
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={error}
            helperText={errorMessage}
            variant="outlined"
            margin="normal"
            autoFocus
            sx={{ mb: 2 }}
          />
          
          <Button 
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{ mt: 2 }}
          >
            Access Map
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default PasswordScreen;
