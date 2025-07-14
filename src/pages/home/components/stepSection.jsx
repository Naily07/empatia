import {
  Box,
  ListItemButton,
  ListItemIcon,
  Typography,
  Stack,
  useTheme,
  ListItemText,
  Divider,
  useMediaQuery,
} from "@mui/material";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";
import CircleBox from "./circleBox";
import ScrollSlideIn from "../components/scrollSideIn";
import { steps } from "../utils/steps";
import IconButtonCustom from "../../../components/ui/iconButton";
import { LightbulbOutlineSharp } from "@mui/icons-material";
export default function Step() {
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const leftSteps = steps.reduce((acc, step, index) => {
    if (index % 2 === 0) {
      acc.push({
        icon: step.icon || null,
        text: steps[index + 1]?.text || null,
        title: steps[index + 1]?.title || null,
        step: steps[index + 1]?.step || null,
      });
    }
    return acc;
  }, []);

  const rightSteps = steps.reduce((acc, step, index) => {
    if (index % 2 !== 0) {
      acc.push({
        icon: step.icon || null, // image de l'élément impair
      });
    } else
      acc.push({
        text: steps[index]?.text || null,
        title: steps[index]?.title || null,
        step: steps[index]?.step || null,
      });
    return acc;
  }, []);

  return (
    <>
      <Stack justifyContent={"center"} alignItems={"center"} py={10} rowGap={5}>
        <Stack justifyContent={"center"} alignItems={"center"}>
          <IconButtonCustom startIcon={<LightbulbOutlineSharp />} text={"comment ça marche"} />
          <Stack
            mt={5}
            justifyContent={"center"}
            alignItems={"center"}
            rowGap={1}
          >
            <Typography variant="h2" fontWeight={"400"}>
              Quelques{" "}
              <span style={{ color: theme.palette.primary.main }}>étapes</span>
            </Typography>
            <Typography
              variant="body1"
              maxWidth={"400px"}
              textAlign={"center"}
              fontWeight={"300"}
            >
              Apprenez à vous connaître.
            </Typography>
          </Stack>
        </Stack>
        <Stack flexDirection={"row"} columnGap={5}  mt={2}>
          {/* Englobe Elements */}
          <Stack
            direction={smDown ? "column" : "row"}
            justifyContent="center"
            alignItems="flex-start"
            columnGap={8}
            rowGap={5}
          >
            {/* Affichage en mobile */}
            {smDown &&
              steps.map((step, i) => {
                return (
                  <Box key={i}>
                    <ScrollSlideIn x={-100} delay={i * 0.3}>
                      <Box
                        component="img"
                        src={step.icon}
                        width={"150px"}
                        height="150px"
                      />
                    </ScrollSlideIn>
                    <ScrollSlideIn x={100} delay={i * 0.3 + 0.15}>
                        <Stack
                          flexDirection="column"
                          alignItems="flex-end"
                          maxWidth="240px"
                          rowGap={1}
                        >
                          <CircleBox>{step.step}</CircleBox>
                          <Typography variant="h6" fontWeight="800">
                            {step.title}
                          </Typography>
                          <Typography variant="caption" textAlign="end">
                            {step.text}
                          </Typography>
                        </Stack>
                      </ScrollSlideIn>
                  </Box>
                );
              })}

            {/* Colonne Gauche */}
            {!smDown && (
              <Stack rowGap={8} alignItems="flex-end">
                {leftSteps.map((step, i) => (
                  <>
                    {step.icon && (
                      <ScrollSlideIn x={-100} delay={i * 0.3}>
                        <Box
                          component="img"
                          src={step.icon}
                          width={"150px"}
                          height="150px"
                        />
                      </ScrollSlideIn>
                    )}
                    {step.step && (
                      <ScrollSlideIn x={-100} delay={i * 0.3 + 0.15}>
                        <Stack
                          flexDirection="column"
                          alignItems="flex-end"
                          maxWidth="240px"
                          rowGap={1}
                        >
                          <CircleBox>{step.step}</CircleBox>
                          <Typography variant="h6" fontWeight="800">
                            {step.title}
                          </Typography>
                          <Typography variant="caption" textAlign="end">
                            {step.text}
                          </Typography>
                        </Stack>
                      </ScrollSlideIn>
                    )}
                  </>
                ))}
              </Stack>
            )}

            {/* 🔹 Divider Central */}
            {!smDown && <Divider orientation="vertical" flexItem />}

            {/* Colonne Droite */}
            {!smDown && (
              <Stack rowGap={8} alignItems="flex-start">
                {rightSteps.map((step, i) => (
                  <>
                    {step.step && (
                      <ScrollSlideIn x={100} delay={i * 0.3}>
                        <Stack
                          flexDirection="column"
                          alignItems="flex-start"
                          maxWidth="240px"
                          rowGap={1}
                        >
                          <CircleBox>{step.step}</CircleBox>
                          <Typography variant="h6" fontWeight="800">
                            {step.title}
                          </Typography>
                          <Typography variant="caption" textAlign="start">
                            {step.text}
                          </Typography>
                        </Stack>
                      </ScrollSlideIn>
                    )}
                    {step.icon && (
                      <ScrollSlideIn x={100} delay={i * 0.3 + 0.15}>
                        <Box
                          component="img"
                          src={step.icon}
                          width="150px"
                          height="150px"
                          alignSelf="flex-start"
                        />
                      </ScrollSlideIn>
                    )}
                  </>
                ))}
              </Stack>
            )}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
