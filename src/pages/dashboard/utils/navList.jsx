import MailIcon from "@mui/icons-material/Mail";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
const navLists = [
  {
    label: "Dashboard",
    route: "/dashboard",
    active: true,
    iconActive: <DashboardOutlinedIcon color="primary" />,
    iconNotActive: <DashboardOutlinedIcon />,
    nav: "principal",
  },
  {
    label: "Calendrier",
    route: "/calendar",
    active: false,
    iconActive: <CalendarMonthOutlinedIcon color="primary" />,
    iconNotActive: <CalendarMonthOutlinedIcon />,
    nav: "principal",
  },
  {
    label: "Profil",
    route: "/profile",
    active: false,
    iconActive: <AccountCircleOutlinedIcon color="primary" />,
    iconNotActive: <AccountCircleOutlinedIcon />,
    nav: "principal",
  },
  {
    label: "Paramètres",
    route: "/settings",
    active: false,
    iconActive: <SettingsOutlinedIcon color="primary" />,
    iconNotActive: <SettingsOutlinedIcon />,
    nav: "principal",
  },
  {
    label: "Rendez-vous",
    route: "/appointments",
    active: false,
    iconActive: <CalendarMonthOutlinedIcon color="primary" />,
    iconNotActive: <CalendarMonthOutlinedIcon />,
    nav: "principal",
  },
  {
    label: "Centre d'aides",
    route: "/help-center",
    active: false,
    iconActive: <MailIcon color="primary" />,
    iconNotActive: <MailIcon />,
    nav: "support",
  },
  {
    label: "Paramètres support",
    route: "/support-settings",
    active: false,
    iconActive: <AccountCircleOutlinedIcon color="primary" />,
    iconNotActive: <AccountCircleOutlinedIcon />,
    nav: "support",
  },
]
  export default  navLists