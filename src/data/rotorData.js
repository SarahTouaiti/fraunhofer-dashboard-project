import Commutator from "../assets/Rotor/Commutator.png";
import Contacting from "../assets/Rotor/Contacting.png";
import ElectricalTesting from "../assets/Rotor/ElectricalTesting.png";
import Impregnation from "../assets/Rotor/Impregnation.png";
import Insulation from "../assets/Rotor/Insulation.png";
import MagnetAssembly from "../assets/Rotor/MagnetAssembly.png";
import MagnetFixation from "../assets/Rotor/MagnetFixation.png";
import Magnetization from "../assets/Rotor/Magnetization.png";
import Winding from "../assets/Rotor/Winding.png";

export const rotorData = [
  {
    name: "Insulation",
    image: Insulation,
    description: ["Insulation of the manufactured poles."],
  },
  {
    name: "Winding",
    image: Winding,
    description: ["Winding of the poles.", "Linear, needle, or flyer winding."],
  },
  {
    name: "Commutator",
    image: Commutator,
    description: [
      "Assembly of the commutator.",
      "The commutator enables continuous current supply to the rotor.",
      "Assembly is carried out using axial joining.",
    ],
  },
  {
    name: "Contacting",
    image: Contacting,
    description: ["Connection of copper slip rings to the DC source."],
  },
  {
    name: "Impregnation",
    image: Impregnation,
    description: ["Impregnation of the windings with resin."],
  },
  {
    name: "Electrical Testing",
    image: ElectricalTesting,
    description: [
      "Testing of the windings through trial energization or inductive testing methods.",
      "The commutator allows continuous energization of the rotor.",
    ],
  },
  {
    name: "Magnet Assembly",
    image: MagnetAssembly,
    description: ["Mounting of magnets in a non-magnetized state."],
  },
  {
    name: "Magnet Fixation",
    image: MagnetFixation,
    description: [
      "Magnets are inserted using adhesive bonding or mechanical fixation.",
      "Performed manually or automatically on the magnets or slots of the laminated core.",
      "Then cured at 20–200°C.",
    ],
  },
  {
    name: "Magnetization",
    image: Magnetization,
    description: [
      "Takes place after assembly.",
      "The commutator enables continuous energization of the rotor through a multi-coil excitation system.",
    ],
  },
];
