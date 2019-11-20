<script>
import { TweenMax, TimelineMax } from "gsap";
import { randomBetween } from "../../utils/helper";
import _ from "lodash";

export default {
  functional: true,
  props: {
    isNext: {
      default: true
    },
    delay: {
      required: false,
      default: 0.5
    },
    title: {
      required: true,
      default: "Agent of SHIELD"
    }
  },
  render(h, context) {
    let tl = new TimelineMax();
    let isNext = context.props.isNext;

    // Split title into individual character and put it in a span tag
    const createSpanTags = el => {
      _.map(context.props.title.split(""), item => {
        var dateSpan = document.createElement("span");
        dateSpan.innerHTML = item;
        el.appendChild(dateSpan);
      });
      return el;
    };

    var data = {
      props: {
        appear: true,
        name: "split-text",
        mode: "out-in"
      },
      on: {
        beforeEnter(el) {
          // try getting element using classname or vue $ref
          let li = el;
          // make sure it is empty
          li.innerHTML = "";
          li = createSpanTags(li);

          // if isNext == true, set letters below 0, i.e. in positive top value
          // with rotation angle between -45 and 45
          // and 0 opacity
          if (isNext) {
            tl.set(li.children, {
              opacity: 0,
              top: i => {
                return randomBetween(50, 70);
              },
              rotation: i => {
                return randomBetween(-45, 45);
              }
            });
          } else {
            // else, set letters above 0, i.e. in negative top value
            // with rotation angle between -45 and 45
            // and 0 opacity
            tl.set(li.children, {
              opacity: 0,
              top: i => {
                return randomBetween(-50, -70);
              },
              rotation: i => {
                return randomBetween(-45, 45);
              }
            });
          }
        },
        enter(el, done) {
          tl.to(
            el.children,
            1,
            {
              delay: context.props.delay,
              opacity: 1,
              top: "0",
              rotation: 0,
              ease: Circ.easeOut
            },
            1
          );
        },
        leave(el, done) {
          // if isNext == true, send letters above 0, i.e. in negative top value
          // with rotation angle between -45 and 45
          // and 0 opacity
          if (isNext) {
            tl.to(
              el.children,
              1,
              {
                opacity: 0,
                top: i => {
                  return randomBetween(-50, -70);
                },
                rotation: i => {
                  return randomBetween(-45, 45);
                },
                ease: Circ.easeOut,
                onComplete: done
              },
              1
            );
          } else {
            // else, send letters below 0, i.e. positive top value
            // with rotation angle between -45 and 45
            // and 0 opacity
            tl.to(
              el.children,
              1,
              {
                opacity: 0,
                top: i => {
                  return randomBetween(50, 70);
                },
                rotation: i => {
                  return randomBetween(-45, 45);
                },
                ease: Circ.easeOut,
                onComplete: done
              },
              1
            );
          }
        }
      }
    };
    return h("transition", data, context.children);
  }
};
</script>
