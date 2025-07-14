import {
  Box,
  Typography,
  Divider,
  Stack,
  Button,
  Icon,
  Paper,
} from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import CircleIcon from "@mui/icons-material/Circle";
import UpdateIcon from "@mui/icons-material/Update";
import OpacityIcon from "@mui/icons-material/Opacity";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function NotificationCard() {
  return (
    <Stack
      px={2}
      flex={1}
      // alignItems="stretch"
      direction={"column"}
      justifyContent="flex-start"
    >
      <Paper
        variant="outlined"
        sx={{ borderWidth: 1.5, p: 2, bgcolor: "background.default" }}
      >
        {/* En-tête */}
        <Stack direction="row" alignItems="center" gap={1}>
          <NotificationsNoneIcon color="primary" />
          <Typography fontWeight="bold">Notifications importantes</Typography>
        </Stack>
        <Typography variant="body2" color="text.secondary" mt={0.5}>
          Ici vous trouverez les notes importantes à visualiser avant tout
          analyse
        </Typography>
        <Divider sx={{ mt: 1 }} />
        {/* Liste de notifications */}
        <Stack mt={2} spacing={4}>
          <Stack direction="row" alignItems="center" gap={1}>
            <CircleIcon fontSize="small" color="primary" />
            <Typography variant="body2">
              Nouvelle analyse disponible pour <strong>Sarah Diallo</strong>
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" gap={1}>
            <UpdateIcon fontSize="small" color="info" />
            <Typography variant="body2">
              Système mis à jour le <strong>12 Juillet 2025</strong>
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" gap={1}>
            <OpacityIcon fontSize="small" color="secondary" />
            <Typography variant="body2">
              Une émotion rare a été détectée chez <strong>Jules Martin</strong>
            </Typography>
          </Stack>
        </Stack>

        <Divider sx={{ my: 2 }} />

        {/* Paramètres */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography fontWeight="medium">Outils et paramètrage</Typography>
          <ArrowForwardIosIcon fontSize="small" />
        </Stack>
      </Paper>

      {/* Boutons */}
      <Stack
        direction="row"
        spacing={2}
        mt={2}
        flex={1}
        // sx={{ alignItems: "stretch" }}
      >
        <Button
          fullWidth
          variant="contained"
          sx={{
            color: "white",
            textTransform: "none",
            fontWeight: "bold",
            height: "100%",
            maxHeight: "100px",
          }}
        >
          Commencer l’Analyse Émotionnelle
        </Button>
        <Button
          fullWidth
          variant="contained"
          disabled
          sx={{
            bgcolor: "#BDBDBD",
            color: "white",
            textTransform: "none",
            fontWeight: "bold",
            height: "100%",
            maxHeight: "100px",
          }}
        >
          Télécharger un média pour analyse
        </Button>
      </Stack>
    </Stack>
  );
}
