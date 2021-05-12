import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart06";
import instruction from "./instruction.md";

const convertData = (input) => {
  const colors = {//色を決める
    男性: "blue",
    女性: "red",
  };
  return input.map(({ gender, x, y }) => {
    return {
      color: colors[gender],
      gender,
      bmi: x / (y / 100) ** 2,//BMIを求める
      weight: x,
      height: y,
    };
  });
};


const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer06"
      convertData={convertData}
      dataUrl="data/size-and-weight.json"
      instruction={instruction}
      title="Lesson 06"
      Chart={Chart}
    />
  );
};

export default Lesson;
