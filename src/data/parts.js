import stator from "../assets/parts/stator.png";
import laminatedCore from "../assets/parts/laminatedCore.png";
import rotor from "../assets/parts/rotor.png";
import shaft from "../assets/parts/shaft.png";

export const parts = [
  {
    name: "Stator",
    img: stator,
    desc: "The stator generates the magnetic field in the motor and enables the rotor to rotate.",
    link: "/digital-assistance/assembly/stator",
  },
  {
    name: "Laminated Core",
    img: laminatedCore,
    desc: "The laminated core minimizes eddy current losses and improves motor efficiency.",
    link: "/digital-assistance/assembly/laminated-core",
  },
  {
    name: "Rotor",
    img: rotor,
    desc: "The rotor rotates within the stator's magnetic field and generates the required motion.",
    link: "/digital-assistance/assembly/rotor",
  },
  {
    name: "Shaft",
    img: shaft,
    desc: "The shaft transmits the rotor's rotary motion to the drive gear and other components.",
    link: "/digital-assistance/assembly/shaft",
  },
  {
    name: "Housing",
    img: shaft,
    desc: "The housing protects internal parts of the motor and provides mechanical stability.",
    link: "/digital-assistance/assembly/housing",
  },
  {
    name: "Final Assembly",
    img: shaft,
    desc: "All parts are assembled and tested to ensure functionality.",
    link: "/digital-assistance/assembly/final-assembly",
  },
];
