import { Entry } from "contentful";

export interface Icontents {
  props: {
    contents: Entry<unknown>[] | null;
    notFound: boolean;
  };
}

export interface IpropsContents {
  contents: Entry<any>[];
  notFound?: boolean;
}

export interface IpropsPhotographers {
  photographers: Entry<any>[];
  notFound?: boolean;
}

export interface IpropsCountries {
  countriesLists: Array<ICountryLists>;
}

export interface ICountryLists {
  Country: string;
  code: string;
}
