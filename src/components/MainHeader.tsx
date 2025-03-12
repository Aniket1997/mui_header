import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Brightness4 } from "@mui/icons-material";
import { useThemeToggle } from "../theme"; // Import custom hook

const MainHeader = () => {
  const { toggleTheme } = useThemeToggle(); // Get toggle function

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Header
        </Typography>

        <Button onClick={toggleTheme} startIcon={<Brightness4 />}>
          Toggle Theme
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default MainHeader;
