import { Box, Typography, Stack, useTheme } from "@mui/material";
import { useThemeStore } from "../../stores/themeStore";

export default function IconButtonCustom({ startIcon, text }) {
  const theme = useTheme();
  const { mode } = useThemeStore();
  return (
    <Stack direction="row" alignItems="center">
      {/* Icône dans fond bleu */}
      <Box
        width={36}
        height={36}
        borderRadius="10px"
        bgcolor="primary.main"
        display="flex"
        color="#fff"
        alignItems="center"
        justifyContent="center"
      >
        {startIcon}
      </Box>

      {/* Trait horizontal */}
      <Box width={16} height={2} bgcolor="grey.300" />

      {/* Zone texte */}
      <Box
        px={2}
        py={1}
        bgcolor={
          mode === "light" ? theme.palette.grey[100] : theme.palette.grey[800]
        }
        borderRadius="0 10px 10px 0"
      >
        <Typography
          variant="body2"
          color="text.secondary"
          fontWeight={500}
        >
          {text}
        </Typography>
      </Box>
    </Stack>
  );
}
