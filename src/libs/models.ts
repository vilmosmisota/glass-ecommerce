export interface HomePage {
  statementOne: string;
  statementTwo: string;
  statementThree: string;
  bodyStatement1: string;
  bodyStatement2: string;
  bodyStatement3: string;
  quote: string;
  bookImg: Image;
  bodyImg1: Image;
  bodyImg2: Image;
  bodyImg3: Image;
}

export interface Image {
  fields: {
    title: string;
    file: {
      url: string;
      details: {
        image: {
          width: number;
          height: number;
        };
      };
    };
  };
}

export interface LoaderImages {
  loadingImages: Image[];
}
