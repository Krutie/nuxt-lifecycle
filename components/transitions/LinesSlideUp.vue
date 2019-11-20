<script>
import { TweenMax, TimelineMax } from "gsap";

export default {
  functional: true,
  render(h, context) {
    let tl = new TimelineMax();

    var data = {
      props: {
        appear: true,
        name: "slide-in-up",
        mode: "out-in"
      },
      on: {
        beforeEnter(el) {
          tl.set(el.children, {
            opacity: 0,
            y: "50px"
          });
        },
        enter(el, done) {
          tl.staggerTo(
            el.children,
            1,
            {
              delay: 3,
              opacity: 1,
              y: "0px",
              ease: Circ.easeOut,
              onComplete: done
            },
            0.3
          );
        },
        leave(el, done) {
          tl.staggerTo(
            el.children,
            2,
            {
              delay: 1,
              opacity: 0,
              y: "-35px",
              ease: Circ.easeOut,
              onComplete: done
            },
            0.3
          );
        }
      }
    };
    return h("transition", data, context.children);
  }
};
</script>
