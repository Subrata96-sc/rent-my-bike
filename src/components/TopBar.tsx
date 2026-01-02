import {
  Box,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const TopBar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#22a652",
        color: "#fff",
        py: 0.5,
      }}
    >
      <Box maxWidth="lg" mx="auto" px={2}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Left: Email */}
          <Stack direction="row" alignItems="center" spacing={1}>
            <EmailOutlinedIcon sx={{ fontSize: 18 }} />
            <Typography variant="body2">
              email@rentmybike.com
            </Typography>
          </Stack>

          {/* Right: Social Links */}
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography
              variant="body2"
              sx={{ fontWeight: 500 }}
            >
              FOLLOW US ON :
            </Typography>

            <IconButton
              size="small"
              sx={{ color: "#fff" }}
            >
              <FacebookIcon fontSize="small" />
            </IconButton>

            <IconButton
              size="small"
              sx={{ color: "#fff" }}
            >
              <XIcon fontSize="small" />
            </IconButton>

            <IconButton
              size="small"
              sx={{ color: "#fff" }}
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>

            <IconButton
              size="small"
              sx={{ color: "#fff" }}
            >
              <InstagramIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default TopBar;
