import { useNavigate } from "react-router-dom";
import { Box, Typography, Divider, Grid, Paper, useTheme } from "@mui/material";
import { tokens } from "../theme";

import { parts } from "../data/parts.js";

const DigitallyIntegratedProduction = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  return (
    <Box>
      {/* Header Section */}
      <Box
        m={2}
        textAlign={"left"}
        backgroundColor={colors.primary[400]}
        p={2}
        borderRadius={"5px"}
      >
        <Typography
          variant="h2"
          color={colors.greenAccent[500]}
          fontWeight="bold"
        >
          Digitally Integrated Production
        </Typography>
      </Box>

      {/* Grid Section (single row) */}
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="stretch"
        //wrap="nowrap" // forces one horizontal row
        overflow="auto" // allows horizontal scrolling on small screens
        sx={{
          p: 2,
          "&::-webkit-scrollbar": { height: 8 },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: colors.greenAccent[500],
            borderRadius: 4,
          },
        }}
      >
        {parts.map((part, index) => (
          <Grid
            item
            key={index}
            sx={{
              flex: "0 0 auto", // prevent shrinking
              width: 250, // fixed width for consistent cards
            }}
            onClick={() => {
              navigate(part.link);
            }}
          >
            <Paper
              sx={{
                backgroundColor: colors.primary[400],
                p: 3,
                borderRadius: "10px",
                height: "100%",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              elevation={3}
            >
              <Box
                component="img"
                src={part.img}
                alt={part.name}
                sx={{
                  width: 100,
                  height: "auto",
                  borderRadius: "5px",
                  mb: 2,
                }}
              />
              <Typography
                variant="h4"
                color={colors.grey[100]}
                fontWeight="bold"
              >
                {part.name}
              </Typography>
              <Divider
                sx={{
                  my: 1,
                  width: "60%",
                  borderColor: colors.greenAccent[500],
                }}
              />
              <Typography variant="h6" color={colors.grey[100]}>
                {part.desc}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DigitallyIntegratedProduction;
