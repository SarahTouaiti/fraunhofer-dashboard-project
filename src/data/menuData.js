import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import BuildIcon from "@mui/icons-material/Build";
import ShowChartIcon from "@mui/icons-material/ShowChart";

export const menu = [
  { header: "menu.toTheProject", items: [], icon: <HomeIcon />, path: "/" },

  {
    header: "menu.decentralizedProductionControl",
    icon: <WorkIcon />,
    items: [
      {
        title: "menu.statorManufacturing",
        children: [
          { title: "menu.stator", path: "/digital-assistance/assembly/stator" },
          {
            title: "menu.laminatedCore",
            path: "/digital-assistance/assembly/laminated-core",
          },
          { title: "menu.rotor", path: "/digital-assistance/assembly/rotor" },
          { title: "menu.shaft", path: "/digital-assistance/assembly/shaft" },
          {
            title: "menu.housing",
            path: "/digital-assistance/assembly/housing",
          },
          {
            title: "menu.finalAssembly",
            path: "/digital-assistance/assembly/final-assembly",
          },
        ],
      },
      {
        title: "menu.smartMaintenance",
        path: "/smart-maintenance",
        children: [],
      },
    ],
  },

  {
    header: "menu.digitalAssistance",
    icon: <BuildIcon />,
    items: [
      {
        title: "menu.assembly",
        path: "/digital-assistance/assembly",
        children: [
          { title: "menu.productSelection", path: "/digital-assistance" },
          {
            title: "menu.electricMotorHousing",
            path: "/electric-motor-housing",
          },
        ],
      },
      {
        title: "menu.machineOperation",
        children: [{ title: "menu.helpChatbot", path: "/help-chatbot" }],
      },
      {
        title: "menu.virtualEDMAssistance",
        path: "/virtual-edm-assistance",
        children: [],
      },
    ],
  },

  {
    header: "menu.energyMonitoring",
    icon: <ShowChartIcon />,
    items: [
      {
        title: "menu.livingLaboratory",
        children: [
          {
            title: "menu.dashboard",
            children: [
              { title: "menu.ur10", path: "/ur10" },
              { title: "menu.ur16", path: "/ur16" },
            ],
          },
        ],
      },
      {
        title: "menu.experimentalHall",
        children: [
          {
            title: "menu.dashboard",
            children: [
              { title: "menu.exeronHSC600", path: "/exeron-hsc-600" },
              { title: "menu.exeronHSC700", path: "/exeron-hsc-mp7" },
              { title: "menu.gfhGLCompactII", path: "/gfh-gl-compact-ii" },
              { title: "menu.exeronEDM313", path: "/exeron-edm-313" },
              {
                title: "menu.werthVideocheckHA400",
                path: "/werth-videocheck-ha-400",
              },
              { title: "menu.sumitomo", path: "/sumitomo" },
            ],
          },
        ],
      },
    ],
  },
];
