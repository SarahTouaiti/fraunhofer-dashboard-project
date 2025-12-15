import { useNavigate } from "react-router-dom";
import { Box, Grid, Typography, Divider, useTheme } from "@mui/material";
import { tokens } from "../theme";
import Header from "../scenes/global/Header";
import electricalMotor from "../assets/ElectricMotor.png";
import electricalMotorHousing from "../assets/ElectricMotorHousing.png";
import assembly from "../assets/shaft.png";

const Assembly = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  return (
    <Box>
      {/* Header */}
      <Header
        title="Digital Assistance > Assembly"
        subtitle="Assemble two components using a guide for efficient process automation, or use our chatbot for additional support."
      />

      {/* Main Grid */}
      <Grid container spacing={4} m={2}>
        {/* LEFT COLUMN */}
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          container
          direction="column"
          alignItems="center"
          backgroundColor={colors.primary[400]}
          p={3}
          borderRadius="5px"
        >
          <Box
            component="img"
            src={assembly}
            alt="Assembly"
            sx={{
              width: "100%",
              maxWidth: "350px", // prevent pushing right column
              height: "auto",
              borderRadius: "5px",
              mb: 2,
            }}
          />

          <Typography
            variant="h3"
            color={colors.greenAccent[500]}
            fontWeight="bold"
            textAlign="center"
          >
            Assembly
          </Typography>

          <Divider
            sx={{
              my: 1,
              width: "100px",
              mx: "auto",
              backgroundColor: colors.greenAccent[500],
            }}
          />

          <Typography
            variant="h5"
            color={colors.grey[100]}
            textAlign="center"
            mb={2}
          >
            Check the availability and status of the 3D-printed parts to proceed
            with the assembly and keep the process efficient.
          </Typography>
        </Grid>

        {/* RIGHT COLUMN */}
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          container
          direction="column"
          spacing={2}
        >
          {/* Block 1 */}
          <Grid
            item
            sx={{
              cursor: "pointer",
              transition: "transform 0.2s, background-color 0.2s",
              "&:hover": {
                transform: "scale(1.03)",
                backgroundColor: colors.primary[300],
              },
            }}
            onClick={() =>
              navigate("/digital-assistance/assembly/electrical-motor-housing")
            }
          >
            <Box
              display="flex"
              alignItems="center"
              backgroundColor={colors.primary[400]}
              p={2}
              borderRadius="5px"
            >
              <Box
                component="img"
                alt="Electrical Motor Housing"
                src={electricalMotorHousing}
                sx={{ width: 150, height: "auto", borderRadius: "5px", mr: 2 }}
              />
              <Box>
                <Typography
                  variant="h3"
                  color={colors.greenAccent[500]}
                  fontWeight="bold"
                >
                  Electrical Motor Housing
                </Typography>
                <Divider
                  sx={{
                    my: 1,
                    height: "0.5px",
                    width: "100px",
                    backgroundColor: colors.greenAccent[500],
                  }}
                />
                <Typography variant="h5" color={colors.grey[100]}>
                  The housing for the electrical motor must be assembled
                  precisely to ensure optimal performance.
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Block 2 */}
          <Grid
            item
            sx={{
              cursor: "pointer",
              transition: "transform 0.2s, background-color 0.2s",
              "&:hover": {
                transform: "scale(1.03)",
                backgroundColor: colors.primary[300],
              },
            }}
            onClick={() =>
              navigate("/digital-assistance/assembly/electrical-motor")
            }
          >
            <Box
              display="flex"
              alignItems="center"
              backgroundColor={colors.primary[400]}
              p={2}
              borderRadius="5px"
            >
              <Box
                component="img"
                alt="Electrical Motor"
                src={electricalMotor}
                sx={{ width: 150, height: "auto", borderRadius: "5px", mr: 2 }}
              />
              <Box>
                <Typography
                  variant="h3"
                  color={colors.greenAccent[500]}
                  fontWeight="bold"
                >
                  Electrical Motor
                </Typography>
                <Divider
                  sx={{
                    my: 1,
                    height: "0.5px",
                    width: "100px",
                    backgroundColor: colors.greenAccent[500],
                  }}
                />
                <Typography variant="h5" color={colors.grey[100]}>
                  The electric motor is a central component of the assembly.
                  Make sure all parts are ready for installation.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Assembly;
