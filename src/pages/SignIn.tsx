import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  Link,
} from "@mui/material";

const SignIn = () => {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 160px)",
        background:
          "radial-gradient(circle at center, #a8e6c2 0%, #c9f3dc 40%, #2faa54 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 6,
      }}
    >
      <Box
        sx={{
          width: 420,
          bgcolor: "#fff",
          p: 4,
          borderRadius: 1,
          boxShadow: "0px 8px 30px rgba(0,0,0,0.15)",
        }}
      >
        <Typography variant="h5" fontWeight={600} mb={3}>
          Sign in
        </Typography>

        <Stack spacing={2.5}>
          <Box>
            <Typography fontSize={14} mb={0.5}>
              Email address <span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              fullWidth
              placeholder="Enter your email"
            />
          </Box>

          <Box>
            <Typography fontSize={14} mb={0.5}>
              Password <span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              fullWidth
              type="password"
              placeholder="Enter your password"
            />
          </Box>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Remember Me"
            />
            <Link
              href="#"
              underline="none"
              fontSize={14}
            >
              Forgot Password?
            </Link>
          </Stack>

          <Button
            fullWidth
            sx={{
              bgcolor: "#1fa64b",
              color: "#fff",
              fontWeight: 600,
              py: 1.2,
              "&:hover": { bgcolor: "#188f40" },
            }}
          >
            LOGIN
          </Button>

          <Typography textAlign="center" fontSize={14}>
            OR
          </Typography>

          <Button
            fullWidth
            sx={{
              bgcolor: "#294acb",
              color: "#fff",
              fontWeight: 600,
              py: 1.2,
              "&:hover": { bgcolor: "#1f3aa3" },
            }}
          >
            CREATE AN ACCOUNT
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default SignIn;
