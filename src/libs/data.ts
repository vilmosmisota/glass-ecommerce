import { CleanedImage } from "../types/commonTypes";
import { HomeContent } from "../types/homeTypes";
import { cleaningImgData } from "../utils/api-helper";
import { handleAsync } from "../utils/handleAsync";
import { client } from "./client";
import { HomePage, Image, LoaderImages } from "./models";

export const getLoaderImages = async () => {
  const [data, error] = await handleAsync(
    client.getEntries<LoaderImages>({
      content_type: "loadingImages",
    })
  );

  if (error) {
    console.warn(error);
    return {
      isError: true,
      data: undefined,
    };
  }

  const images = data.items[0].fields;
  const cleanedImages = images.loadingImages.map((img) => {
    const result = cleaningImgData(img);
    return result;
  });

  return {
    isError: false,
    data: cleanedImages,
  };
};

export const getHomeData = async (): Promise<HomeContent> => {
  const [data, error] = await handleAsync(
    client.getEntries<HomePage>({
      content_type: "homePage",
    })
  );

  if (error) {
    console.warn(error);
    return {
      isError: true,
      data: undefined,
    };
  }

  const {
    statementOne,
    statementTwo,
    statementThree,
    bookImg,
    bodyStatement1,
    bodyStatement2,
    bodyStatement3,
    quote,
    bodyImg1,
    bodyImg2,
    bodyImg3,
  } = data.items[0].fields;

  const cover = cleaningImgData(bookImg);
  const imgOne = cleaningImgData(bodyImg1);
  const imgTwo = cleaningImgData(bodyImg2);
  const imgThree = cleaningImgData(bodyImg3);

  const header = {
    statementOne,
    statementTwo,
    statementThree,
    cover,
  };

  const main = {
    bodyStatement1,
    bodyStatement2,
    bodyStatement3,
    quote,
    imgOne,
    imgTwo,
    imgThree,
  };

  return {
    isError: false,
    data: {
      header,
      main,
    },
  };
};
