import flatWireImage from "../assets/Stator/FlatWire.png";
import roundWireImage from "../assets/Stator/RoundWire.png";
import slotInsulationImage from "../assets/Stator/SlotInsulation.png";
import wireInsulationImage from "../assets/Stator/WireInsulation.png";
import impregnationImage from "../assets/Stator/Impregnation.png";

export const statorData = [
  {
    name: "Wire Insulation",
    image: wireInsulationImage,
    description: [
      "The copper winding is coated with varnish.",
      "Prevents short circuits.",
      "The coating slightly reduces the fill factor in the slots.",
    ],
  },
  {
    name: "Slot Insulation",
    image: slotInsulationImage,
    description: [
      "Sheet packages are insulated in the slots using insulation paper to protect the copper winding.",
      "Prevents voltage flashovers and protects against sharp edges.",
    ],
  },
  {
    name: "Round Wire",
    image: roundWireImage,
    description: [
      "Round wire is produced from copper.",
      "Manufacturing is done by drawing and rolling wire rods.",
    ],
  },
  {
    name: "Flat Wire",
    image: flatWireImage,
    description: [
      "Uses hairpin technology.",
      "Achieves a higher slot fill factor.",
      "Increases efficiency.",
    ],
  },
  {
    name: "Impregnation",
    image: impregnationImage,
    description: [
      "The coils are impregnated with resin after winding to improve electrical insulation, thermal conductivity, and resistance to mechanical stress.",
      "Impregnation is carried out using resin.",
    ],
  },
];
