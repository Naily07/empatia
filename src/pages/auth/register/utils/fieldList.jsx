import { Visibility } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";

const fieldList = [
  {
    name: "name",
    label: "Nom",
    placeholder: "tapez votre nom",
    type: "text",
    required: "Ce champs est requis",
    icon: <PersonIcon />,
  },
  {
    name: "firstname",
    label: "Prénom",
    placeholder: "tapez votre prénom",
    type: "text",
    required: "Ce champs est requis",
    icon: <PersonIcon />,
  },
  {
    name: "email",
    label: "Email Adress",
    placeholder: "tapez votre email",
    type: "email",
    required: "Ce champs est requis",
    icon: <EmailIcon />,
  },
  {
    name: "plainPassword",
    label: "Mot de passe",
    placeholder: "entrer votre mot de passe",
    type: "password",
    required: "Ce champs est requis",
    icon: <Visibility />,
  },
];
export default fieldList;
