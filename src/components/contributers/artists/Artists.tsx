import { IpropsArtists } from "../../../interfaces/interfaces";

export default function Artists({
  artists,
  notFound,
}: IpropsArtists): JSX.Element {
  return (
    <>
      {artists.map((person) => {
        const { name, instagram } = person.fields;

        if (!instagram) return null;

        return (
          <section className="person-wrapper" key={name}>
            <a href={instagram} target="_blank" rel="noopener noreferrer">
              <p>{name}</p>
            </a>
          </section>
        );
      })}
    </>
  );
}
