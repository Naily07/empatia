import { Box, Divider, Stack, Typography } from "@mui/material";

export default function SloganText({ title, text, left, right, top, position }) {
  return (
    <Box
      position={position ? position :"absolute" }
      sx={{
        left,
        right,
        top
      }}
      top={`${top}px`}
      maxWidth={"300px"}
    >
      <Stack direction="row" alignItems="center" spacing={2}>
        <Divider orientation="vertical" flexItem />

        <Stack direction="column" spacing={0.5}>
          <Typography
            variant="subtitle1"
            color="primary.main"
            fontWeight="bold"
          >
            {title}
          </Typography>
          <Typography variant="body2" fontWeight={300}>{text}</Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
