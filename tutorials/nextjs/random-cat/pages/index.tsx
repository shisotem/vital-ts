import { NextPage } from "next";
import { useEffect, useState } from "react";

const IndexPage: NextPage = () => {
  // 状態を定義
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(true);
  // マウント時に画像を読み込む宣言
  useEffect(() => {
    fetchImage().then((newImage) => {
      setImageUrl(newImage.url); // 画像URLの状態を更新
      setLoading(false); // ローディング状態を更新
    });
  }, []);
  // ローディング中でなければ画像を表示
  return <div>{loading || <img src={imageUrl} />}</div>;
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
