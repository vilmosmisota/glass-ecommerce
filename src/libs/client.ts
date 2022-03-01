import { createClient } from "contentful";

const space = process.env.CONTENTFUL_SPACE_ID as string;
const accessToken = process.env.CONTENTFUL_ACCESS_KEY as string;

export const client = createClient({ space, accessToken });
