import {
  AppBar,
  IconButton,
  Box,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  useScrollTrigger,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const [openMenu, setOpenMenu] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(openMenu);
  const currentPath = window.location.pathname;
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [pressedTab, setPressedTab] = useState<string | null>(null);
  const trigger = useScrollTrigger({ threshold: 80 });
  const tabs = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Projects",
      link: ["/Projects/Game", "/Projects/Shader", "/Projects/Tool"],
    },
    { title: "About Me", link: "/AboutMe" },
    { title: "Contact", link: "/Contact" },
  ];

  useEffect(() => {
    if (openMenu) {
      setTimeout(() => {
        setDrawerOpen(true);
      }, 200);
    } else {
      setDrawerOpen(false);
    }
  }, [openMenu]);

  return (
    <>
      <AppBar
        sx={{
          zIndex: 1550,
          bgcolor: theme.palette.background.nav,
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            mt: 2,
            mb: 2,
          }}
        >
          {!isSmallScreen ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Typography
                component="a"
                href="/"
                sx={{
                  textDecoration: "none",
                  color: theme.palette.text.primary,
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                }}
                variant="h4"
              >
                <strong>Teerapat Inwiset</strong>
              </Typography>
              <Collapse in={!trigger} timeout={300}>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "row",
                    }}
                  >
                    <Divider
                      sx={{
                        width: "23%",
                        p: 0.2,
                        mt: 1.2,
                        mb: 2,
                        bgcolor: theme.palette.background.divider,
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {tabs.map((tab) => {
                      const isMultiLink = Array.isArray(tab.link);
                      const isActive = isMultiLink
                        ? tab.link.includes(currentPath)
                        : currentPath === tab.link;
                      const isHovered = hoveredTab === tab.title;
                      const isPressed = pressedTab === tab.title;
                      const href =
                        typeof tab.link === "string" ? tab.link : tab.link[0];
                      const shouldHighlight =
                        isHovered || (!hoveredTab && isActive);
                      return (
                        <Typography
                          key={tab.title}
                          component="a"
                          href={href}
                          variant="h5"
                          onMouseEnter={() => setHoveredTab(tab.title)}
                          onMouseLeave={() => setHoveredTab(null)}
                          onMouseDown={() => setPressedTab(tab.title)}
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
                              ? theme.palette.background.nav
                              : theme.palette.text.primary,
                            backgroundColor: shouldHighlight
                              ? theme.palette.background.tab
                              : "transparent",
                          }}
                        >
                          {tab.title}
                        </Typography>
                      );
                    })}
                  </Box>
                </Box>
              </Collapse>
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                width: "100%",
              }}
            >
              <IconButton onClick={() => setOpenMenu(!openMenu)}>
                <MenuIcon
                  sx={{ fontSize: 40, color: theme.palette.background.tab }}
                />
              </IconButton>
              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={() => setOpenMenu(false)}
                sx={{
                  zIndex: 1551,
                  "& .MuiDrawer-paper": {
                    width: 260,
                    bgcolor: theme.palette.background.drawer,
                    padding: 2,
                  },
                }}
              >
                <Box sx={{ mb: 1 }}>
                  <IconButton onClick={() => setOpenMenu(false)}>
                    <PlayArrowIcon
                      sx={{
                        fontSize: 60,
                        color: theme.palette.background.paper,
                        transform: "rotate(180deg)",
                      }}
                    />
                  </IconButton>
                  <Divider
                    sx={{
                      width: "80%",
                      p: 0.1,
                      ml: 2,
                      bgcolor: theme.palette.background.divider,
                    }}
                  />
                </Box>
                {tabs.map((tab) => {
                  const isMultiLink = Array.isArray(tab.link);
                  const isActive = isMultiLink
                    ? tab.link.includes(currentPath)
                    : currentPath === tab.link;
                  const href =
                    typeof tab.link === "string" ? tab.link : tab.link[0];
                  return (
                    <ListItem key={tab.title} disablePadding>
                      <ListItemButton
                        component="a"
                        href={href}
                        sx={{
                          color: isActive
                            ? theme.palette.background.tab
                            : theme.palette.text.primary,
                        }}
                      >
                        <ListItemText
                          primary={tab.title}
                          slotProps={{
                            primary: {
                              fontWeight: isActive ? 600 : 400,
                              fontSize: 25,
                            },
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </Drawer>
              <Typography
                component="a"
                href="/"
                sx={{
                  textDecoration: "none",
                  color: theme.palette.text.primary,
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                }}
                variant="h4"
              >
                <strong>Teerapat Inwiset</strong>
              </Typography>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
