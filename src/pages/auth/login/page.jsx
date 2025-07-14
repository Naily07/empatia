import {
  Box,
  Divider,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Stack,
  Tab,
  Typography,
  useTheme,
} from "@mui/material";
import Logo from "../../../components/ui/logo";
import Advice from "../components/advice";
import FormWithSelect from "../components/From";
import fieldList from "./utils/fieldList";
import SvgPattern from "../assets/svgPattern";
import CirclePatternBg from "../assets/circlePattern";

export default function Login() {
  const theme = useTheme();
  return (
    <>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Stack
          direction={"column"}
          width={"45%"}
          // gap={2}
          px={5}
          py={3}
          height={"100svh"}
          sx={{
            background: `linear-gradient(to bottom, rgba(18, 178, 193, 0.7),rgba(13, 138, 158))`,
          }}
          zIndex={2}
          position={"relative"}
          overflow={"hidden"}
        >

          {/* PATTERN */}
          <CirclePatternBg  top={"20%"} left={"80%"} size={"50px"} spacing="10px"  />
          <CirclePatternBg top="60%" left={"10%"} size={"50px"} spacing="12px" />
          <CirclePatternBg top="10%" left={"10%"} size={"50px"} backgroundColor=""/>
          <CirclePatternBg top="90%" left={"90%"} size={"100px"} backgroundColor=""/>
          <Stack
            position={"absolute"}
            direction={"column"}
            bottom={10}
            left={5}
          >
            <SvgPattern color="black" top={"10%"} width="80px" height="80px" />
            <SvgPattern color="black" top={"10%"} width="80px" height="80px" />
          </Stack>
          <Stack
            position={"absolute"}
            direction={"column"}
            // bottom={}
            left={"80%"}
          >
            <SvgPattern color="black" top={"10%"} width="80px" height="80px" />
            <SvgPattern color="black" top={"10%"} width="80px" height="80px" />
          </Stack>
          {/* PATTERN */}

          <Logo width={150} />
          <Stack
            zIndex={9}
            justifyContent={"center"}
            alignItems={"center"}
            width={"100%"}
            height={"100%"}
            rowGap={10}
          >
            <Advice img={"/static/login-advice1.png"} />
            <Advice img={"/static/login-advice2.png"} />
            <Advice img={"/static/login-advice3.png"} />
          </Stack>
        </Stack>
        <Stack width={"50%"} p={5} flexGrow={1} justifyContent={"space-around"}>
          <Typography
            textTransform={"uppercase"}
            variant="h3"
            width={"fit-content"}
            fontWeight={400}
          >
            se connecter
            <Divider
              sx={{
                bgcolor: theme.palette.primary.main,
                width: "70%",
                height: "5px",
                mt: 1,
              }}
            />
          </Typography>

          <Box sx={{ width: "100%" }}>
            {/* <FormTabs /> */}
            <FormWithSelect fieldList={fieldList} direction={"column"} />
          </Box>
        </Stack>
      </Stack>
    </>
  );
}
