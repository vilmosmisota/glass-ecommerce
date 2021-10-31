export default function getColor(name: string): string {
  switch (name.toLowerCase()) {
    case "daniel hägglund": {
      return "#abadae";
      break;
    }
    case "jeff flindt": {
      return "#A9896C";
      break;
    }
    case "lewis arnold": {
      return "#7e94ba";
      break;
    }
    case "louie angenendt": {
      return "#A9A5B7";
      break;
    }
    case "michal pelka": {
      return "#AC927F";
      break;
    }
    case "mike guest": {
      return "#A196A5";
      break;
    }
    case "vilmos misota": {
      return "#7a8799";
      break;
    }

    default: {
      return "#AAA6A1";
    }
  }
}
