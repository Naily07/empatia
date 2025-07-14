import {
  Box,
  Button,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";
import circle from "../../../assets/circle.svg";
import SloganText from "./sloganText";
import ThemedButton from "../../../components/ui/ThemeBtn";
import IconButtonCustom from "../../../components/ui/iconButton";

export default function HeroSection() {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Stack
      flexDirection={"column"}
      justifyContent={"space-between"}
      sx={{
        pt: 5,
        height: "calc(100svh - 64px)",
        flexDirection: "column",
        alignItems: "center", // Centre horizontalement
        justifyContent: "space-between", // Centre verticalement (si hauteur > 100%)
        backgroundColor: "background.paper",
        width: "100svw",
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
          left: "25%",
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
          right: "15%",
        }}
      ></Box>
      {/* /**Section 1 */}
      <Stack rowGap={2} justifyContent={"center"} alignItems={"center"}>
        <IconButtonCustom startIcon={<PersonalVideoIcon />} text={"Bienvenue sur impatia"}/>
        {/* <ThemeToggle/> */}
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          rowGap={1}
        >
          <Typography variant="h2" fontWeight={"400"}>
            Detecteur d'emotion{" "}
            <span style={{ color: theme.palette.primary.main }}>IA</span>
          </Typography>
          <Typography
            fontWeight={"300"}
            variant="body1"
            width={"250px"}
            textAlign={"center"}
          >
            Vos émotions sont précieuses. Écoutons-les ensemble.
          </Typography>
        </Stack>

        <ThemedButton icon={ <ArrowForwardIosIcon /> } text={"Explorer mes emotions"} />
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

        <Stack overflow={"hidden"} position={"relative"} zIndex={9}>
          <Box
            position={"absolute"}
            top={"25%"}
            sx={{ translate: "-50%" }}
            left={"50%"}
            src={circle}
            component={"img"}
            width={"75%"}
            zIndex={-1}
            // minWidth={"10px"}
          ></Box>
          <Box
            zIndex={1}
            src="./static/smile.png"
            component={"img"}
            minWidth={"400px"}
            m={0}
          ></Box>
        </Stack>
      </Stack>
    </Stack>
  );
}
