import { Box, Typography, useTheme, Paper } from "@mui/material";
import { tokens } from "../../theme";
import { useTranslation } from "react-i18next";

const UnderDevelopment = ({ title }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { t } = useTranslation();

  return (
    <Box m={3} display="flex" justifyContent="center" alignItems="center">
      <Paper
        elevation={3}
        sx={{
          p: 4,
          maxWidth: 600,
          textAlign: "center",
          borderRadius: 3,
          backgroundColor: colors.primary[400],
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
          {t("underDevelopment.note")}
        </Typography>
      </Paper>
    </Box>
  );
};

export default UnderDevelopment;
