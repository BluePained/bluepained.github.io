import {
  Box,
  Paper,
  Typography,
  //useMediaQuery,
  useTheme,
  Divider,
} from "@mui/material";

const Contact = () => {
  const theme = useTheme();
  //const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  //const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <>
      <Box
        sx={{
          mt: 20,
          py: 6,
          px: { xs: 2, md: 50 },
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Paper
          sx={{
            width: "100%",
            px: { xs: 3, md: 8 },
            py: { xs: 4, md: 2 },
            borderRadius: 4,
            bgcolor: theme.palette.background.card,
          }}
        >
          <Typography
            sx={{
              color: theme.palette.background.tab,
              textAlign: "center",
              fontWeight: 700,
            }}
            variant="h3"
          >
            Contact
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Divider
              sx={{
                width: "70%",
                mt: 2,
                mb: 5,
                bgcolor: theme.palette.text.primary,
              }}
            />
          </Box>
          <Box sx={{ ml: 19, alignContent: "center" }}>
            <Typography sx={{ mb: 2, whiteSpace: "pre-line" }}>
              {`Email: bluepanied.work@gmail.com
              Mobile: 063-414-9561
              Facebook: จีโร่ นอน (@sleepless.jiro)`}
            </Typography>
          </Box>
        </Paper>
      </Box>
    </>
  );
};
export default Contact;
