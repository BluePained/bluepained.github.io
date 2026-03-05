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
  const software = [
    { name: "Unity", icon: "/Icons/Unity_Technologies_logo.png" },
    { name: "Unreal", icon: "/Icons/UE_Logo_Black_Centered.png" },
    { name: "Clip Studio Paint", icon: "/Icons/Clipstudiopaint_app_logo.png" },
    { name: "Aseprite", icon: "/Icons/aseprite.png" },
    { name: "Maya", icon: "/Icons/Autodesk_Maya_logo.png" },
    { name: "Blender", icon: "/Icons/Blender_logo_no_text.png" },
    {
      name: "Substance Painter",
      icon: "/Icons/Adobe_Substance_3D_Painter_icon.png",
    },
    { name: "Zbrush", icon: "/Icons/Zbrush.png" },
  ];

  const socials = [
    {
      name: "@BluePained",
      icon: "/Icons/w_itch-io.png",
      link: "https://bluepained.itch.io/",
    },
    {
      name: "@BlueTrauma",
      icon: "/Me/BlueTrauma.jpg",
      link: "https://www.youtube.com/@BlueTrauma",
    },
    {
      name: "@Sleepless.Jiro",
      icon: "/Icons/w_facebook.png",
      link: "https://www.facebook.com/sleepless.jiro/",
    },
    {
      name: "@BluePained",
      icon: "/Me/BluePained.jpg",
      link: "https://www.youtube.com/@BluePained",
    },
  ];
  return (
    <>
      <Box
        sx={{
          mt: 17,
          py: 6,
          px: { xs: 2, md: 8 },
          maxWidth: 1200,
          mx: "auto",
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
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "center" },
              pb: 3,
            }}
          >
            <Avatar
              src="/Me/Me.jpg"
              alt="profile"
              sx={{ width: 200, height: 200, border: 2, flexShrink: 0 }}
            />
            <Box
              sx={{
                ml: { xs: 0, md: 6 },
                mt: { xs: 3, md: 0 },
                alignContent: "center",
              }}
            >
              <Typography>
                Hello! My name is Teerapat Inwiset, also known as BluePained on
                the Internet.
              </Typography>
              <Typography sx={{ mt: 2 }}>
                I am a Unity game developer currently studying Interactive and
                Game Design at Sripatum University.
              </Typography>
              <Typography sx={{ mt: 2 }}>
                I am interested in Technical Art, particularly tool development
                and shader creation. I enjoy improving workflows and enhancing
                visual quality through technical solutions.
              </Typography>
            </Box>
          </Box>
          <Divider sx={{ bgcolor: theme.palette.text.primary, my: 4 }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              gap: 4,
              pb: 3,
            }}
          >
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.background.tab,
                  fontWeight: 700,
                  mb: 2,
                  textAlign: "center",
                }}
              >
                Software
              </Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 2,
                }}
              >
                {software.map((item) => (
                  <Box
                    key={item.name}
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  >
                    <Box
                      component="img"
                      src={item.icon}
                      alt={item.name}
                      sx={{ width: 28, height: 28, objectFit: "contain" }}
                    />
                    <Typography variant="body2">{item.name}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.background.tab,
                  fontWeight: 700,
                  mb: 2,
                  textAlign: "center",
                }}
              >
                Connect With Me!
              </Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 2,
                }}
              >
                {socials.map((item) => (
                  <Box
                    key={item.name}
                    component="a"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 1,
                      textDecoration: "none",
                      transition: "transform 0.2s ease",
                      "&:hover": { transform: "scale(1.05)" },
                    }}
                  >
                    <Box
                      component="img"
                      src={item.icon}
                      alt={item.name}
                      sx={{ width: 48, height: 48, objectFit: "contain" }}
                    />
                    <Typography
                      variant="body2"
                      sx={{ color: theme.palette.background.tab }}
                    >
                      {item.name}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
};
export default AboutMe;
