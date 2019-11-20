// find random numbers for each letter of the title text
export const randomBetween = (min, max) => {
  if (min < 0) {
    return min + Math.random() * (Math.abs(min) + max);
  } else {
    return min + Math.random() * max;
  }
};

export const ObjectToArray = pages => {
  let k = [];
  let m = [];
  pages.forEach(i => {
    i.points.forEach(p => {
      p.color = i.color;
      p.name = i.title;
    });
    k.push(i.points);
  });
  k.forEach(item => {
    Object.keys(item).map(i => m.push(item[i]));
  });
  return m;
};
