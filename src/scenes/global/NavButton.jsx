import { Button, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useNavigate } from "react-router-dom";

const NavButton = ({ ...props }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(props.path);
  };
  return (
    <Button
      variant="contained"
      onClick={handleClick}
      sx={{
        backgroundColor: colors.blueAccent[700],
        color: colors.grey[100],
        fontSize: "14px",
        fontWeight: "bold",
        padding: "10px 20px",
        textTransform: "none",
        "&:hover": {
          backgroundColor: colors.blueAccent[500],
        },
      }}
    >
      {props.title}
    </Button>
  );
};

export default NavButton;
