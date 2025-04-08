import { IconButton, useTheme } from '@mui/material';
import { Brightness4, Brightness7, Brightness2 } from '@mui/icons-material';
import { useThemeStore } from '../stores/themeStore';

const ThemeToggle = () => {
  const theme = useTheme();
  const {toggleMode} = useThemeStore();

  return (
    <IconButton onClick={toggleMode} color="inherit">
      {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4  sx={{color:'black'}} />}
    </IconButton>
  );
};

export default ThemeToggle;
