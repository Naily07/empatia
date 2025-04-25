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
import { useTheme } from "@mui/material";
import HeroSection from "./components/heroSection";
import python from "../../assets/py.png";
import figma from "../../assets/figma.png";
import react from "../../assets/react.png";
import Fontionnalite from "./components/fonctionnaliteSection";
import Step from "./components/stepSection";
import Footer from "../../components/footer";
export default function Home() {
  const theme = useTheme();
  return (
    <>
      <Header />
      <Toolbar />
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "background.default",
        }}
      >
        <HeroSection />
        {/*-------------- Technologie Section ------------*/}
        <Stack
          flexDirection={"column"}
          justifyContent={"center"}
          pt={10}
          alignItems={"center"}
        >
          <Typography textTransform={"uppercase"} variant="h6">
            <span style={{ color: theme.palette.primary.main }}>
              {" "}
              technologie{" "}
            </span>{" "}
            utilisés
          </Typography>
          <Stack
            columnGap={10}
            pt={5}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"row"}
          >
            {[python, figma, react].map((el) => (
              <Box
                component={"img"}
                src={el}
                width={"50px"}
                height={"50px"}
              ></Box>
            ))}
          </Stack>
        </Stack>
        {/* ----------------------- */}
        <Fontionnalite />
        {/* --------------------- */}
        <Step/> 
      </Container>

      <Footer></Footer>
    </>
  );
}
