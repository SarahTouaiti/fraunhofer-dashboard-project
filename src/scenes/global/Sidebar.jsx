import { useState } from "react";
import { menu } from "../../data/menuData";
import { tokens } from "../../theme";
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

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 260,
        "& .MuiDrawer-paper": {
          width: 260,
          backgroundColor: colors.primary[400], // exakt wie Topbar
          color: colors.grey[100],
          borderRight: "none",
        },
      }}
    >
      <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
        <img
          alt="fraunhofer-logo"
          width="90px"
          height="90px"
          src="../../../assets/logosquare.png"
          style={{ borderRadius: "8px" }}
        />
        <Typography
          variant="h3"
          color={colors.greenAccent[500]} // Fraunhofer in grün
          fontWeight="bold"
          mt={1}
        >
          Fraunhofer
        </Typography>
      </Box>

      <List sx={{ mt: 2 }}>
        {menu.map((section, index) => (
          <SidebarSection
            key={index}
            section={section}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </List>

      <Box mt="auto" mb={3}>
        <Box display="flex" justifyContent="center" alignItems="center">
          <IconButton sx={{ color: colors.grey[100] }}>
            <LogOutIcon />
          </IconButton>
          <Typography color={colors.grey[100]}>Logout</Typography>
        </Box>
      </Box>
    </Drawer>
  );
}

function SidebarSection({ section, selected, setSelected }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box px={2}>
      <Typography
        variant="h6"
        fontWeight="bold"
        sx={{ mt: 2, mb: 1, color: colors.grey[300] }}
      >
        {section.header}
      </Typography>

      {section.items.map((item, index) => (
        <SidebarItem
          key={index}
          item={item}
          level={0}
          selected={selected}
          setSelected={setSelected}
        />
      ))}
    </Box>
  );
}

function SidebarItem({ item, level, selected, setSelected }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = useState(false);

  const hasChildren = Array.isArray(item.children) && item.children.length > 0;
  const isActive = selected === item.title;

  return (
    <>
      <ListItemButton
        onClick={() => {
          setSelected(item.title);
          if (hasChildren) setOpen(!open);
        }}
        sx={{
          pl: 2 + level * 2,
          borderRadius: "5px",
          mx: 1,
          my: 0.3,
          color: isActive ? "#6870fa" : colors.grey[100],
          backgroundColor: isActive ? colors.primary[400] : "transparent",
          "&:hover": {
            color: "#868dfb",
            backgroundColor: colors.primary[400],
          },
        }}
      >
        <ListItemText
          primary={item.title}
          primaryTypographyProps={{ fontSize: 14 }}
        />
        {hasChildren && (open ? <ExpandLess /> : <ExpandMore />)}
      </ListItemButton>

      {hasChildren && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List disablePadding>
            {item.children.map((child, idx) =>
              typeof child === "string" ? (
                <ListItemButton
                  key={idx}
                  onClick={() => setSelected(child)}
                  sx={{
                    pl: 4 + level * 2,
                    borderRadius: "5px",
                    mx: 1,
                    my: 0.3,
                    color: selected === child ? "#6870fa" : colors.grey[100],
                    backgroundColor:
                      selected === child ? colors.primary[400] : "transparent",
                    "&:hover": {
                      color: "#868dfb",
                      backgroundColor: colors.primary[400],
                    },
                  }}
                >
                  <ListItemText
                    primary={child}
                    primaryTypographyProps={{ fontSize: 13 }}
                  />
                </ListItemButton>
              ) : (
                <SidebarItem
                  key={idx}
                  item={child}
                  level={level + 1}
                  selected={selected}
                  setSelected={setSelected}
                />
              )
            )}
          </List>
        </Collapse>
      )}
    </>
  );
}
