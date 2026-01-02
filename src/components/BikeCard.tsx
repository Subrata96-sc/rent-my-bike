import {
  Box,
  Typography,
  Stack,
  IconButton,
} from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface BikeCardProps {
  city: string;
}

const BikeCard = ({ city }: BikeCardProps) => {
  return (
    <Box
      sx={{
        width: 260,
        border: "1px solid #e0e0e0",
        borderRadius: 1,
        backgroundColor: "#fff",
        p: 2,
      }}
    >
      {/* Bike Image */}
      <Box
        component="img"
        src="/images/bike.jpg"
        alt="Bike"
        sx={{
          width: "100%",
          height: 150,
          objectFit: "cover",
          mb: 2,
        }}
      />

      {/* Card Content */}
      <Stack spacing={0.5}>
        <Typography
          variant="body2"
          sx={{ color: "#22a652", fontWeight: 600 }}
        >
          Smart Bike details
        </Typography>

        <Typography variant="body2">
          Price :{" "}
          <Box component="span" sx={{ color: "#22a652", fontWeight: 600 }}>
            $19.99
          </Box>{" "}
          <Box component="span" sx={{ fontSize: 12, color: "#22a652" }}>
            (Per hour)
          </Box>
        </Typography>

        <Typography variant="body2">
          Model : Model 1
        </Typography>

        <Typography variant="body2">
          Country : Sweden
        </Typography>

        {/* City + Arrow */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mt={0.5}
        >
          <Typography variant="body2">
            City : {city}
          </Typography>

          <IconButton
            sx={{
              width: 32,
              height: 32,
              borderRadius: 1,
              bgcolor: "#22a652",
              color: "#fff",
              "&:hover": {
                bgcolor: "#1e8e4a",
              },
            }}
          >
            <ArrowForwardIcon />
          </IconButton>
        </Box>
      </Stack>
    </Box>
  );
};

export default BikeCard;
