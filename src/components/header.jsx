import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import ThemeToggle from "./ui/BtnThemeToogle";
import { useNavigate } from "react-router-dom";
import Logo from "./ui/logo";

const drawerWidth = 240;
const navItems = [
  { name: "Accueil", url: "/" },
  { name: "Fonctionnalité", url: "/" },
  { name: "Etapes", url: "/analyse" },
];

function Header(props) {
  // const { window } = props;
  
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        component={"img"}
        sx={{ width: "100px" }}
        src="/static/logo.png"
      ></Box>
      <Divider />
      <List>
        {navItems.map((item, i) => (
          <ListItem key={i} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const navigate = useNavigate();

  // const container =
  //   window !== undefined ? () => window().document.body : undefined;

  return (
    // <Toolbar>
    <Box sx={{ display: "flex" }}>
      <AppBar
        variant="outlined"
        component="nav"
        sx={{ bgcolor: "background.paper" }}
      >
        <Toolbar>
          <IconButton
            color="default"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Logo />
          <Stack
            direction={"row"}
            columnGap={{ xs: 2, md: 5 }}
            sx={{
              justifyContent: "center",
              alignItems: "flex-end",

              flexGrow: 1,
              display: { xs: "none", md: "inline-flex" },
              overflow: "hidden",
            }}
          >
            {navItems.map((item, i) => (
              <Button
                key={i}
                onClick={() => navigate(item.url)}
                sx={{ color: "text.primary" }}
              >
                {item.name}
              </Button>
            ))}
          </Stack>
          <ThemeToggle />
          <Button variant="contained" onClick={() => navigate(window.location.pathname === '/' ? "/analyse" : "/auth/login")}>
            {window.location.pathname ==="/"  ? `Commencez l'analyse`
              : "Se connecter"}
          </Button>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
    // </Toolbar>
  );
}

// Header.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

export default Header;
