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
            <option
              // style={{ backgroundColor: "#4a546f", color: "#e9e9e7" }}
              value={code}
              key={code}
            >
              {Country}
            </option>
          </>
        );
      })}
    </>
  );
}
