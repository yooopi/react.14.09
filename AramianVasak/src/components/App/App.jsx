import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import RootRouter from '../../pages/RootRouter/RootRouter';

// Увидел ошибку. Просто дочерний компнент не тот был.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#484848',
      main: '#121212',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#8e8e8e',
      main: '#616161',
      dark: '#373737',
      contrastText: '#ffffff',
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RootRouter />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
