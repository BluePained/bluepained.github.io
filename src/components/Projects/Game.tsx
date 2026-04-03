import {
  Box,
  Typography,
  //useMediaQuery,
  useTheme,
  Divider,
  Paper,
  Grid,
} from "@mui/material";
import { useState } from "react";

const Game = () => {
  const theme = useTheme();
  //const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));
  //const isMobile = useMediaQuery("(max-width: 600px)");
  const currentPath = window.location.pathname;
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [pressedTab, setPressedTab] = useState<string | null>(null);

  const game = [
    {
      title: "Grand Debt Auto",
      gifPath: "/Game/GrandDebtAuto/GDA.gif",
      imagePath: "/Game/GrandDebtAuto/GDA.jpg",
      link: "https://draypixel.itch.io/grand-debt-auto",
      jam: "One More Run IV (2026)",
      team: "6 People",
      role: "Technical Artist",
      job: [
        "Enforced poly count and draw call budgets, optimizing assets for web performance.",
        "Advised the 3D artist on poly limits and optimization techniques.",
        "Designed the game thumbnail.",
      ],
    },
    {
      title: "DicXtator",
      gifPath: "/Game/DicXtator/DicXtator.gif",
      imagePath: "/Game/DicXtator/DicXtator.png",
      link: "https://bluepained.itch.io/dictator-ggj-edition",
      jam: "Global Game Jam 2026",
      team: "3 People",
      role: "Programmer",
      job: [
        "Designed and implemented data-driven system using ScriptableObject for characters and document papers data.",
        "Controlled the atmosphere of the game with lights and post-processing.",
        "Created fading animation of the tube using Shader Graph.",
      ],
    },
    {
      title: "Ella's alone night",
      gifPath: "/Game/Ella'sAloneNight/Ella'sAloneNight.gif",
      imagePath: "/Game/Ella'sAloneNight/Ella'sAloneNight.png",
      link: "https://bluepained.itch.io/ellas-alone-night",
      jam: "Brackeys Game Jam 2024.2",
      team: "4 People",
      role: "Programmer",
      job: [
        "Designed and implemented the gameplay.The Sanity dropped overtime according to “Mind” state and determined the difficulty.",
        "Integrate the assets and build the scene using 2D Tilemap Editor",
      ],
    },
    {
      title: "Farly's Flower Shop",
      gifPath: "/Game/Farly'sFlowerShop/Farly'sFlowerShop.gif",
      imagePath: "/Game/Farly'sFlowerShop/Farly'sFlowerShop.png",
      link: "https://draypixel.itch.io/farlys-flower-shop",
      jam: "B1T Jam 2",
      team: "4 People",
      role: "2D Artist",
      job: [
        "Designed overall 2D assets, and designed the modularity of the customer to make sure the game had a variety of customer appearances.",
      ],
    },
    {
      title: "Sisyphus on the road trip",
      gifPath: "/Game/SisyphusOnTheRoadTrip/Sisyphus.gif",
      imagePath: "/Game/SisyphusOnTheRoadTrip/SisyphusOnTheRoadTrip.png",
      link: "https://bluepained.itch.io/sisyphus-on-the-road-trip",
      jam: "Thailand Summer Jam 2025",
      team: "4 People",
      role: "Programmer",
      job: [
        "Implement the player's movement.",
        "Adjusted the car's physics so that it goes forward smoothly.",
      ],
    },
    {
      title: "Smithy",
      gifPath: "/Game/Smithy/Smith.gif",
      imagePath: "/Game/Smithy/Smithy.png",
      link: "https://bluepained.itch.io/smithy",
      jam: "GMTK Game Jam 2024",
      team: "3 People",
      role: "Programmer",
      job: [
        "Designed and implemented data-driven system using scriptable object for characters and dialogues.",
        "Implement the customizable object from 2D sprites.",
        "Write the story and the dialogues.",
      ],
    },
  ];

  const tabs = [
    {
      title: "Game",
      link: "/Projects/Game",
    },
    {
      title: "Shader",
      link: "/Projects/Shader",
    },
    { title: "Tool", link: "/Projects/Tool" },
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
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
            mr: { xs: 0, md: 2 },
            flexWrap: "wrap",
          }}
        >
          {tabs.map((tab) => {
            const isActive = currentPath === tab.link;
            const isHovered = hoveredTab === tab.link;
            const isPressed = pressedTab === tab.link;
            const shouldHighlight = isHovered || (!hoveredTab && isActive);
            return (
              <Box
                sx={{
                  p: 1,
                  mr: 1,
                  borderTopLeftRadius: 3,
                  borderTopRightRadius: 3,
                  backgroundColor: shouldHighlight
                    ? theme.palette.background.card
                    : theme.palette.background.tabSecondary,
                }}
              >
                <Typography
                  key={tab.title}
                  component="a"
                  href={tab.link}
                  variant="h5"
                  onMouseEnter={() => setHoveredTab(tab.link)}
                  onMouseLeave={() => setHoveredTab(null)}
                  onMouseDown={() => setPressedTab(tab.link)}
                  onMouseUp={() => setPressedTab(null)}
                  sx={{
                    textDecoration: "none",
                    cursor: "pointer",
                    px: 4,
                    py: 1,
                    display: "inline-block",
                    transition:
                      "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 200ms ease",
                    transform: isPressed ? "scale(1.1)" : "scale(1)",
                    color: shouldHighlight
                      ? theme.palette.text.primary
                      : theme.palette.text.secondary,
                  }}
                >
                  {tab.title}
                </Typography>
              </Box>
            );
          })}
        </Box>
        <Paper
          sx={{
            width: "100%",
            px: { xs: 3, md: 8 },
            pt: { xs: 3, md: 4 },
            borderRadius: 4,
            bgcolor: theme.palette.background.card,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
              mb: 3,
              textAlign: "center",
            }}
          >
            Click the thumbnail to visit the game's page
          </Typography>
          {game.map((game, index) => (
            <Box key={index} sx={{ mb: 6 }}>
              <Grid container spacing={4}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Box
                    component="a"
                    href={game.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: "block",
                      textDecoration: "none",
                    }}
                  >
                    <Box
                      component="img"
                      src={game.imagePath}
                      alt={game.title}
                      sx={{
                        width: "100%",
                        borderRadius: 3,
                        mb: 3,
                        cursor: "pointer",
                        transition: "0.3s ease",
                        "&:hover": {
                          transform: "scale(1.02)",
                          opacity: 0.9,
                        },
                      }}
                    />
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: theme.palette.background.tab,
                      fontWeight: 700,
                    }}
                  >
                    {game.title}
                  </Typography>
                  <Divider
                    sx={{ bgcolor: theme.palette.text.secondary, my: 0.5 }}
                  />
                  <Typography variant="body2" sx={{ color: "white" }}>
                    {game.jam}
                  </Typography>
                  <Divider
                    sx={{ bgcolor: theme.palette.text.secondary, my: 0.5 }}
                  />
                  <Typography variant="body2" sx={{ color: "white" }}>
                    Team Size: {game.team}
                  </Typography>
                  <Divider
                    sx={{ bgcolor: theme.palette.text.secondary, my: 0.5 }}
                  />
                  <Typography variant="body2" sx={{ color: "white" }}>
                    {game.role}
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 8 }}>
                  <Box
                    component="img"
                    src={game.gifPath}
                    alt="preview"
                    sx={{
                      width: "100%",
                      borderRadius: 3,
                      mb: 3,
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      color: theme.palette.background.tab,
                      fontWeight: 700,
                    }}
                  >
                    What I built
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                    {game.job?.map((point, i) => (
                      <Typography
                        key={i}
                        component="li"
                        variant="body2"
                        sx={{ mb: 0.5 }}
                      >
                        {point}
                      </Typography>
                    ))}
                  </Box>
                </Grid>
              </Grid>
              <Divider
                sx={{
                  mt: 6,
                  bgcolor: theme.palette.text.primary,
                }}
              />
            </Box>
          ))}
        </Paper>
      </Box>
    </>
  );
};
export default Game;
