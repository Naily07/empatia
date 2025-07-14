import { Box, Typography, Stack, useTheme, Container } from "@mui/material";
import { ListAltSharp } from "@mui/icons-material";
import IconButtonCustom from "../../../components/ui/iconButton";
import circle from "../../../assets/circle.svg";
import Header from "../../../components/header";
import ChartUpdate from "../../../components/ui/PieChart";
import SloganText from "../../home/components/sloganText";
import { analyseResult } from "../../../api/analyse";
import { useEffect, useState } from "react";
import { useSessionAnalyseStorage } from "../../../stores/sessionAnalyseStorage";

export default function Result() {
  const theme = useTheme();
  const [result, setResult] = useState([])
  const {session} = useSessionAnalyseStorage()
  useEffect(() => {
    if(session.length>0)
     analyseResult(session)
      .then((response) => {
        console.log("RESPONSE", response);
        setResult(response.data['emotions'].slice(0, 3))
      })
      .catch((error) => {
        // Traitement en cas d'erreur
        console.error("Erreur de connexion :", error);
        // Afficher un message d'erreur ici
      });
  }, []);
  return (
    <>
      <Header />

      <Stack
        position={"relative"}
        width="100svw"
        pt={15}
        height="100svh"
        rowGap={0}
        zIndex={0}
        bgcolor={"background.paper"}
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
            text={"Resultat analyse"}
          />
          <Stack
            mt={5}
            justifyContent={"center"}
            alignItems={"center"}
            rowGap={2}
          >
            <Typography variant="h3" fontWeight={"400"}>
              Vos émotions, révélées en{" "}
              <span style={{ color: theme.palette.primary.main }}>
                un instant
              </span>
            </Typography>
            <Typography
              variant="body1"
              maxWidth={"400px"}
              textAlign={"center"}
              fontWeight={"300"}
            >
              Les émotions jouent un grand rôle dans notre quotidien
            </Typography>
          </Stack>
        </Stack>
        <Stack
          flexDirection={{ sm: "colomn", md: "row" }}
          flexGrow={1}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          flexWrap={"wrap"}
        >
          <Stack>
            <ChartUpdate
              width={350}
              height={350}
              data={result}
            />
          </Stack>
          <SloganText
            title={"Interactivité & Feedback"}
            text={"Retours en temps réel adaptés à vos ressentis"}
            position={"relative"}
          />
        </Stack>
      </Stack>
    </>
  );
}
