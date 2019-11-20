import { TimelineMax, Power2 } from "gsap";

export const openTimeline = () => {
  let tl = new TimelineMax();
  let duration = 1;
  tl.to(
    ".outer-element",
    duration,
    {
      yPercent: 0,
      ease: Power2.easeOut
    },
    0
  );
  tl.to(
    ".title",
    duration,
    {
      top: "-7%",
      ease: Power2.easeOut
    },
    0
  );
};
export const closeTimeline = (pointsMap, fn) => {
  let el = document.getElementsByClassName("outer-element");

  let yPositions = pointsMap[el.length];

  let tl = new TimelineMax();
  let duration = 1;

  tl.to(
    ".outer-element",
    duration,
    {
      yPercent: i => {
        return yPositions[i] * 6;
      },
      ease: Power2.easeOut
    },
    0
  );
  tl.to(
    ".title",
    duration,
    {
      delay: 0.5,
      top: "25%",
      ease: Power2.easeOut
    },
    0
  );
  tl.eventCallback("onComplete", fn);
};
