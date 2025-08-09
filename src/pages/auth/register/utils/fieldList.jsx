import { Visibility } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import { useThemeStore } from "../../../../stores/themeStore";
function getMode() {
  const { mode } = useThemeStore();
  return mode;
}
const fieldList = [
  {
    name: "name",
    label: "Nom",
    placeholder: "tapez votre nom",
    type: "text",
    required: "Ce champs est requis",
    darkIcon: <PersonIcon sx={{ color: "#000000ff"}} />,
    lightIcon: <PersonIcon />,
  },
  {
    name: "firstname",
    label: "Prénom",
    placeholder: "tapez votre prénom",
    type: "text",
    required: "Ce champs est requis",
    darkIcon: <PersonIcon sx={{ color: "#000000ff"}}/>,
    lightIcon: <PersonIcon />,
  },
  {
    name: "email",
    label: "Email Adress",
    placeholder: "tapez votre email",
    type: "email",
    required: "Ce champs est requis",
    darkIcon: <EmailIcon sx={{ color: "#000000ff"}}/>,
    lightIcon: <EmailIcon />,
  },
  {
    name: "plainPassword",
    label: "Mot de passe",
    placeholder: "entrer votre mot de passe",
    type: "password",
    required: "Ce champs est requis",
    darkIcon: <Visibility sx={{ color: "#000000ff"}}/>,
    lightIcon: <Visibility />,
  },  
];
export default fieldList;
