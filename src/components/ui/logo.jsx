import { Box } from "@mui/material";
import { Link } from "react-router-dom";
export default function Logo({ width = "10%" }) {
  return (
    <Box sx={{ width: width, display: { xs: "none", md: "block" } }}>
      <Link to="/">
        <img
          src="/static/logo.png"
          alt="logo"
          style={{ width: "100%", display: "block" }}
        />
      </Link>
    </Box>
  );
}
