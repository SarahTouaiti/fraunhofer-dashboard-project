import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      m={2}
      textAlign={"left"}
      backgroundColor={colors.primary[400]}
      p={2}
      borderRadius={"5px"}
    >
      <Typography
        variant="h2"
        color={colors.greenAccent[500]}
        fontWeight={"bold"}
        mb="5px"
      >
        {title}
      </Typography>
      <Typography variant="h3" color={colors.grey[100]} fontWeight={"normal"}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
