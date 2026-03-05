import {
  Box,
  Typography,
  // useMediaQuery,
  useTheme,
  Divider,
  Paper,
  IconButton,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";

function ImageSlider({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);
  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        borderRadius: 3,
        mb: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          transition: "transform 0.5s ease",
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {images.map((img, index) => (
          <Box
            key={index}
            component="img"
            src={img}
            alt={`slide-${index}`}
            sx={{
              width: "100%",
              flexShrink: 0,
            }}
          />
        ))}
      </Box>
      {images.length > 1 && (
        <>
          <IconButton
            onClick={handlePrev}
            sx={{
              position: "absolute",
              top: "50%",
              left: 10,
              transform: "translateY(-50%)",
              bgcolor: "rgba(0,0,0,0.4)",
              color: "white",
              "&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              top: "50%",
              right: 10,
              transform: "translateY(-50%)",
              bgcolor: "rgba(0,0,0,0.4)",
              color: "white",
              "&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </>
      )}
    </Box>
  );
}

const Game = () => {
  const theme = useTheme();
  //const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));
  //const isMobile = useMediaQuery("(max-width: 600px)");
  const currentPath = window.location.pathname;
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [pressedTab, setPressedTab] = useState<string | null>(null);

  const shader = [
    {
      title: "Dissolve",
      gifPath: [
        "/Shaders/Dissolve/Dissolve_Shell_Full.gif",
        "/Shaders/Dissolve/Dissolves_Full.gif",
        "/Shaders/Dissolve/Dissolves.gif",
        "/Shaders/Dissolve/Pixelated_Dissolve.gif",
      ],
      desc: ["Normal Dissolve", "Shell Dissolve", "Pixelated Dissolve"],
    },
    {
      title: "Force Field",
      gifPath: [
        "/Shaders/ForceField/ForceField-Hologram_Full.gif",
        "/Shaders/ForceField/ForceField-Hologram.gif",
      ],
      desc: ["None"],
    },
    {
      title: "Dither",
      gifPath: ["/Shaders/Dither.gif"],
      desc: ["None"],
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
            pt: { xs: 3, md: 8 },
            borderRadius: 4,
            bgcolor: theme.palette.background.card,
          }}
        >
          {shader.map((shader, index) => (
            <Box key={index} sx={{ mb: 6 }}>
              <Typography
                variant="h5"
                sx={{
                  color: theme.palette.background.tab,
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                {shader.title}
              </Typography>
              <ImageSlider images={shader.gifPath} />
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.background.tab,
                  fontWeight: 700,
                }}
              >
                Shader Variation:
              </Typography>
              <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                {shader.desc?.map((point, i) => (
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
              <Divider
                sx={{
                  mt: 5,
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
