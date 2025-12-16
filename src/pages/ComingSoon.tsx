import React from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
} from "@mui/material";

import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import VerifiedIcon from "@mui/icons-material/Verified";
import LanguageIcon from "@mui/icons-material/Language";
import SearchIcon from "@mui/icons-material/Search";

/* ---------------- Icon Circle ---------------- */
const IconCircle = ({
  text,
  icon,
}: {
  text: string;
  icon: React.ReactNode;
}) => (
  <Box textAlign="center" sx={{ width: 160 }}>
    <Box
      sx={{
        width: 90,
        height: 90,
        mx: "auto",
        borderRadius: "50%",
        border: "4px solid #2e7d32",
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mb: 2,
      }}
    >
      {icon}
    </Box>

    <Typography fontSize="0.95rem" fontWeight={500} lineHeight={1.3}>
      {text.split(" and ").map((line, index) => (
        <Box key={index} component="span" display="block">
          {index === 1 ? "and " : ""}
          {line}
        </Box>
      ))}
    </Typography>
  </Box>
);

/* ---------------- Main Component ---------------- */
const ComingSoon: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "url('/images/coming-soon-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.55)",
        },
      }}
    >
      <Paper
        elevation={10}
        sx={{
          position: "relative",
          maxWidth: 1000,
          width: "100%",
          p: { xs: 3, sm: 6 },
          borderRadius: 2,
          textAlign: "center",
          backgroundColor: "rgba(255,255,255,0.85)",
        }}
      >
        {/* Logo */}
        <Box mb={3}>
          <img src="/images/logo.jpeg" alt="logo" height={60} />
        </Box>

        {/* Heading */}
        <Typography
          sx={{
            fontSize: { xs: "1.9rem", sm: "2.7rem" },
            fontWeight: 800,
            color: "#2e7d32",
            mb: 2,
          }}
        >
          COMING SOON
        </Typography>

        <Typography fontWeight={600} mb={1}>
          Our website is currently undergoing scheduled maintenance.
        </Typography>

        <Typography mb={4}>
          We’ll be back shortly! Sign up now to receive early notifications of
          our launch date.
        </Typography>

        {/* Email Form */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="center"
          spacing={0}
          mb={6}
        >
          <TextField
            placeholder="Enter your email address"
            required
            sx={{
              width: { xs: "100%", sm: 375 },
              "& .MuiInputBase-root": {
                height: 51,
                backgroundColor: "#fff",
                borderRadius: { xs: 1, sm: "8px 0 0 8px" },
              },
            }}
          />

          <Button
            variant="contained"
            sx={{
              height: 51,
              borderRadius: { xs: 1, sm: "0 8px 8px 0" },
              backgroundColor: "#2e7d32",
              px: 4,
              whiteSpace: "nowrap",
              "&:hover": { backgroundColor: "#1b5e20" },
            }}
          >
            Notify me
          </Button>
        </Stack>

        {/* Steps */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            <IconCircle text="Visit Website" icon={<LanguageIcon fontSize="large" />} />
            <ArrowForwardIcon
              sx={{ color: "#2e7d32", fontSize: 20,   transform: "translateY(-14px)", display: { xs: "none", sm: "block" } }}
            />
          </Stack>

          <Stack direction="row" alignItems="center" spacing={2}>
            <IconCircle
              text="Search for desired Bike and book"
              icon={<SearchIcon fontSize="large" />}
            />
            <ArrowForwardIcon
              sx={{ color: "#2e7d32", fontSize: 20,   transform: "translateY(-14px)", display: { xs: "none", sm: "block" } }}
            />
          </Stack>

          <Stack direction="row" alignItems="center" spacing={2}>
            <IconCircle
              text="Verify your profile"
              icon={<VerifiedIcon fontSize="large" />}
            />
            <ArrowForwardIcon
              sx={{ color: "#2e7d32", fontSize: 20,  transform: "translateY(-14px)", display: { xs: "none", sm: "block" } }}
            />
          </Stack>

          <IconCircle
            text="Get ready for your trip"
            icon={<DirectionsBikeIcon fontSize="large" />}
          />
        </Stack>
      </Paper>
    </Box>
  );
};

export default ComingSoon;
