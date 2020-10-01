import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Layout from '../Layout';

// Так и не разобрался, как использовать темы.
// В дочерних компонентах все равно другая палитра.
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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
