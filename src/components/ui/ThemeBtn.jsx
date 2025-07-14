import { Button, useTheme } from "@mui/material";

const ThemedButton = ({ text, icon, startIcon, onClick }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Button
      variant="contained"
      endIcon={icon || null}
      startIcon={startIcon || null}
      sx={{
        backgroundColor: isDark ? "#fff" : "#000",
        color: isDark ? "#000" : "#fff",
        "&:hover": {
          backgroundColor: isDark ? "#f0f0f0" : "#222",
        },
        textTransform: "none",
        fontWeight: 600,
        px: 3,
        py: 1.5,
        borderRadius: "12px",
        transition: "all 0.3s ease",
      }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default ThemedButton;
