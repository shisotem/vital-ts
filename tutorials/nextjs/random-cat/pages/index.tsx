import { NextPage } from "next";

const IndexPage: NextPage = () => {
  return <div>ねこ画像予定地</div>;
};
export default IndexPage;

type Image = {
  url: string;
};
const fetchImage = async (): Promise<Image> => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const images = await res.json();
  console.log(images);
  return images[0];
};

fetchImage().then((image) => {
  console.log(image.alt); // => compile error
});
