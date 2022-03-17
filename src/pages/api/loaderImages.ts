import { NextApiRequest, NextApiResponse } from "next";
import { getLoaderImages } from "../../libs/data";
import { CleanedImage } from "../../types/commonTypes";

export default async function loaderImages(
  req: NextApiRequest,
  res: NextApiResponse<CleanedImage[] | undefined>
) {
  const { data, isError } = await getLoaderImages();

  function shuffleArray(
    arr: CleanedImage[] | undefined
  ): CleanedImage[] | undefined {
    if (typeof arr === "undefined") return;

    for (let i = arr.length - 1; i > 0; i--) {
      let newPos = Math.floor(Math.random() * (i + 1));
      let temp = arr[i];
      arr[i] = arr[newPos];
      arr[newPos] = temp;
    }

    return arr;
  }

  const shuffledData = shuffleArray(data)?.slice(0, 6);

  if (isError) {
    res.status(500).json(shuffledData);
    return;
  }
  res.status(200).json(shuffledData);
}
