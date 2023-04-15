import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Alert from "@mui/material/Alert";

const theme = createTheme();
const BACKEND_URL = "http://localhost:3001/login";

export default function SignIn() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [token, setToken] = useState(null);
  const checkToken = localStorage.getItem("token");
  useEffect(() => {
    if (checkToken) {
      navigate("/quiz", { replace: true });
    }
  }, [checkToken]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (location.state && location.state.from) {
        navigate(location.state.from, { replace: true });
      } else {
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.error(error);
      setError(error);
    }
  };

  const handleSignUpClick = (event) => {
    event.preventDefault();
    navigate("/user", { state: { from: "/" } });
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            This is linktree website and Basically User come and create account
            and login and give all social media links of user and get the link
            which will be shared and that contains all the links.
          </Typography>
          <div></div>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Go to Sign In
            </Button>
            {error && (
              <Alert severity="error">
                {error.response.data.message || "An unknown error occurred"}
              </Alert>
            )}
            <Grid container>
              <Grid item xs>
                <Link href="/forgotPass" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
