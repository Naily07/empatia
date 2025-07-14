import { Box, Stack, Typography, useTheme } from "@mui/material";

export default function Advice({img}) {
  const theme = useTheme()
  return (
    <Stack direction={"row"} gap={3} maxWidth={500} alignItems={"center"}>
      <Stack
        direction={"row"}
        borderRadius={2}
        minWidth={75}
        p={2}
        bgcolor={"rgba(255, 255, 255, 0.26)"}
      >
        <Box
          component={"img"}
          // height={60}
          width={"100%"}
          // p={}
          src={img}
        ></Box>
      </Stack>

      <Stack direction={"column"} gap={1}>
        <Typography variant="h5" textTransform={"capitalize"} color="#fff">
          Analyse Emotionnelle
        </Typography>
        <Typography variant="body2" color="#fff">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus
          illum veritatis dolorem perferendis laudantium nam dolores expedita
          error, ab, aliquam neque.
        </Typography>
      </Stack>
    </Stack>
  );
}
