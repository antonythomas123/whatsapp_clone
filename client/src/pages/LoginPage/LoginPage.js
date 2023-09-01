import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, Snackbar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const defaultTheme = createTheme();

export default function LoginPage({ setIsLoggedIn }) {
  const [signInDetails, setSignInDetails] = React.useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (signInDetails.email === "") {
      setMessage("Email Cannot be Empty !");
      setOpen(true);
    } else if (signInDetails.password === "") {
      setMessage("Password cannot be Empty !");
      setOpen(true);
    } else if (
      signInDetails.email === "abc" &&
      signInDetails.password === "123"
    ) {
      setMessage("User signed in successfully");
      setOpen(true);
      setIsLoggedIn(true);
    } else {
      setMessage("Invalid Password!");
      setOpen(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            background: ``,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => {
                  setSignInDetails((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }));
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => {
                  setSignInDetails((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }));
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to={"/forgot"}>Forgot password?</Link>
                </Grid>
                <Grid item>
                  <Link to={"/signup"}>{"Don't have an account? Sign Up"}</Link>
                </Grid>
              </Grid>
            </Box>
            <Snackbar
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
              message={message}
              action={action}
            />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
