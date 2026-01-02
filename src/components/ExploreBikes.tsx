import { Box, Typography, Stack, IconButton } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BikeCard from "./BikeCard";

const ExploreBikes = () => {
  return (
    <Box maxWidth="lg" mx="auto" px={2} mt={8} mb={10}>
      {/* Header */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={3}
      >
        <Typography
          variant="h5"
          sx={{ color: "#22a652", fontWeight: 600 }}
        >
          Explore our bikes
        </Typography>

        <Stack direction="row" spacing={1}>
          <IconButton
            size="small"
            sx={{
              width: 32,
              height: 32,
              borderRadius: 1,
              border: "1px solid #22a652",
              color: "#22a652",
            }}
          >
            <ArrowBackIcon />
          </IconButton>

          <IconButton
            size="small"
            sx={{
              width: 32,
              height: 32,
              borderRadius: 1,
              border: "1px solid #22a652",
              color: "#22a652",
            }}
          >
            <ArrowForwardIcon />
          </IconButton>
        </Stack>
      </Box>

      {/* Cards */}
      <Stack
        direction="row"
        spacing={3}
        justifyContent="space-between"
        flexWrap="wrap"
      >
        {["Uppsala", "Stockholm", "Gothenburg", "Stockholm"].map(
          (city, index) => (
            <BikeCard key={index} city={city} />
          )
        )}
      </Stack>
    </Box>
  );
};

export default ExploreBikes;
