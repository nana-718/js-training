import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart05";
import instruction from "./instruction.md";

const convertData = (input) => {
  const genders = Array.from(new Set(input.map(({ gender }) => gender)));//性別の配列を作る
  const min = Math.round(Math.min(...input.map(({ y }) => y)));//身長の最小値を求める
  const max = Math.round(Math.max(...input.map(({ y }) => y)));//身長の最大値を求める
  const bins = Array.from({ length: max - min + 1 }).map((_, i) => {//必要な目盛りは最小値の身長から最大値の身長があればよい=>最大値-最小値+1
    const obj = {
      bin: (min + i).toString(),
    };
    for (const gender of genders) {
      obj[gender] = 0;
    }
    return obj;
  });
  for (const { y, gender } of input) {
    const i = Math.round(y) - min;
    bins[i][gender] += 1;
  }
  return bins;
};


const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer05"
      convertData={convertData}
      dataUrl="data/size-and-weight.json"
      instruction={instruction}
      title="Lesson 05"
      Chart={Chart}
    />
  );
};

export default Lesson;
