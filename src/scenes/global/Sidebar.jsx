import { useState } from "react";
import { Link } from "react-router-dom";
import { menu } from "../../data/menuData";
import { tokens } from "../../theme";
import logo from "../../assets/logo.png";
import {
  Drawer,
  Box,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Collapse,
  useTheme,
} from "@mui/material";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import LogOutIcon from "@mui/icons-material/Logout";
import { useTranslation } from "react-i18next";

export default function Sidebar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("");
  const [openItems, setOpenItems] = useState({});
  const drawerWidth = 300;
  const { t } = useTranslation();

  const toggleItem = (title) => {
    setOpenItems((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <Drawer
      variant="persistent"
      open={true}
      anchor="left"
      sx={{
        width: drawerWidth,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          backgroundColor: colors.primary[400],
          color: colors.grey[100],
          borderRight: "none",
        },
      }}
    >
      {/* Sidebar Header */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        p={2}
        mt={5}
      >
        <img
          src={logo}
          alt="fraunhofer-Logo"
          height={50}
          width={50}
          style={{ borderRadius: 5 }}
        />
        <Typography
          variant="h3"
          fontWeight="bold"
          color={colors.greenAccent[500]}
          ml={2}
        >
          Fraunhofer IPK
        </Typography>
      </Box>

      {/* Menu Sections */}
      <List sx={{ mt: 2 }}>
        {menu.map((section, idx) => (
          <SidebarSection
            key={idx}
            section={section}
            selected={selected}
            setSelected={setSelected}
            openItems={openItems}
            toggleItem={toggleItem}
          />
        ))}
      </List>

      {/* Logout */}
      <Box
        mt="auto"
        mb={3}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <IconButton sx={{ color: colors.grey[100] }}>
          <LogOutIcon />
        </IconButton>
        <Typography color={colors.grey[100]} ml={1}>
          {t("menu.logout")}
        </Typography>
      </Box>
    </Drawer>
  );
}

function SidebarSection({
  section,
  selected,
  setSelected,
  openItems,
  toggleItem,
}) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isActive = selected === section.header;
  const { t } = useTranslation();

  return (
    <Box px={2}>
      {/* Top-level Header */}
      <Typography
        component={section.path ? Link : "div"}
        to={section.path || "#"}
        variant="h5"
        fontWeight="bold"
        sx={{
          mt: 2,
          mb: 1,
          color: isActive ? colors.blueAccent[500] : colors.grey[300],
          cursor: section.path ? "pointer" : "default",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          "&:hover": {
            color: section.path ? colors.blueAccent[400] : colors.grey[300],
          },
        }}
        onClick={() => setSelected(section.header)}
      >
        {section.icon && <Box mr={1}>{section.icon}</Box>}
        {t(section.header)}
      </Typography>

      {/* Section items */}
      {section.items.map((item, idx) => (
        <SidebarItem
          key={idx}
          item={item}
          level={0}
          selected={selected}
          setSelected={setSelected}
          openItems={openItems}
          toggleItem={toggleItem}
        />
      ))}
    </Box>
  );
}

function SidebarItem({
  item,
  level,
  selected,
  setSelected,
  openItems,
  toggleItem,
}) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const hasChildren = item.children && item.children.length > 0;
  const isActive = selected === item.title;
  const isOpen = openItems[item.title] || false;
  const { t } = useTranslation();

  const handleClick = () => {
    setSelected(item.title);
    if (hasChildren) toggleItem(item.title);
  };

  return (
    <>
      <ListItemButton
        onClick={handleClick}
        component={item.path ? Link : "div"}
        to={item.path || "#"}
        sx={{
          pl: 3 + level * 3,
          borderRadius: 2,
          mx: 1,
          my: 0.3,
          color: isActive ? colors.blueAccent[500] : colors.grey[100],
          backgroundColor: isActive ? colors.primary[400] : "transparent",
          "&:hover": {
            color: colors.blueAccent[400],
            backgroundColor: colors.primary[400],
          },
        }}
      >
        <ListItemText primary={t(item.title)} />
        {hasChildren && (isOpen ? <ExpandLess /> : <ExpandMore />)}
      </ListItemButton>

      {hasChildren && (
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          {item.children.map((child, idx) => (
            <SidebarItem
              key={idx}
              item={child}
              level={level + 1}
              selected={selected}
              setSelected={setSelected}
              openItems={openItems}
              toggleItem={toggleItem}
            />
          ))}
        </Collapse>
      )}
    </>
  );
}
