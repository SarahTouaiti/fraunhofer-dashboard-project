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
      "The copper winding is coated with varnish to prevent short circuits.",
      "The coating slightly reduces the slot fill factor.",
    ],
  },
  {
    name: "Slot Insulation",
    image: slotInsulationImage,
    description: [
      "Sheet stacks are insulated in the slots using insulation paper to protect the copper winding.",
      "This prevents voltage flashovers and damage from sharp edges.",
    ],
  },
  {
    name: "Round Wire",
    image: roundWireImage,
    description: [
      "Round wire is made from copper.",
      "It is produced through a sequence of drawing and rolling wire rods.",
    ],
  },
  {
    name: "Flat Wire",
    image: flatWireImage,
    description: [
      "Utilizes hairpin technology.",
      "Achieves a higher slot fill factor.",
      "Improves motor efficiency.",
    ],
  },
  {
    name: "Impregnation",
    image: impregnationImage,
    description: [
      "After winding, the coils are impregnated with resin to improve electrical insulation, thermal conductivity, and mechanical strength.",
      "The impregnation process uses specialized resin materials.",
    ],
  },
];
