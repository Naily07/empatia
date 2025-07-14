import {
  Box,
  ListItemButton,
  ListItemIcon,
  Typography,
  Stack,
  useTheme,
  ListItemText,
  Paper,
} from "@mui/material";
import { ListAltSharp } from "@mui/icons-material";
import media from "../../../assets/media.png";
import liveDetect from "../../../assets/liveDetect.png";
import conseil from "../../../assets/conseil.png";
import media1 from "../../../assets/media1.png";
import IconButtonCustom from "../../../components/ui/iconButton";
import circle from "../../../assets/circle.svg";

export default function Fontionnalite() {
  const theme = useTheme();
  const listFontionnalite = [
    {
      image: liveDetect,
      title: "LIVE Détection",
      text: "Pour identifier et interpréter vos émotions avec précision en temps réel.",
    },
    {
      image: media1,
      title: "Télécharger un média",
      text: "Importez une image ou une vidéo pour analyser les émotions exprimées tout au long de la séquence et mieux comprendre les ressentis capturés.",
    },
    {
      image: conseil,
      title: "Conseil des professionnels",
      text: "Prenez un moment pour reconnaître et accepter vos émotions sans jugement, car chaque ressenti a une raison d’être et un message à vous transmettre.",
    },
  ];
  return (
    <>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        pt={10}
        rowGap={0}
        zIndex={0}
        position={"relative"}
      >
        <Box
          component={"img"}
          src={circle}
          sx={{
            filter: "blur(5px)",
            zIndex: -1,
            position: "absolute",
            width: "106px",
            top: "10%",
            height: "196px",
            right: "15%",
          }}
        ></Box>
        <Box
          component={"img"}
          src={circle}
          sx={{
            filter: "blur(5px)",
            zIndex: -1,
            position: "absolute",
            width: "75px",
            top: "25%",
            height: "196px",
            left: "10%",
          }}
        ></Box>
        <Stack justifyContent={"center"} alignItems={"center"}>
          <IconButtonCustom
            startIcon={<ListAltSharp />}
            text={"Fonctionnalité"}
          />
          <Stack
            mt={5}
            justifyContent={"center"}
            alignItems={"center"}
            rowGap={2}
          >
            <Typography variant="h3" fontWeight={"400"}>
              Vos émotions, notre{" "}
              <span style={{ color: theme.palette.primary.main }}>
                expertise
              </span>
            </Typography>
            <Typography
              variant="body1"
              maxWidth={"400px"}
              textAlign={"center"}
              fontWeight={"300"}
            >
              Nous analysons vos émotions avec précision, grâce à notre
              savoir-faire.
            </Typography>
          </Stack>
        </Stack>
        <Stack
          flexDirection={{ sm: "colomn", md: "row" }}
          columnGap={5}
          justifyContent={"center"}
          alignItems={"center"}
          flexWrap={"wrap"}
        >
          {listFontionnalite.map((el) => (
            <Paper
              variant="outlined"
              square={false}
              sx={{
                p: 4,
                borderRadius: "25px",
                mt: "100px",
                width: { xs: "65%", sm: "50%", md: "20%" },
                transition: "ease-in-out 0.5s",
                "&:hover": {
                  transform: "scale(1.1)",
                  cursor: "pointer",
                },
              }}
            >
              <Box
                mt={"-100px"}
                component={"img"}
                src={el.image}
                width={"100%"}
                height={"auto"}
              ></Box>
              <Stack mt={2}>
                <Typography variant="h6" fontWeight={"600"}>
                  {el.title}
                </Typography>
                <Typography
                  // maxWidth={"200px"}
                  variant="caption"
                  color="text.secondary"
                  mt={1}
                  fontWeight={"300"}
                >
                  {el.text}
                </Typography>
              </Stack>
            </Paper>
          ))}
        </Stack>
      </Stack>
    </>
  );
}
