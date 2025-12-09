import { Box, Grid, Typography, Divider, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Home = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
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
          fontWeight={"Bold"}
          mb="5px"
        >
          ReTraNetz-BB
        </Typography>
        <Typography
          variant="h3"
          color={colors.grey[100]}
          fontWeight={"normal"}
          mb="5px"
        >
          Reginonal Transformation Network for the Automative and Supplier
          Industry
        </Typography>
      </Box>
      <Grid container justifyContent={"center"} mt={"50px"} spacing={4}>
        <Grid item xs={12} md={6}>
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
            ReTraNetz-BB is a network that supports companies in the automative
            and supplier industry.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2} direction="column">
            <Grid item>
              <Typography
                variant="h3"
                color={colors.greenAccent[500]}
                fontWeight={"Bold"}
              >
                Digital Assistance
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
                Digital assistants support employees in production by providing
                targeted information.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h3"
                color={colors.greenAccent[500]}
                fontWeight={"Bold"}
              >
                Energy Monitoring
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
                Innovative manufacturing technologies enable effective energy
                management within research.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h3"
                color={colors.greenAccent[500]}
                fontWeight={"Bold"}
              >
                Digitally Integrated Production
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
                Digitally integrated production optimizes manufacturing
                processes through the use of modern technologies.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
