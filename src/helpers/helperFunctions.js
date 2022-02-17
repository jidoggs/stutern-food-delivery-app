import { categoryObject } from "./helperObjects";

export const capitilizeFirstLetter = (text) => {
  const newTextArr = [];
  const textArr = text?.split("-");

  for (let i = 0; i < textArr.length; i++) {
    const textEl = textArr[i];
    const first = textEl?.substring(0, 1).toUpperCase();
    const others = textEl?.substring(1);
    newTextArr.push(first.concat(others));
  }

  return newTextArr.join(" ");
};

export const checkForKeywords = (sentence, typeTrue) => {
  const foundWordsArray = [];
  if (typeTrue !== undefined) {
    return [typeTrue];
  }
  if (typeTrue === undefined) {
    const keywordArray = Object.keys(categoryObject);

    for (let i = 0; i < keywordArray.length; i++) {
      const word = keywordArray[i];

      if (sentence?.toLowerCase().includes(word)) {
        foundWordsArray.push(categoryObject[`${word}`]);
      }
    }
    if (foundWordsArray.length === 0) {
      return ["best-foods"];
    }
    return foundWordsArray;
  }
};
