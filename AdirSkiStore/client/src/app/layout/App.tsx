import { useState } from 'react';
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

function App() {
  
  const [isDarkMode, setIsDarkMode] = useState(true);

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      background: {
        default: isDarkMode ? '#121212' : '#eaeaea',
    }
  }
  });

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />
      <NavBar changeTheme={handleDarkMode} isDarkMode={isDarkMode}/>
      <Box sx={{minHeight: '100vh', bgcolor: 'background.default'}}>
      <Container maxWidth="xl" sx={{ mt: 13 }}>
        <Outlet />
      </Container>
      </Box>      
    </ThemeProvider>
  );
}

export default App;
