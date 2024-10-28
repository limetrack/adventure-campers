import { capitalize } from "./utils";



export const badges = {
  transmission: {
    name: 'Transmission',
    icon: 'icon-transmission',
    value: camper => capitalize(camper.transmission),
  },
  engine: {
    name: 'Engine',
    icon: 'icon-engine',
    value: camper => capitalize(camper.engine),
  },
  kitchen: {
    name: 'Kitchen',
    icon: 'icon-kitchen',
  },
  AC: {
    name: 'AC',
    icon: 'icon-ac',
  },
  radio: {
    name: 'Radio',
    icon: 'icon-radio',
  },
  bathroom: {
    name: 'Bathroom',
    icon: 'icon-bathroom',
  },
  refrigerator: {
    name: 'Refrigerator',
    icon: 'icon-fridge',
  },
  microwave: {
    name: 'Microwave',
    icon: 'icon-microwave',
  },
  water: {
    name: 'Water',
    icon: 'icon-water',
  },
  TV: {
    name: 'TV',
    icon: 'icon-tv',
  },
};

export const mainBadges = ["transmission", "engine", "kitchen", "AC"];
