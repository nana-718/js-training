import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart04";
import instruction from "./instruction.md";

const convertData = (input) => {//最初に配列に格納する
  const species = Array.from(new Set(input.map(({ species }) => species)));//重複なく数えるためにSetを使う
  return species.map((species) => {//配列speciesに対してmapメッソドを使う
    return {
      id: species,
      data: input
        .filter((item) => item.species === species)//filter メソッドを使って名前が同じもののみ取り出す
        .map(({ sepalLength: x, petalWidth: y }) => ({ x, y })), //x、yをそれぞれ変換
    };
  });
};

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer04"
      dataUrl="data/iris.json"
      convertData={convertData}
      instruction={instruction}
      title="Lesson 04"
      Chart={Chart}
    />
  );
};

export default Lesson;
