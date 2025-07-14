import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Button, FormControl, FormHelperText, Input, InputLabel, Stack } from "@mui/material";
import MyInputField from "./inputFiled";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function FormTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Médecin" value="1" />
            <Tab label="Patient" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Stack  component={"form"} >
            <MyInputField
              id="email"
              label="Email Adress"
              icon={<Visibility />}
              placeholder={"tapez votre email"}
            />
            <MyInputField
              id="mdp"
              label="Mot de passe"
              icon={<Visibility />}
              placeholder={"entrer votre mot de passe"}

            />
            <Button> Se connecter</Button>
          </Stack>
          {/* <InputLabel  shrink htmlFor="email">Email address</InputLabel> */}
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
      </TabContext>
    </Box>
  );
}
