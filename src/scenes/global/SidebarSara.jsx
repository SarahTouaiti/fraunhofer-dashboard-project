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
  Divider,
  useTheme,
} from "@mui/material";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import LogOutIcon from "@mui/icons-material/Logout";

export default function Sidebar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Drawer variant="permanent" anchor="left">
      <Box display="flex" justifyContent="center">
        <img
          alt="fraunhofer-logo"
          width="100px"
          height="100px"
          src="../../../assets/logosquare.png"
        />
        <Typography
          variant="h2"
          color={colors.grey[100]}
          fontWeight="bold"
          sx={{ m: "10px 0 0 0" }}
        >
          Fraunhofer
        </Typography>
      </Box>
      <List sx={{ width: 300, padding: 2 }}>
        {menu.map((section, index) => (
          <SidebarSection key={index} section={section} />
        ))}
      </List>
      <Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          ml="15px"
        >
          <IconButton>
            <LogOutIcon />
          </IconButton>
          <Typography>LogOut</Typography>
        </Box>
      </Box>
    </Drawer>
  );
}

function SidebarSection({ section }) {
  return (
    <>
      <Typography variant="h6" sx={{ mt: 2, mb: 1, fontWeight: "bold" }}>
        {section.header}
      </Typography>
      {section.items.map((item, index) => (
        <SidebarItem key={index} item={item} level={0} />
      ))}
      <Divider sx={{ my: 2 }} />
    </>
  );
}

function SidebarItem({ item, level }) {
  const [open, setOpen] = useState(false);
  const hasChildren = Array.isArray(item.children) && item.children.length > 0;
  const handleClick = () => {
    if (hasChildren) {
      setOpen((prev) => !prev);
    }
  };
  return (
    <>
      <ListItemButton onClick={handleClick} sx={{ pl: 2 + item.level * 2 }}>
        <ListItemText primary={item.title} />
        {hasChildren && (open ? <ExpandLess /> : <ExpandMore />)}
      </ListItemButton>
      {hasChildren && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List disablePadding>
            {item.children.map((child, idx) =>
              typeof child === "string" ? (
                <ListItemButton key={idx} sx={{ pl: 4 + level * 2 }}>
                  <ListItemText primary={child} />
                </ListItemButton>
              ) : (
                <SidebarItem key={idx} item={child} level={level + 1} />
              )
            )}
          </List>
        </Collapse>
      )}
    </>
  );
}
