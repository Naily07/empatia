import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Header from "./header";
import { useTheme } from "@emotion/react";
import navLists from "../utils/navList";
const drawerWidth = 300;

function ResponsiveDrawer(props) {
  // const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [navLinks, setNavLinks] = useState(navLists);
  const theme = useTheme();
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };
  const setActive = (item) => {
    console.log("ITEM", item);
    setNavLinks((prev) => {
      return prev.map((el, i) => {
        return { ...el, active: el.label === item.label };
      });
    });
  };
  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  // Tableau des liens de navigation

  const drawer = (
    <div>
      <Toolbar>
        <Box
          component={"img"}
          sx={{ width: "175px" }}
          src="/static/logo.png"
        ></Box>
      </Toolbar>
      <Typography variant="h6" color="text.secondary" sx={{ pl: 2, mt: 2 }}>
        Principale
      </Typography>
      <List sx={{ pl: 2 }}>
        {navLinks.map((item, index) => {
          return (
            item.nav === "principal" && (
              <ListItem key={item.route} disablePadding>
                <ListItemButton
                  selected={item.active}
                  onClick={() => setActive(item)}
                >
                  <ListItemIcon>
                    {item.active ? item.iconActive : item.iconNotActive}
                  </ListItemIcon>
                  <ListItemText secondary={item.label} />
                </ListItemButton>
              </ListItem>
            )
          );
        })}
      </List>
      <Typography variant="h6" color="text.secondary" sx={{ pl: 2, mt: 2 }}>
        Support
      </Typography>
      <List sx={{ pl: 2 }}>
        {navLinks.map((item, index) => {
          return (
            item.nav === "support" && (
              <ListItem key={item.route} disablePadding>
                <ListItemButton
                  selected={item.active}
                  onClick={() => setActive(item)}
                >
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText secondary={item.label} />
                </ListItemButton>
              </ListItem>
            )
          );
        })}
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: "none",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: theme.palette.mode === "light" ? "#FFF" : "#121212",
        }}
      >
        {/* HEADER */}
        <Toolbar sx={{ p: 2 }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Header />
        </Toolbar>
        <Divider />
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        {/* display for mobile */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          slotProps={{
            root: {
              keepMounted: true, // Better open performance on mobile.
            },
          }}
          // container={container}
        >
          {drawer}
        </Drawer>
        {/* Display for desktop */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
            // backgroundColor: theme.palette.background.default,
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
