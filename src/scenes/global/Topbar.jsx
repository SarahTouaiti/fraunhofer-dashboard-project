import { Box, IconButton, useTheme, InputBase } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import { useTranslation } from "react-i18next";

import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "de" : "en");
  };

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* Search Bar */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder={t("topbar.search")} />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* Icons */}
      <Box display="flex" alignItems="center">
        {/* Dark/Light Mode Toggle */}
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>

        {/* Notifications */}
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>

        {/* User/Profile */}
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>

        {/* Language Toggle */}
        <IconButton
          onClick={toggleLanguage}
          sx={{
            ml: 1,
            color: colors.grey[100],
            "&:hover": {
              backgroundColor: colors.primary[400], // same hover as other icons
            },
          }}
        >
          <LanguageOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
