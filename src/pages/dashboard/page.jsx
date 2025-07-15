import {
  Box,
  Button,
  Divider,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import ResponsiveDrawer from "./component/drawer";
import TableUser from "./component/Table";
import { SettingsInputComponent } from "@mui/icons-material";
import ChartUpdate from "../../components/ui/PieChart";
import CalendarCard from "./component/calendarCard";
import NotificationCard from "./component/notificationCard";

export default function Dashboard() {
  return (
    <>
      <Stack direction="row" rowGap={5}>
        <ResponsiveDrawer />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
          }}
        >
          <Toolbar />
          <Stack width={"100%"} direction={"row"} gap={3} flexWrap={"wrap"}>
            <TableUser />
            {/* STATISTIQUE */}
            <Paper
              gap={2}
              elevation={1}
              sx={{
                display: "flex",
                flexDirection: "column",
                bgcolor: "background.default",
                maxWidth: "50%",
                minWidth: "300px",
                p: 2,
                gap: 2,
                flex: 1,
              }}
            >
              <Stack direction={"column"} width={"100%"}>
                <Button
                  startIcon={<SettingsInputComponent />}
                  variant="text"
                  color="primary"
                  sx={{ width: "fit-content", minWidth: 0, px: 1 }}
                >
                  Patient
                </Button>
                <Typography color="text.secondary" variant="body2">
                  Statistique globale
                </Typography>
                {/* <Divider /> */}
              </Stack>
              <Divider />
              <Stack
                sx={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ChartUpdate
                  data={[
                    { name: "Happy", intesite: 10 },
                    { name: "Happy", intesite: 10 },
                  ]}
                  legend={false}
                  height={200}
                  width={200}
                  bgcolor="background.default"
                />
                <Stack
                  width={"100%"}
                  direction={"row"}
                  justifyContent={"space-around"}
                >
                  <Stack direction={"row"} gap={1}>
                    <Typography variant="h4">35</Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      lineHeight={"1"}
                    >
                      patient
                      <br /> suivis
                    </Typography>
                  </Stack>
                  <Stack direction={"row"} gap={1}>
                    <Typography variant="h4">5</Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      lineHeight={"1"}
                      whiteSpace="pre-line"
                    >
                      Alerte <br /> au stresse
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Paper>
            {/* Calendar */}
            <Stack direction={"row"} width={"100%"}>
              <CalendarCard />
              <NotificationCard />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}
