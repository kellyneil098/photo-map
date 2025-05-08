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
  
  // Yeah ik this is insecure it's just for fun
  const CORRECT_PASSWORD = "muqinjiekuaile";
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === CORRECT_PASSWORD) {
      setError(false);
      setErrorMessage('');
      onAuthenticate();
    } else {
      setError(true);
      setErrorMessage('密码不正确');
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
            母亲节快乐！
          </Typography>
          <Typography variant="body1" color="text.secondary" align="center">
            请输入密码进入您的地图
          </Typography>
        </Box>
        
        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
          <TextField
            fullWidth
            label="密码"
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
            进入地图
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default PasswordScreen;
