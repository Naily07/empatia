import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ThemeToggle from "../../../components/ui/BtnThemeToogle";
export default function Header() {
  return (
    <Stack direction={'row'} justifyContent={"space-between"} width={"100%"}>
        <Stack direction={"column"} >
            <Typography variant="body1" fontWeight={400} color="text.primary"> Bonjour Dr Mark</Typography>
            <Typography variant="body2" color="text.secondary"> Vous avez 3 nouvelles consultations aujourf'hui</Typography>
        </Stack>
        <Stack direction={"row"} alignItems={"center"} columnGap={2}>
            <ThemeToggle/>
            <IconButton>
                <SettingsIcon/>
            </IconButton>
            <IconButton>
                <NotificationsIcon/>
            </IconButton>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/3.jpg" />
        </Stack>
    </Stack>
  );
}