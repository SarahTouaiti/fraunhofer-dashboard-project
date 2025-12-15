import { useNavigate } from "react-router-dom";
import { Box, Typography, Grid, Divider, useTheme } from "@mui/material";
import { tokens } from "../theme";
import digitalAssistance from "../assets/DigitalAssistanceComponentDA.png";
import Assembly from "../assets/Assembly.png";
import Chatbot from "../assets/ChatBot.png";

const DigitalAssistance = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  return (
    <Box>
      {/* Header Section */}
      <Box
        m={2}
        textAlign="left"
        backgroundColor={colors.primary[400]}
        p={2}
        borderRadius="5px"
      >
        <Typography
          variant="h3"
          color={colors.grey[100]}
          fontWeight="normal"
          mb="5px"
        >
          ReTraNetz-BB
        </Typography>
        <Typography
          variant="h2"
          color={colors.greenAccent[500]}
          fontWeight="bold"
          mb="5px"
        >
          Digital Assistance
        </Typography>
        <Typography
          variant="h3"
          color={colors.grey[100]}
          fontWeight="normal"
          mb="5px"
        >
          Efficient Process Automation and Intelligent Support
        </Typography>
      </Box>

      {/* Main Grid */}
      <Grid container spacing={4} m={2}>
        {/* LEFT COLUMN */}
        <Grid
          item
          xs={12}
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
            src={digitalAssistance}
            alt="Digital Assistance"
            sx={{
              width: "100%",
              maxWidth: "400px",
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
            Digital Assistance
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
            Discover new opportunities to optimize your workflows and improve
            your efficiency through tailored solutions.
          </Typography>
        </Grid>

        {/* RIGHT COLUMN */}
        <Grid item xs={12} md={6} container direction="column" spacing={2}>
          {/* Block 1 */}
          <Grid
            item
            container
            spacing={2}
            backgroundColor={colors.primary[400]}
            p={2}
            borderRadius="5px"
            alignItems="center"
            onClick={() => navigate("/digital-assistance/assembly")}
            sx={{
              cursor: "pointer",
              transition: "transform 0.2s, background-color 0.2s",
              "&:hover": {
                transform: "scale(1.03",
                backgroundColor: colors.primary[300],
              },
            }}
          >
            <Grid item>
              <Box
                component="img"
                alt="Assembly"
                src={Assembly}
                sx={{ width: 150, height: "auto", borderRadius: "5px" }}
              />
            </Grid>
            <Grid item xs>
              <Typography
                variant="h3"
                color={colors.greenAccent[500]}
                fontWeight="bold"
              >
                Assembly
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
                Learn the assembly process step by step to minimize errors.
              </Typography>
            </Grid>
          </Grid>

          {/* Block 2 */}
          <Grid
            item
            container
            spacing={2}
            backgroundColor={colors.primary[400]}
            p={2}
            borderRadius="5px"
            alignItems="center"
            onClick={() => navigate("/digital-assistance/chatbot")}
            sx={{
              cursor: "pointer",
              transition: "transform 0.2s, background-color 0.2s",
              "&:hover": {
                transform: "scale(1.03",
                backgroundColor: colors.primary[300],
              },
            }}
          >
            <Grid item>
              <Box
                component="img"
                alt="Chatbot"
                src={Chatbot}
                sx={{ width: 150, height: "auto", borderRadius: "5px" }}
              />
            </Grid>
            <Grid item xs>
              <Typography
                variant="h3"
                color={colors.greenAccent[500]}
                fontWeight="bold"
              >
                Chatbot
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
                Use Chatbot to quickly get answers to your questions.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DigitalAssistance;
