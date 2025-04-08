import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Header from "../../components/header";
import ThemeToggle from "../../components/btnThemeToogle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { getTheme } from "../../theme/themeContext";
import { useTheme } from "@mui/material";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";
import circle from "../../assets/circle.svg";
import SloganText from "./components/sloganText";
export default function Home() {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <Header />
      <Toolbar />
      <Container
        maxWidth={false}
        // disableGutters
        sx={{
          width: "100vw",
          height: "calc(100svh - 64px)",
          pt: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Centre horizontalement
          justifyContent: "space-between", // Centre verticalement (si hauteur > 100%)
          backgroundColor: "background.paper",
        }}
      >
        {/* SVG */}
        <Box
          component={"img"}
          src={circle}
          sx={{
            filter: "blur(5px)",
            position: "absolute",
            width: "106px",
            top: "200px",
            height: "96px",
            left: "306px",
          }}
        ></Box>
        <Box
          component={"img"}
          src={circle}
          sx={{
            filter: "blur(3px)",
            position: "absolute",
            width: "66px",
            top: "240px",
            height: "66px",
            right: "186px",
          }}
        ></Box>
        {/* /**Section 1 */}
        <Stack rowGap={2} justifyContent={"center"} alignItems={"center"}>
          <ListItemButton>
            <ListItemIcon>
              <PersonalVideoIcon />
            </ListItemIcon>
            <ListItemText>Bienvenue sur IMPATIA</ListItemText>
          </ListItemButton>
          {/* <ThemeToggle/> */}
          <Typography variant="h4">
            DETECTEUR D'EMOTION{" "}
            <span style={{ color: theme.palette.primary.main }}>IA</span>
          </Typography>
          <Typography
            fontWeight={"300"}
            variant="body2"
            width={"250px"}
            textAlign={"center"}
          >
            Vos émotions sont précieuses. Écoutons-les ensemble.
          </Typography>
          <Button
            variant="contained"
            sx={{ bgcolor: "#000" }}
            endIcon={<ArrowForwardIosIcon />}
          >
            Explorer mes emotions{" "}
          </Button>
        </Stack>
        {/* <ThemeToggle /> */}

        {/* /**Section 2 */}
        <Stack
          position={"relative"}
          flexDirection={"row"}
          width={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {mdDown && (
            <>
              <SloganText
                title={"Interactivité & Feedback"}
                text={"Retours en temps réel adaptés à vos ressentis"}
                left={87}
                top={73}
              />
              <SloganText
                title={"Interactivité & Feedback"}
                text={"Retours en temps réel adaptés à vos ressentis"}
                right={126}
                top={78}
              />
              <SloganText
                title={"Interactivité & Feedback"}
                text={"Retours en temps réel adaptés à vos ressentis"}
                right={83}
                top={216}
              />
            </>
          )}

          <Box
            // alignSelf={"start"}
            // border={"1px solid black"}
            src="./static/smile.png"
            component={"img"}
            minWidth={"400px"}
          ></Box>
        </Stack>
      </Container>
    </>
  );
}
