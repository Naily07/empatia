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
import ThemeToggle from "./btnThemeToogle";

const drawerWidth = 240;
const navItems = ["Accueil", "Fonctionnalité", "Etapes"];

function Header(props) {
  const { window } = props;
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
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    // <Toolbar>
      <Box sx={{ display: "flex"}}>
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
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              component={"img"}
              sx={{ width: "180px", display: { xs: "none", sm: "block" } }}
              src="/static/logo.png"
            ></Box>

            <Stack
              direction={"row"}
              columnGap={5}
              sx={{
                justifyContent: "center",
                alignItems: "center",
                flexGrow: 1,
                display: { xs: "none", sm: "inline-flex" },
              }}
            >
              {navItems.map((item) => (
                <Button key={item} sx={{ color: "text.primary" }}>
                  {item}
                </Button>
              ))}
            </Stack>
            <ThemeToggle />
            <Button variant="contained" > Commencez l'analyse</Button>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
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

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;
