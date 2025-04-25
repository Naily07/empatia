import {
  Box,
  Container,
  Typography,
  Link,
  Stack,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItem,
  useTheme,
  List,
} from "@mui/material";
import { LocationOnOutlined } from "@mui/icons-material";
import { MailOutline } from "@mui/icons-material";

export default function Footer() {
  const theme = useTheme();
  return (
    <Box
      component="footer"
      sx={{
        pt: 4,
        px: 2,
        backgroundColor: "background.paper",
        // borderColor: "divider",
        // mt: "auto", // pousse le footer en bas
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          spacing={2}
        //   border={"1px solid black"}

        >
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            direction={"column"}
            alignSelf={"flex-start"}
            width={"25%"}
            rowGap={2}
            // border={"1px solid black"}

          >
            <Typography
              variant="h6"
              color={theme.palette.primary.main}
              fontWeight={800}
            >
              {" "}
              Contact
            </Typography>
            <Box>
              <ListItem>
                <ListItemIcon>
                  <MailOutline />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="body2">Contact@empatia.com</Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LocationOnOutlined />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="body2">
                    Antananarivo, Madagascar
                  </Typography>
                </ListItemText>
              </ListItem>
            </Box>
          </Stack>

          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            alignSelf={"flex-start"}
            direction={"column"}
            width={"25%"}
            rowGap={2}
          >
            <Typography
              variant="h6"
              color={theme.palette.primary.main}
              fontWeight={800}
            >
              {" "}
              Navigation
            </Typography>

            <List>
              <ListItem>
                <Link href="#" color="text.primary" underline="hover">
                  Accueil
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#" color="text.primary" underline="hover">
                  Etapes
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#" color="text.primary" underline="hover">
                  Fonctionnalité
                </Link>
              </ListItem>
            </List>
          </Stack>

          <Stack
            alignSelf={"flex-start"}
            direction="row"
            spacing={2}
            width={"25%"}
            // border={"1px solid black"}
            justifyContent={"center"}
          >
            <Typography
              variant="h6"
              color={theme.palette.primary.main}
              fontWeight={800}
            >
              {" "}
              Suivez-nous
            </Typography>
          </Stack>
          {/* <Stack direction="row" spacing={2}>
            <Link href="#" color="inherit" underline="hover">
              Conditions d&apos;utilisation
            </Link>
          </Stack> */}
        </Stack>
      </Container>
      <Typography
        borderTop={"1px solid"}
        borderColor={"divider"}
        variant="body2"
        color="text.secondary"
        py={2}
        textAlign={"center"}
      >
        © {new Date().getFullYear()} Empatia. Tous droits réservés.
      </Typography>
    </Box>
  );
}
