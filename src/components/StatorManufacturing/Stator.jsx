import { Box, Typography, Grid, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../scenes/global/Header";

const Stator = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      <Header title="Digitally Integrated Production" subtitle="Stator" />
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="stretch"
        overflow="auto"
        sx={{
          p: 2,
          "&::-webkit-scrollbar": { height: 8 },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: colors.greenAccent[500],
            borderRadius: 4,
          },
        }}
      ></Grid>
    </Box>
  );
};

export default Stator;
