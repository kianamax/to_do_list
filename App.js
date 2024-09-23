import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import TodoList from './to-do-list';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TodoList />
    </ThemeProvider>
  );
}

export default App;