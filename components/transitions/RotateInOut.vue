<script>
import { TweenMax, TimelineMax } from "gsap";

export default {
  functional: true,
  props: {
    isNext: {
      default: true
    }
  },
  render(h, context) {
    const tl = new TimelineMax();
    let isNext = context.props.isNext;
    let pointsMap = process.env.pointsMap;

    var data = {
      props: {
        appear: true,
        name: "rotate-in-out",
        mode: "out-in"
      },
      on: {
        beforeEnter(el) {
          let yPositions = pointsMap[el.children.length];

          Array.from(el.children).map((item, index) => {
            // so it pops up from the center when appearing on a screen
            tl.set(item, {
              opacity: 0,
              yPercent: yPositions[index] * 6,
              transformOrigin: "6.5rem 6.5rem",
              scale: 0.5
            });
          });
        },
        enter(el, done) {
          TweenMax.staggerTo(
            el.children,
            1,
            {
              delay: 3,
              opacity: 1,
              scale: 1,
              ease: Back.easeOut.config(2)
            },
            0.5
          );
        },
        leave(el, done) {
          // if isNext == true
          // Rotate all circles to the right in 50 degree angle
          if (isNext) {
            tl.to(
              el,
              2.5,
              {
                rotation: 50,
                ease: Circ.easeIn,
                onComplete: done
              },
              1
            );
          } else {
            // else rotate all circles to the left in -50 degree angle
            tl.to(
              el,
              2.5,
              {
                rotation: -50,
                ease: Circ.easeIn,
                onComplete: done
              },
              1
            );
          }
        }
      }
    };
    return h("transition-group", data, context.children);
  }
};
</script>
