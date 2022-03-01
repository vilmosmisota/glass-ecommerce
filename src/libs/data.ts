import { CleanedImage } from "../types/commonTypes";
import { HomeContent } from "../types/homeTypes";
import { client } from "./client";
import { HomePage, Image } from "./models";

export const handleAsync = async <T>(
  promise: Promise<T>,
  defaultError: any = "rejected"
): Promise<T[] | [T, any]> => {
  try {
    const data = await promise;
    return [data, undefined];
  } catch (error) {
    return await Promise.resolve([undefined, error || defaultError]);
  }
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

  function cleaningImgData(img: Image): CleanedImage {
    const title = img.fields.title;
    const url = img.fields.file.url;
    const { width, height } = img.fields.file.details.image;
    return {
      url,
      title,
      width,
      height,
    };
  }

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
