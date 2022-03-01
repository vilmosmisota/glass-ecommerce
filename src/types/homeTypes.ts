import { CleanedImage } from "./commonTypes";

export type HomeHeader = {
  statementOne: string;
  statementTwo: string;
  statementThree: string;
  cover: CleanedImage;
};

export type HomeMain = {
  bodyStatement1: string;
  bodyStatement2: string;
  bodyStatement3: string;
  quote: string;
  imgOne: CleanedImage;
  imgTwo: CleanedImage;
  imgThree: CleanedImage;
};

export type HomeContent = {
  notFound?: boolean;
  isError?: boolean;
  data:
    | {
        header: HomeHeader;
        main: HomeMain;
      }
    | undefined;
};

export type HomeProps = {
  notFound?: boolean;
  props: {
    data:
      | {
          header: HomeHeader;
          main: HomeMain;
        }
      | undefined;
  };
};
