import Box from "@mui/material/Box";
import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Link as LinkMui } from "@mui/material";
import { Link } from "react-router-dom";
import MyInputField from "./inputFiled";
import { useRef, useState } from "react";
import StyledSvg from "./svgConfig";
import { useForm } from "react-hook-form";
import { login } from "../../../api/account";

export default function FormWithSelect({ fieldList, direction }) {
  const {
    register,
    setValue,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onSubmit" });
  const [selectedValue, setSelectedValue] = useState("");
  const radioRef = useRef(null);
  const handleClick = (event, value) => {
    setSelectedValue(value);
    setValue("radio", value);
    if (radioRef.current) {
      radioRef.current.focus();
    }
  };
  const onSubmit = (data) => {
    login(data)
      .then((response) => {
      // Traitement en cas de succès
      console.log("Connexion réussie :", response);
      // Rediriger ou afficher un message de succès ici
      })
      .catch((error) => {
      // Traitement en cas d'erreur
      console.error("Erreur de connexion :", error);
      // Afficher un message d'erreur ici
      });
  };
  return (
    <Box sx={{ width: "70%" }}>
      <Stack
        component={"form"}
        gap={fieldList.length > 2 ? 2 : 4}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Typography variant="h5" color="text.secondary">
          Veillez selectionner votre profil utilisateur
        </Typography>
        <Stack
          direction={"row"}
          borderRadius={2}
          minWidth={100}
          columnGap={4}
          bgcolor={"rgba(255, 255, 255, 0.26)"}
        >
          <StyledSvg
            direction={direction || null}
            svgPath={
              <path
                fill="currentColor"
                d="M14.84 16.26C17.86 16.83 20 18.29 20 20v2H4v-2c0-1.71 2.14-3.17 5.16-3.74L12 21zM8 8h8v2a4 4 0 0 1-4 4a4 4 0 0 1-4-4zm0-1l.41-4.1a1 1 0 0 1 1-.9h5.19c.51 0 .94.39.99.9L16 7zm4-4h-1v1h-1v1h1v1h1V5h1V4h-1z"
              />
            }
            label="docteur"
            value="docteur"
            handleClick={handleClick}
            selectedValue={selectedValue}
          />

          <StyledSvg
            direction={direction || null}
            svgPath={
              <path
                fill="currentColor"
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
              />
            }
            label="Patient"
            value="patient"
            handleClick={handleClick}
            selectedValue={selectedValue}
          />

          <RadioGroup
            aria-labelledby="demo-radio"
            name="radio"
            value={selectedValue}
          >
            <FormControlLabel
              sx={{ display: "none" }}
              value="docteur"
              control={<Radio {...register("radio")} ref={radioRef} />}
              label="Docteur"
            />
          </RadioGroup>
        </Stack>
        {fieldList &&
          fieldList.map((el, i) => (
            <MyInputField
              control={control}
              error={errors}
              type={el.type}
              setValue={setValue}
              name={el.name}
              key={i}
              label={el.label}
              required={el.required}
              placeholder={el.placeholder}
            >
              {el.icon}
            </MyInputField>
          ))}

        <Button variant="contained" type="submit">
          {" "}
          Se connecter
        </Button>

        <Stack width={"100%"} justifyContent={"center"} direction={"row"}>
          {window.location.pathname !== "/auth/register" ? (
            <>
              <LinkMui
                component={Link}
                to="/forgot-password"
                underline="hover"
                color="primary"
              >
                mot de passe oublié ?
              </LinkMui>
              &nbsp;
              <Link to={"/auth/register"}>S&apos;inscrire</Link>
            </>
          ):
          <>
              <Typography
                color="primary"
              >
                vous avez un compte ?
              </Typography>
              &nbsp;
              <Link to={"/auth/login"}>Se connecter </Link>
            </>
          }

          {/* <Typography></Typography> */}
        </Stack>
      </Stack>
    </Box>
  );
}
