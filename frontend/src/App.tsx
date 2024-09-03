import React, { useState, useEffect } from 'react';
import { greet } from './api';
import { Box, Container, Typography, TextField, Button } from '@mui/material';

const App: React.FC = () => {
  const [greeting, setGreeting] = useState<string>('');
  const [name, setName] = useState<string>('');

  const handleGreet = async () => {
    try {
      const result = await greet(name);
      setGreeting(result);
    } catch (error) {
      console.error('Error greeting:', error);
      setGreeting('An error occurred while greeting.');
    }
  };

  return (
    <Container maxWidth="sm" className="min-h-screen py-8">
      <Box className="flex flex-col items-center">
        <Typography variant="h4" component="h1" className="mb-4">
          IC Greeter
        </Typography>
        <TextField
          label="Your Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-4"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleGreet}
          className="mb-4"
        >
          Greet
        </Button>
        {greeting && (
          <Typography variant="h6" className="mt-4">
            {greeting}
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default App;
