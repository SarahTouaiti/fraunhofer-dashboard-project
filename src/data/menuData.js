export const menu = [
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
  },
];
