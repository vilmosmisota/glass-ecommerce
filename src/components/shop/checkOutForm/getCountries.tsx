import {
  Icontents,
  ICountryLists,
  IpropsContents,
  IpropsCountries,
} from "../../../interfaces/interfaces";

export default function GetCountries({ countriesLists }: IpropsCountries) {
  return (
    <>
      {countriesLists.map((element: ICountryLists) => {
        const { Country, code } = element;
        return (
          <>
            <option value={code} key={code}>
              {Country}
            </option>
          </>
        );
      })}
    </>
  );
}
