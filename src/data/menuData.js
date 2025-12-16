import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import BuildIcon from "@mui/icons-material/Build";
import ShowChartIcon from "@mui/icons-material/ShowChart";

export const menu = [
  { header: "To The Project", items: [], icon: <HomeIcon />, path: "/" },

  {
    header: "Decentralized Production Control",
    icon: <WorkIcon />,
    items: [
      {
        title: "Stator Manufacturing",
        children: [
          { title: "Stator", path: "/digital-assistance/assembly/stator" },
          {
            title: "Laminated Core",
            path: "/digital-assistance/assembly/laminated-core",
          },
          { title: "Rotor", path: "/digital-assistance/assembly/rotor" },
          { title: "Shaft", path: "/digital-assistance/assembly/shaft" },
          { title: "Housing", path: "/digital-assistance/assembly/housing" },
          {
            title: "Final Assembly",
            path: "/digital-assistance/assembly/final-assembly",
          },
        ],
      },
      { title: "Smart Maintenance", path: "/smart-maintenance", children: [] },
    ],
  },

  {
    header: "Digital Assistance",
    icon: <BuildIcon />,
    items: [
      {
        title: "Assembly",
        children: [
          { title: "Product Selection", path: "/product-selection" },
          { title: "Electric Motor Housing", path: "/electric-motor-housing" },
        ],
      },
      {
        title: "Machine Operation",
        children: [{ title: "Help (ChatBot)", path: "/help-chatbot" }],
      },
      {
        title: "Virtual EDM Assistance",
        path: "/virtual-edm-assistance",
        children: [],
      },
    ],
  },

  {
    header: "Energy Monitoring",
    icon: <ShowChartIcon />,
    items: [
      {
        title: "Living Laboratory",
        children: [
          {
            title: "Dashboard",
            children: [
              { title: "UR10", path: "/ur10" },
              { title: "UR16", path: "/ur16" },
            ],
          },
        ],
      },
      {
        title: "Experimental Hall",
        children: [
          {
            title: "Dashboard",
            children: [
              { title: "Exeron HSC 600", path: "/exeron-hsc-600" },
              { title: "Exeron HSC MP7", path: "/exeron-hsc-mp7" },
              { title: "GFH GL Compact II", path: "/gfh-gl-compact-ii" },
              { title: "Exeron EDM 313", path: "/exeron-edm-313" },
              {
                title: "Werth VideoCheck HA 400",
                path: "/werth-videocheck-ha-400",
              },
              { title: "SUMITOMO", path: "/sumitomo" },
            ],
          },
        ],
      },
    ],
  },
];
