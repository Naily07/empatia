import { Box, List, ListItem, ListItemButton, ListItemText, Stack, Typography } from "@mui/material";
import Header from "../../components/header";
import IconButtonCustom from "../../components/ui/iconButton";
import { Visibility } from "@mui/icons-material";
export default function Analyse() {
  return (
    <>
      <Header />
      <Box>
        <Stack justifyContent={"center"} alignItems={"center"}>
          <IconButtonCustom startIcon={<Visibility />} text={"Analyse"} />
          <Stack
            mt={2}
            justifyContent={"center"}
            alignItems={"center"}
            rowGap={1}
          >
            <Typography variant="h2" fontWeight={"400"}>
              Prêt à analyser
              <span style={{ color: theme.palette.primary.main }}>
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
        <Stack bgcolor={"#fff"} borderRadius={2}>
            <Typography variant={"h3"} >Comment ça fonctionne :</Typography>
            <List>
                <ListItem>
                    <ListItemButton>1</ListItemButton>
                    <ListItemText> Choisissez la méthode d'analyse (caméra ou média).</ListItemText>
                </ListItem>
            </List>
        </Stack>
      </Box>
    </>
  );
}
