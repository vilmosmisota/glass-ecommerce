import { Entry } from "contentful";

export interface Icontents {
  props: {
    contents?: Entry<unknown>[];
    notFound?: boolean;
  };
}

export interface IpropsContents {
  contents: Entry<any>[];
  notFound: boolean;
}

export interface Icontributers {
  props: {
    contributers?: Entry<unknown>[];
    notFound?: boolean;
  };
}

export interface IpropsContributers {
  contributers: Entry<any>[];
  notFound: boolean;
}
