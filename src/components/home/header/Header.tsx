// import { IpropsContents } from "../../../interfaces/interfaces";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import logo from "../../../assets/images/VO1.svg";

// export default function Header({
//   contents,
//   notFound,
// }: IpropsContents): JSX.Element {
//   const { statementOne, statementTwo, statementThree, bookImg } =
//     contents[0].fields;

//   return (
//     <header className="header-container">
//       <section className="statement-container">
//         <article className="statement1">
//           <h1>{statementOne}</h1>
//         </article>
//         <article className="statement2">
//           <h1>{statementTwo}</h1>
//         </article>
//         <article className="statement3">
//           <h1>{statementThree}</h1>
//         </article>
//       </section>
//       <section className="image-section">
//         <div className="book-title-container">
//           <h1>North Sea</h1>
//           <figure className="logo-title">
//             <Image src={logo} layout="responsive" alt="logo" className="logo" />
//           </figure>
//         </div>
//         <div className="header-img-container">
//           <Image
//             src={`https:${bookImg.fields.file.url}`}
//             height={bookImg.fields.file.details.image.height}
//             width={bookImg.fields.file.details.image.width}
//             alt="book cover"
//             className="header-img"
//             layout="responsive"
//           />
//         </div>

//         <div className="button-wrapper">
//           <Link href="/shop" passHref>
//             <motion.button whileTap={{ scale: 0.9 }}>Shop</motion.button>
//           </Link>
//         </div>
//       </section>
//     </header>
//   );
// }
