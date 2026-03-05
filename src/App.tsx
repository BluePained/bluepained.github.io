import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { Fab, Box, useTheme, useMediaQuery } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Game from "./components/Projects/Game";
import Shader from "./components/Projects/Shader";
import Tool from "./components/Projects/Tool";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Box
        sx={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/Background/Pattern.png')",
            backgroundRepeat: "repeat",
            zIndex: -1,
            animation: "moveBg 40s linear infinite",
          },
          "@keyframes moveBg": {
            from: {
              backgroundPosition: "0px 0px",
            },
            to: {
              backgroundPosition: "0px 2000px",
            },
          },
        }}
      >
        <Navbar />
        <Box sx={{ flex: 1 }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Projects/Game" element={<Game />} />
              <Route path="/Projects/Shader" element={<Shader />} />
              <Route path="/Projects/Tool" element={<Tool />} />
              <Route path="/AboutMe" element={<AboutMe />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
            {show && (
              <Fab
                variant="circular"
                onClick={scrollToTop}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  position: "fixed",
                  bottom: isSmallScreen ? 90 : 30,
                  right: 30,
                  zIndex: 1000,
                  bgcolor: theme.palette.background.tab,
                  "&:hover": {
                    bgcolor: theme.palette.primary.light,
                  },
                }}
              >
                <ArrowUpwardIcon
                  sx={{
                    color: theme.palette.background.nav,
                    fontSize: 35,
                  }}
                />
              </Fab>
            )}
          </BrowserRouter>
        </Box>
        <Footer />
      </Box>
    </>
  );
}

export default App;
