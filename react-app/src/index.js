import React from 'react';
import ReactDOM from 'react-dom/client';
import * as MaterialUI from "@mui/material";
import { Provider } from 'react-redux'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from './App';
import ErrorPage from './ErrorPage';
import Fund from './Fund';
import { store } from './store'

const {
    colors,
    CssBaseline,
    ThemeProvider,
    Container,
    createTheme,
    Box
} = MaterialUI

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: colors.red.A400,
        },
    },
});

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />
    },
    {
        path: "/fund",
        element: <Fund />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <ThemeProvider theme={theme}>
              <CssBaseline />
              <Container maxWidth="sm">
                  <Box sx={{ my: 4 }}>
                      <RouterProvider router={router} />
                  </Box>
              </Container>
          </ThemeProvider>
      </Provider>
  </React.StrictMode>
);
