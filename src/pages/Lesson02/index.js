import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart02";
import instruction from "./instruction.md";

const convertData = (input) => {
  input.sort((item1, item2) => item2.count - item1.count);
  return input.slice(0, 20);
};
/*
最初にデータをソートする
=>上位20件のみなので、ソートした0から20番目の値を切り抜く( input.slice(0, 20);)
*/

const Lesson = () => {
  return (
    <LessonPage
      dataUrl="data/qiita-tags.json"
      answerUrl="/answer02"
      convertData={convertData}
      instruction={instruction}
      title="Lesson 02"
      Chart={Chart}
    />
  );
};

export default Lesson;
