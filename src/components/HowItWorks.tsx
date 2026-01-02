import { Box, Typography, Stack, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState } from "react";

const steps = [
  "Sign up & verify your account",
  "Choose a bike from the catalog",
  "Select dates to rent from a calendar",
  "Complete your booking with payment & deposit",
  "Payment is released on bike return",
  "Secure payments with Stripe, trusted by millions of users worldwide.",
  "Deposit is released back to you when the bike is returned in good condition.",
];

const HowItWorks = () => {
  const [active, setActive] = useState<"renter" | "lister">("renter");

  return (
    <Box>
      {/* Header */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={3}
      >
        <Typography
          variant="h4"
          fontWeight={600}
          color="#22a652"
        >
          How it works
        </Typography>

        {/* Segmented Toggle */}
        <Box
          sx={{
            display: "flex",
            p: "4px",
            bgcolor: "#f1f1f1",
            borderRadius: 1,
          }}
        >
          <Button
            onClick={() => setActive("renter")}
            sx={{
              minWidth: 100,
              height: 32,
              borderRadius: 1,
              textTransform: "none",
              fontWeight: 600,
              bgcolor:
                active === "renter" ? "#22a652" : "#fff",
              color:
                active === "renter" ? "#fff" : "#000",
              "&:hover": {
                bgcolor:
                  active === "renter"
                    ? "#1e8e4a"
                    : "#fff",
              },
            }}
          >
            For Renter
          </Button>

          <Button
            onClick={() => setActive("lister")}
            sx={{
              minWidth: 100,
              height: 32,
              borderRadius: 1,
              textTransform: "none",
              fontWeight: 600,
              bgcolor:
                active === "lister" ? "#22a652" : "#fff",
              color:
                active === "lister" ? "#fff" : "#000",
              "&:hover": {
                bgcolor:
                  active === "lister"
                    ? "#1e8e4a"
                    : "#fff",
              },
            }}
          >
            For Lister
          </Button>
        </Box>
      </Stack>

      {/* Content */}
      <Typography fontWeight={600} mb={2}>
        RENT A BIKE
      </Typography>

      <Stack spacing={1.5}>
        {steps.map((step, index) => (
          <Stack
            key={index}
            direction="row"
            spacing={1}
            alignItems="flex-start"
          >
            <CheckCircleIcon
              sx={{
                color: "#22a652",
                fontSize: 20,
                mt: "2px",
              }}
            />
            <Typography variant="body2">
              {step}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default HowItWorks;
