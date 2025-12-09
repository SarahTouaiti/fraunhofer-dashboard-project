import { useState } from "react";
import { menu } from "../../data/menuData";
import { tokens } from "../../theme";
import logo from "../..//assets/logo.png";
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

export default function Sidebar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("");
  const [openItems, setOpenItems] = useState({}); // Track open submenus
  const drawerWidth = 300;

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
            level={0}
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
          Logout
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
  level,
}) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isActive = selected === section.header;

  return (
    <Box px={2}>
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{
          mt: 2,
          mb: 1,
          color: isActive ? colors.blueAccent[500] : colors.grey[300],
          cursor: "pointer",
          userSelect: "none",
          display: "flex",
          alignItems: "center",
        }}
        onClick={() => setSelected(section.header)}
      >
        {section.icon && <Box mr={1}>{section.icon}</Box>}
        {section.header}
      </Typography>

      {section.items.map((item, idx) => (
        <SidebarItem
          key={idx}
          item={item}
          level={level}
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

  const handleClick = () => {
    setSelected(item.title);
    if (hasChildren) toggleItem(item.title);
  };

  const renderChild = (child, idx) => {
    if (typeof child === "string") {
      return (
        <ListItemButton
          key={idx}
          onClick={() => setSelected(child)}
          sx={{
            pl: 4 + level * 3,
            borderRadius: 2,
            color:
              selected === child ? colors.blueAccent[500] : colors.grey[100],
            backgroundColor:
              selected === child ? colors.primary[400] : "transparent",
            "&:hover": {
              color: colors.blueAccent[400],
              backgroundColor: colors.primary[400],
            },
          }}
        >
          <ListItemText primary={child} />
        </ListItemButton>
      );
    }
    return (
      <SidebarItem
        key={idx}
        item={child}
        level={level + 1}
        selected={selected}
        setSelected={setSelected}
        openItems={openItems}
        toggleItem={toggleItem}
      />
    );
  };

  return (
    <>
      <ListItemButton
        onClick={handleClick}
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
        <ListItemText primary={item.title} />
        {hasChildren && (isOpen ? <ExpandLess /> : <ExpandMore />)}
      </ListItemButton>

      {hasChildren && (
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          {item.children.map(renderChild)}
        </Collapse>
      )}
    </>
  );
}
