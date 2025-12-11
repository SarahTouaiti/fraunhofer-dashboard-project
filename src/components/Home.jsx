import { Box, Grid, Typography, Divider, useTheme } from "@mui/material";
import { tokens } from "../theme";

import reTraNetzLogo from "../assets/reTraNetz.png";
import digitalAssistance from "../assets/digitalAssistance.png";
import energyMonitoring from "../assets/energyMonitoring.png";
import digitallyIntegratedProduction from "../assets/digitallyIntegratedProduction.png";

import fraunhoferIPKLogo from "../assets/FraunhoferLogoWithText.png";
import IWFLogo from "../assets/IWFLogo.png";
import retranetzLogo from "../assets/retranetzLogo.png";
import ministryLogo from "../assets/federalMinistryForEconomicAffairsAndEnergyLogo.png";

const Home = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      {/* Welcome Section */}
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
          ReTraNetz-BB
        </Typography>
        <Typography variant="h3" color={colors.grey[100]} fontWeight={"normal"}>
          Regional Transformation Network for the Automotive and Supplier
          Industry
        </Typography>
      </Box>

      {/* Main Grid */}
      <Grid container spacing={4} m={2}>
        {/* Left Column */}
        <Grid
          item
          xs={12}
          md={6}
          container
          direction="column"
          backgroundColor={colors.primary[400]}
          p={2}
          borderRadius={1}
          spacing={2}
          alignItems="center"
        >
          <Grid item>
            <img
              alt="ReTraNetz Logo"
              src={reTraNetzLogo}
              style={{ width: "550px", height: "auto", borderRadius: 5 }}
            />
          </Grid>
          <Grid item>
            <Typography
              variant="h3"
              color={colors.greenAccent[500]}
              fontWeight={"bold"}
            >
              ReTraNetz-BB
            </Typography>
            <Divider
              sx={{
                mb: "10px",
                mt: "10px",
                height: "0.5px",
                width: "100px",
                backgroundColor: colors.greenAccent[500],
              }}
            />
            <Typography variant="h5" color={colors.grey[100]} mb={"20px"}>
              ReTraNetz-BB is a network that supports companies in the
              automotive and supplier industry.
            </Typography>
          </Grid>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={6} container direction="column" spacing={2}>
          {/* Block 1 */}
          <Grid
            item
            container
            backgroundColor={colors.primary[400]}
            p={2}
            borderRadius={1}
            spacing={2}
            alignItems="center"
          >
            <Grid item>
              <img
                alt="Digital Assistance"
                src={digitalAssistance}
                style={{ width: "150px", height: "auto" }}
              />
            </Grid>
            <Grid item xs>
              <Typography
                variant="h5"
                color={colors.greenAccent[500]}
                fontWeight={"bold"}
              >
                Digital Assistance
              </Typography>
              <Divider
                sx={{
                  my: "5px",
                  height: "0.5px",
                  width: "80px",
                  backgroundColor: colors.greenAccent[500],
                }}
              />
              <Typography variant="body1" color={colors.grey[100]}>
                Digital assistants support employees in production by providing
                targeted information.
              </Typography>
            </Grid>
          </Grid>

          {/* Block 2 */}
          <Grid
            item
            container
            backgroundColor={colors.primary[400]}
            p={2}
            borderRadius={1}
            spacing={2}
            alignItems="center"
          >
            <Grid item>
              <img
                alt="Energy Monitoring"
                src={energyMonitoring}
                style={{ width: "150px", height: "auto" }}
              />
            </Grid>
            <Grid item xs>
              <Typography
                variant="h5"
                color={colors.greenAccent[500]}
                fontWeight={"bold"}
              >
                Energy Monitoring
              </Typography>
              <Divider
                sx={{
                  my: "5px",
                  height: "0.5px",
                  width: "80px",
                  backgroundColor: colors.greenAccent[500],
                }}
              />
              <Typography variant="body1" color={colors.grey[100]}>
                Innovative manufacturing technologies enable effective energy
                management within research.
              </Typography>
            </Grid>
          </Grid>

          {/* Block 3 */}
          <Grid
            item
            container
            backgroundColor={colors.primary[400]}
            p={2}
            borderRadius={1}
            spacing={2}
            alignItems="center"
          >
            <Grid item>
              <img
                alt="Digitally Integrated Production"
                src={digitallyIntegratedProduction}
                style={{ width: "150px", height: "auto" }}
              />
            </Grid>
            <Grid item xs>
              <Typography
                variant="h5"
                color={colors.greenAccent[500]}
                fontWeight={"bold"}
              >
                Digitally Integrated Production
              </Typography>
              <Divider
                sx={{
                  my: "5px",
                  height: "0.5px",
                  width: "80px",
                  backgroundColor: colors.greenAccent[500],
                }}
              />
              <Typography variant="body1" color={colors.grey[100]}>
                Digitally integrated production optimizes manufacturing
                processes through the use of modern technologies.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Footer Section */}
      <Box m={2} p={2} borderRadius="5px" backgroundColor={colors.primary[400]}>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
        >
          {[
            { src: fraunhoferIPKLogo, alt: "Fraunhofer IPK" },
            { src: IWFLogo, alt: "IWF Logo" },
            { src: retranetzLogo, alt: "ReTraNetz Logo" },
            { src: ministryLogo, alt: "Federal Ministry Logo" },
          ].map((logo, index) => (
            <Grid item key={index}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                width={{ xs: "120px", sm: "140px", md: "150px" }}
                height={{ xs: "60px", sm: "70px", md: "80px" }}
                sx={{
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.1)", // slightly enlarge on hover
                  },
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Home;
