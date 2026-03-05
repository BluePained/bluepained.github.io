import {
  Box,
  Typography,
  useTheme,
  IconButton,
  useMediaQuery,
} from "@mui/material";

const Footer: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <>
      <Box
        component="footer"
        sx={{ bgcolor: theme.palette.background.drawer, pt: 2 }}
      >
        <Typography
          sx={{
            color: theme.palette.primary.light,
            display: "flex",
            justifyContent: "center",
          }}
          variant="h6"
        >
          bluepained.work@gmail.com
        </Typography>
        <Box
          sx={{
            mt: 0.5,
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            gap: 2.5,
          }}
        >
          <IconButton
            component="a"
            href="https://www.facebook.com/sleepless.jiro/"
            target="_blank"
            sx={{
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.1)",
              },
              "&:active": {
                transform: "scale(1.2)",
              },
            }}
          >
            <img
              src="/Icons/w_facebook.png"
              alt="Facebook"
              style={{
                width: isMobile ? 40 : 30,
                height: isMobile ? 40 : 30,
                objectFit: "contain",
              }}
            />
          </IconButton>
          <IconButton
            component="a"
            href="https://github.com/BluePained"
            target="_blank"
            sx={{
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.1)",
              },
              "&:active": {
                transform: "scale(1.2)",
              },
            }}
          >
            <img
              src="/Icons/w_gh.png"
              alt="Git"
              style={{
                width: isMobile ? 42 : 32,
                height: isMobile ? 42 : 32,
                objectFit: "contain",
              }}
            />
          </IconButton>
          <IconButton
            component="a"
            href="https://bluepained.itch.io/"
            target="_blank"
            sx={{
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.1)",
              },
              "&:active": {
                transform: "scale(1.2)",
              },
            }}
          >
            <img
              src="/Icons/w_itch-io.png"
              alt="Itch.io"
              style={{
                width: isMobile ? 52 : 42,
                height: isMobile ? 52 : 42,
                objectFit: "contain",
              }}
            />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.youtube.com/@BlueTrauma"
            target="_blank"
            sx={{
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.1)",
              },
              "&:active": {
                transform: "scale(1.2)",
              },
            }}
          >
            <img
              src="/Icons/w_yt.png"
              alt="Youtube"
              style={{
                width: isMobile ? 55 : 45,
                height: isMobile ? 55 : 45,
                objectFit: "contain",
              }}
            />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};
export default Footer;
