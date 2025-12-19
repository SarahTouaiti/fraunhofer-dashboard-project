import { Box } from "@mui/material";
import UnderDevelopment from "../../scenes/global/UnderDevelopment";
import NavButton from "../../scenes/global/NavButton";

const FinalAssembly = () => {
  return (
    <Box>
      <UnderDevelopment title="Final Assembly" />;
      <Box m={2} display="flex" justifyContent="right" alignItems="center">
        <NavButton title="Home" path="/digitally-integrated-production" />
      </Box>
    </Box>
  );
};

export default FinalAssembly;
