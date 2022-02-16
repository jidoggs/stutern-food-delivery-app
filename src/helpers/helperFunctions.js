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
