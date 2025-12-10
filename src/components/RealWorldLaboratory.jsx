import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const RealWorldLaboratory = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      {/* Header Section */}
      <Box
        m={2}
        textAlign={"left"}
        backgroundColor={colors.primary[400]}
        p={2}
        borderRadius={"5px"}
      >
        <Typography
          variant="h3"
          color={colors.grey[100]}
          fontWeight={"normal"}
          mb="5px"
        >
          Welcome to
        </Typography>
        <Typography
          variant="h2"
          color={colors.greenAccent[500]}
          fontWeight={"bold"}
          mb="5px"
        >
          Real-World Laboratory
        </Typography>
        <Typography
          variant="h3"
          color={colors.grey[100]}
          fontWeight={"normal"}
          mb={"5px"}
        >
          Exploring Practical Applications and Innovations in Real-World
          Settings
        </Typography>
      </Box>
    </Box>
  );
};

export default RealWorldLaboratory;
