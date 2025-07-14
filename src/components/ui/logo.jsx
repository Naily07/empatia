import { Box } from "@mui/material";

export default function Logo({width = "10%"}) {
  return (
    <Box
      component={"img"}
      sx={{ width: width, display: { xs: "none", md: "block" } }}
      src="/static/logo.png"
    ></Box>
  );
}
