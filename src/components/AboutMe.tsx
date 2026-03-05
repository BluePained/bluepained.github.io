import {
  Box,
  Paper,
  //useMediaQuery,
  useTheme,
  Typography,
  Divider,
  Avatar,
} from "@mui/material";

const AboutMe = () => {
  const theme = useTheme();
  //const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));

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
            About Me...
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              pb: 3,
            }}
          >
            <Avatar
              src="/Me/Me.jpg"
              alt="profile"
              sx={{
                width: 300,
                height: 300,
                border: 2,
              }}
            />
            <Box sx={{ ml: 6, alignContent: "center" }}>
              <Typography sx={{ mb: 2, whiteSpace: "pre-line" }}>
                {`Hello! My name is Teerapat Inwiset, also known as BluePained on
                the Internet. 
                
                I am a Unity game developer currently studying
                Interactive and Game Design at Sripatum University.
                
                I am interested in Technical Art, Particularly tool development and
                shader creation. I enjoy improving workflows and enchancing
                visual quality through technical solutions. `}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
};
export default AboutMe;
