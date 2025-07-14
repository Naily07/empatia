import {
  Box,
  Container,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/header";
import IconButtonCustom from "../../components/ui/iconButton";
import { Visibility } from "@mui/icons-material";
import { PhotoCamera } from "@mui/icons-material";
import { VideoCameraBack } from "@mui/icons-material"
import { PlaylistPlay } from "@mui/icons-material";
import ThemedButton from "../../components/ui/ThemeBtn";
import WebcamDisplay from "./cameraUi/camfast";
// import WebcamDisplay from "./cameraUi/camMultiface";
import { useState } from "react";

export default function Analyse() {
  const list = [
    {
      id: 1,
      text: "Choisissez la méthode d'analyse (caméra ou média).",
    },
    {
      id: 2,
      text: "L'analyse des émotions commence automatiquement.",
    },
    {
      id: 3,
      text: "Vous recevez un rapport détaillé sur vos émotions.",
    },
  ];
  const theme = useTheme();
  const [isCamActive, setCamActive] = useState(false);

  return (
    <>
      {isCamActive && (
        <Container
          maxWidth={false}
          sx={{
            display: "flex",
            height: "calc(100svh)",
            width: "100svw",
            flexDirection: "column",
            backgroundColor: "background.paper",
            py: 5,
            rowGap: 5,
          }}
        >
          <WebcamDisplay setCamActive={setCamActive} />
          {/* <Button onClick={() => setCamActive((v) => !v)}>Desactiver</Button> */}
        </Container>
      )}

      {!isCamActive && (
        <>
          <Header />
          <Toolbar />
          <Container
            maxWidth={false}
            sx={{
              display: "flex",
              height: "calc(100svh - 64px)",
              width: "100svw",
              flexDirection: "column",
              backgroundColor: "background.paper",
              py: 5,
              rowGap: 5,
            }}
          >
            <Stack justifyContent={"center"} alignItems={"center"}>
              <IconButtonCustom startIcon={<Visibility />} text={"Analyse"} />
              <Stack
                mt={2}
                justifyContent={"center"}
                alignItems={"center"}
                rowGap={1}
              >
                <Typography
                  variant="h2"
                  fontWeight={"400"}
                  textAlign={"center"}
                >
                  Prêt à analyser
                  <span style={{ color: theme.palette.primary.main }}>
                    {" "}
                    vos émotions ?
                  </span>
                </Typography>
                <Typography
                  variant="body1"
                  maxWidth={"400px"}
                  textAlign={"center"}
                  fontWeight={"300"}
                >
                  Téléchargez une vidéo ou activez votre caméra pour commencer
                  l&apos;analyse en temps réel.
                </Typography>
              </Stack>
            </Stack>

            <Container
              maxWidth="sm"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                bgcolor:
                  theme.palette.mode === "light"
                    ? "#fff"
                    : theme.palette.grey[800],
                borderRadius: 2,
                py: 5,
              }}
            >
              <Typography variant={"h4"} color="text.secondary">
                Comment ça fonctionne :
              </Typography>

              <Stack direction="column" spacing={2} mt={3}>
                {list &&
                  list.map((el) => {
                    return (
                      <Stack
                        direction={"row"}
                        alignItems="center"
                        spacing={2}
                        key={el.id}
                      >
                        <Box
                          sx={{
                            bgcolor: theme.palette.primary.main,
                            color: "#fff",
                            borderRadius: "50%",
                            width: 32,
                            height: 32,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontWeight: "bold",
                          }}
                        >
                          {el.id}
                        </Box>
                        <Typography variant="body1" color="text.secondary">
                          {el.text}
                        </Typography>
                      </Stack>
                    );
                  })}
              </Stack>
            </Container>
            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              spacing={5}
            >
              <ThemedButton
                onClick={() => setCamActive((v) => !v)}
                startIcon={<PhotoCamera />}
                text={"Activer la caméra"}
              ></ThemedButton>
              <ThemedButton
                startIcon={<PlaylistPlay />}
                text={"Télecharger un media"}
              ></ThemedButton>
            </Stack>
          </Container>
        </>
      )}
    </>
  );
}
