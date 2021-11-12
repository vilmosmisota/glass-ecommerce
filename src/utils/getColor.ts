export default function getColor(name: string): string {
  switch (name.toLowerCase()) {
    case "daniel hägglund": {
      return "#8A8686";
      break;
    }
    case "jeff flindt": {
      return "#6CA9A7";
      break;
    }
    case "lewis arnold": {
      return "#795650";
      break;
    }
    case "louie angenendt": {
      return "#9E9D99";
      break;
    }
    case "michal pelka": {
      return "#858C8C";
      break;
    }
    case "mike guest": {
      return "#9aa596";
      break;
    }
    case "vilmos misota": {
      return "#625A59";
      break;
    }

    default: {
      return "#AAA6A1";
    }
  }
}
