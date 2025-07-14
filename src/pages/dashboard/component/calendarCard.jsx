import { Paper, Stack, Button, Typography, Divider } from "@mui/material";
import { SettingsInputComponent } from "@mui/icons-material";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useState } from "react";
import dayjs from "dayjs";

export default function CalendarCard() {
  const [selectedDate, setSelectedDate] = useState(dayjs());

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "background.default",
        maxWidth: "30%",
        minWidth: "300px",
        px: 2,
        gap: 2,
        flex: 1,
      }}
    >
      {/* Éléments du haut */}
      <Stack direction="column" width="100%" pt={2}>
        <Button
          startIcon={<SettingsInputComponent />}
          variant="text"
          color="primary"
          sx={{ width: "fit-content", minWidth: 0, px: 1 }}
        >
          Calendrier
        </Button>
        <Typography color="text.secondary" variant="body2">
          Planification quotidienne
        </Typography>
      </Stack>

      <Divider />

      {/* Calendrier en bas */}
      <Stack
        sx={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          p: 0,
        }}
      >
        <DateCalendar
          value={selectedDate}
          onChange={(newValue) => setSelectedDate(newValue)}
          sx={{ width: "100%" }}
        />
      </Stack>
    </Paper>
  );
}
