import { Box } from "@mui/material";
import UnderDevelopment from "../../scenes/global/UnderDevelopment";
import NavButton from "../../scenes/global/NavButton";

const Shaft = () => {
  return (
    <Box>
      <UnderDevelopment title="Shaft" />;
      <Box m={2} display="flex" justifyContent="right" alignItems="center">
        <NavButton title="Home" path="/digitally-integrated-production" />
      </Box>
    </Box>
  );
};

export default Shaft;
