import { Box, Typography, Grid, useTheme } from "@mui/material";
import { tokens } from "../theme";

import europeanUnionLogo from "../assets/europeanUnionLogo.jpg";

import NavButton from "../scenes/global/NavButton.jsx";

const EnergyMonitoring = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      {/* Header Section */}
      <Box
        m={2}
        textAlign="left"
        bgcolor={colors.primary[400]}
        p={2}
        borderRadius={2}
      >
        <Typography
          variant="h3"
          color={colors.grey[100]}
          fontWeight="normal"
          mb={1}
        >
          TechEner
        </Typography>
        <Typography
          variant="h2"
          color={colors.greenAccent[500]}
          fontWeight="bold"
          mb={1}
        >
          Technologies for Energy Savings in Production
        </Typography>
        <Typography
          variant="h3"
          color={colors.grey[100]}
          fontWeight="normal"
          mb={1}
        >
          Process Chain for the Production of an Injection Mold for
          Manufacturing Microfluidics
        </Typography>
      </Box>

      {/* Content Section */}

      {/* Footer Section */}
      <Grid
        container
        spacing={2}
        m={2}
        alignItems="center"
        bgcolor={colors.primary[400]}
        p={2}
        borderRadius={2}
      >
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={europeanUnionLogo}
            alt="European Union Logo"
            sx={{ width: 120, height: 80 }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body2" color={colors.grey[100]}>
            The TechEner project is funded by the European Union and the Berlin
            Senate Department for Science, Health and Care in accordance with
            the program for the "Promotion of Application Laboratories of
            Non-University Research Institutions (AL)".
          </Typography>
        </Grid>
      </Grid>
      <Box m={2} display="flex" justifyContent="right" alignItems="center">
        <NavButton title="Home" path="/" />
      </Box>
    </>
  );
};

export default EnergyMonitoring;
