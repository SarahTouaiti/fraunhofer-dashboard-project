import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import BuildIcon from "@mui/icons-material/Build";
import ShowChartIcon from "@mui/icons-material/ShowChart";

export const menu = [
  { header: "To The Project", items: [], icon: <HomeIcon />, path: "/" },
  {
    header: "Decentralized Production Control",
    items: [
      {
        title: "Stator Manufacturing",
        children: [
          "Stator",
          "Laminate Package",
          "Rotor",
          "Shaft",
          "Housing",
          "Final Assembly",
        ],
      },
      { title: "Smart Maintenance", children: [] },
    ],
    icon: <WorkIcon />,
  },
  {
    header: "Digital Assistance",
    items: [
      {
        title: "Assembly",
        children: ["Product Selection", "Electric Motor Housing"],
      },
      { title: "Machine Operation", children: ["Help (ChatBot)"] },
      { title: "Virtual EDM Assistance", children: [] },
    ],
    icon: <BuildIcon />,
  },
  {
    header: "Energy Monitoring",
    items: [
      {
        title: "Living Laboratory",
        children: [{ title: "Dashboard", children: ["UR10", "UR16"] }],
      },
      {
        title: "Experimental Hall",
        children: [
          {
            title: "Dashboard",
            children: [
              "Exeron HSC 600",
              "Exeron HSC MP7",
              "GFH GL Compact II",
              "Exeron EDM 313",
              "Werth VideoCheck HA 400",
              "SUMITOMO",
            ],
          },
        ],
      },
    ],
    icon: <ShowChartIcon />,
  },
];
