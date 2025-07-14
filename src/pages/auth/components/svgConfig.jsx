import { Box, Typography, useTheme } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
export default function StyledSvg({
  svgPath,
  label,
  value,
  handleClick,
  selectedValue,
  direction
}) {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ position: "relative" }}>
        <Box
          position="relative"
          border={`1px solid ${
            selectedValue === value
              ? theme.palette.success.light
              : theme.palette.divider
          }`}
          display="flex"
          flexDirection={direction}
          alignItems="center"
          onClick={() => handleClick(null, value)}
          color={
            selectedValue === value
              ? "success.light"
              : theme.palette.text.secondary
          }
          sx={{ cursor: "pointer" }}
          px={6}
          py={2}
          zIndex={0}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={"40%"}
            height={"40%"}
            viewBox="0 0 24 24"
          >
            {svgPath}
          </svg>
          <Typography textTransform="capitalize">{label}</Typography>
        </Box>
        {selectedValue === value && (
          <CheckCircleIcon
            sx={{
              position: "absolute",
              left: "50%",
              bottom: 0,
              transform: "translate(-50%, 50%)",
              color: theme.palette.success.light,
              opacity: 1,
                  backgroundColor: theme.palette.background.default,
              transition: "opacity 1s ease-in-out",
              fontSize: 32,
              zIndex: 9,
            }}
          />
        )}
      </Box>
    </>
  );
}
