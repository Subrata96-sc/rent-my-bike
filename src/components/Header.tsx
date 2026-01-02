import {
  AppBar,
  Toolbar,
  Button,
  Box,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
const Header = () => {
  return (
    <AppBar position="static" color="inherit" elevation={1}>
      <Toolbar
        sx={{
          maxWidth: "lg",
          mx: "auto",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Logo - Left */}
        <Box display="flex" alignItems="center">
          <img
            src="/images/icons/logo_main.png"
            alt="logo"
            style={{
              height: 48,
              width: "auto",
              objectFit: "contain",
            }}
          />
        </Box>

        {/* Navigation - Right */}
        <Box display="flex" alignItems="center" gap={2}>
          <Button component={RouterLink}
            to="/" color="primary">Home</Button>
          <Button>About</Button>
          <Button>Browse Bikes</Button>
          <Button
            component={RouterLink}
            to="/signin"
          >
            SIGN IN
          </Button>
          <Button variant="outlined">Sign Up</Button>
          <Button variant="contained">Create Listing</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
