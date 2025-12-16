import { Box, Paper, Grid, Typography, Divider, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../scenes/global/Header";
import { sheetsData } from "../../data/sheetsData.js";

const LaminatedCore = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      <Header
        title="Digitally Integrated Production"
        subtitle="Laminated Core"
      />
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
      >
        {sheetsData.map((item, index) => (
          <Grid item key={index} sx={{ flex: "0 0 auto", width: 250 }}>
            <Paper
              sx={{
                p: 3,
                backgroundColor: colors.primary[400],
                borderRadius: "5px",
                height: "100%",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
                transition: "transform 0.2s, background-color 0.2s",
                "&:hover": {
                  transform: "scale(1.03)",
                  backgroundColor: colors.primary[300],
                },
              }}
              elevation={3}
            >
              <Box
                component="img"
                src={item.image}
                alt={item.name}
                sx={{ width: 100, height: "auto", borderRadius: "5px", mb: 2 }}
              />
              <Typography variant="h4" color={colors.greenAccent[500]} mb={2}>
                {item.name}
              </Typography>
              <Divider
                sx={{
                  my: 1,
                  width: "60%",
                  borderColor: colors.greenAccent[500],
                }}
              />
              <Box sx={{ mt: 2, px: 1, textAlign: "left" }}>
                <Typography
                  variant="body2"
                  color={colors.grey[100]}
                  sx={{
                    lineHeight: 1.6,
                    letterSpacing: "0.02em",
                    fontWeight: 300,
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LaminatedCore;
