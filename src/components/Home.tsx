import {
  Box,
  Grid,
  Typography,
  useTheme,
  Divider,
  Card,
  CardMedia,
  CardContent,
  Button,
  useMediaQuery,
} from "@mui/material";
import Banner from "./Banner";

const Home = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const game = [
    {
      title: "DicXtator",
      imagePath: "/Game/DicXtator/DicXtator.png",
      link: "https://bluepained.itch.io/dictator-ggj-edition",
    },
    {
      title: "Ella's alone night",
      imagePath: "/Game/Ella'sAloneNight/Ella'sAloneNight.png",
      link: "https://bluepained.itch.io/ellas-alone-night",
    },
    {
      title: "Farly's Flower Shop",
      imagePath: "/Game/Farly'sFlowerShop/Farly'sFlowerShop.png",
      link: "https://draypixel.itch.io/farlys-flower-shop",
    },
  ];

  return (
    <>
      <Banner />
      <Box
        sx={{
          py: isSmallScreen ? 0 : 3,
          bgcolor: theme.palette.background.drawer,
        }}
      />
      <Box
        sx={{
          pt: 4,
          maxWidth: 1200,
          mx: "auto",
          bgcolor: theme.palette.background.card,
        }}
      >
        <Typography
          sx={{
            color: theme.palette.text.primary,
            display: "flex",
            justifyContent: "center",
          }}
          variant="h4"
        >
          <strong>Game Projects</strong>
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Divider
            sx={{
              width: "30%",
              p: 0.1,
              mt: 1,
              mb: 2,
              bgcolor: theme.palette.background.divider,
            }}
          />
        </Box>
        <Grid
          container
          spacing={4}
          sx={{
            px: { xs: 3, md: 8 },
            pt: 3,
            pb: 1,
            bgcolor: theme.palette.background.card,
          }}
        >
          {game.map((item, index) => (
            <Grid key={index} size={{ xs: 12, md: 4 }}>
              <Card
                component="a"
                href={item.link}
                rel="noopener noreferrer"
                target="_blank"
                sx={{
                  textDecoration: "none",
                }}
              >
                <CardMedia
                  component="img"
                  image={item.imagePath}
                  alt={item.title}
                  sx={{
                    borderRadius: 3,
                    height: 220,
                    objectFit: "cover",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "translateY(-8px) scale(1.03)",
                    },
                  }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: "center",
                      fontWeight: 600,
                    }}
                  >
                    {item.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pb: 3,
          }}
        >
          <Button
            variant="contained"
            href="/Projects/Game"
            sx={{
              px: 4,
              py: 1,
              borderRadius: 3,
              textTransform: "none",
              fontWeight: 600,
              fontSize: 20,
              transition: "all 0.3s ease",
              bgcolor: theme.palette.background.divider,
              "&:hover": {
                transform: "translateY(-3px)",
              },
            }}
          >
            See all the projects
          </Button>
        </Box>
      </Box>
    </>
  );
};
export default Home;
