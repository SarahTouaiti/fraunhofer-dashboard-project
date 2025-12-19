import Commutator from "../assets/rotor/commutator.png";
import Contacting from "../assets/rotor/contacting.png";
import ElectricalTesting from "../assets/rotor/electricalTesting.png";
import Impregnation from "../assets/rotor/impregnation.png";
import Insulation from "../assets/rotor/insulation.png";
import MagnetAssembly from "../assets/rotor/magnetAssembly.png";
import MagnetFixation from "../assets/rotor/magnetFixation.png";
import Magnetization from "../assets/rotor/magnetization.png";
import Winding from "../assets/rotor/winding.png";

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
