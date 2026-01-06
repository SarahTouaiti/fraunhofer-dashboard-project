import { useNavigate } from "react-router-dom";
import { Box, Grid, Typography, Divider, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { useTranslation } from "react-i18next";

import reTraNetzLogo from "../assets/home/reTraNetz.png";
import digitalAssistance from "../assets/home/digitalAssistance.png";
import energyMonitoring from "../assets/home/energyMonitoring.png";
import digitallyIntegratedProduction from "../assets/home/digitallyIntegratedProduction.png";

import fraunhoferIPKLogo from "../assets/home/FraunhoferLogoWithText.png";
import IWFLogo from "../assets/home/IWFLogo.png";
import retranetzLogo from "../assets/home/retranetzLogo.png";
import ministryLogo from "../assets/home/federalMinistryForEconomicAffairsAndEnergyLogo.png";

const Home = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const { t } = useTranslation();

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
          {t("home.headerSubtitleTop")}
        </Typography>
        <Typography
          variant="h2"
          color={colors.greenAccent[500]}
          fontWeight={"bold"}
          mb="5px"
        >
          {t("home.headerTitle")}
        </Typography>
        <Typography variant="h3" color={colors.grey[100]} fontWeight={"normal"}>
          {t("home.headerSubtitleBottom")}
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
              {t("home.welcomeTitle")}
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
              {t("home.welcomeDescription")}
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
            onClick={() => navigate("/digital-assistance")}
            sx={{
              cursor: "pointer", // change cursor to pointer on hover
              transition: "transform 0.2s, background-color 0.2s",
              "&:hover": {
                transform: "scale(1.03)",
              },
            }}
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
                {t("home.digitalAssistanceTitle")}
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
                {t("home.digitalAssistanceDescription")}
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
            onClick={() => navigate("/energy-monitoring")}
            sx={{
              cursor: "pointer",
              transition: "transform 0.2s, background-color 0.2s",
              "&:hover": {
                transform: "scale(1.03)",
              },
            }}
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
                {t("home.energyMonitoringTitle")}
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
                {t("home.energyMonitoringDescription")}
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
            onClick={() => navigate("/digitally-integrated-production")}
            sx={{
              cursor: "pointer",
              transition: "transform 0.2s, background-color 0.2s",
              "&:hover": {
                transform: "scale(1.03)",
              },
            }}
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
                {t("home.digitallyIntegratedProductionTitle")}
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
                {t("home.digitallyIntegratedProductionDescription")}
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
