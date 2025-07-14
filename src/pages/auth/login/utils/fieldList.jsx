import { Visibility } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";

const fieldList = [
  {
    name: "email",
    label: "Email Adress",
    placeholder: "tapez votre email",
    type: "email",
    required: "Ce champs est requis",
    icon: <EmailIcon />,
  },
  {
    name: "password",
    label: "Mot de passe",
    placeholder: "entrer votre mot de passe",
    type: "password",
    required: "Ce champs est requis",
    icon: <Visibility />,
  },
];
export default fieldList