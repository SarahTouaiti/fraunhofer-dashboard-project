import { Box, Typography, useTheme, Paper } from "@mui/material";
import { tokens } from "../../theme";

const UnderDevelopment = ({ title }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m={3} display="flex" justifyContent="center" alignItems="center">
      <Paper
        elevation={3}
        sx={{
          p: 4,
          maxWidth: 600,
          textAlign: "center",
          borderRadius: 3,
          backgroundColor: colors.primary[500],
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          color={colors.redAccent[500]}
          gutterBottom
        >
          {title}
        </Typography>
        <Typography variant="body1" color={colors.grey[100]}>
          This section is currently under development. Please check back later
          for detailed content.
        </Typography>
      </Paper>
    </Box>
  );
};

export default UnderDevelopment;
