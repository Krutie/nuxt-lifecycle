<script>
import { TweenMax, TimelineMax } from "gsap";

export default {
  functional: true,
  render(h, context) {
    const tl = new TimelineMax();
    let title = context.props.title;

    var data = {
      props: {
        name: "expand-button",
        mode: "out-in"
      },
      on: {
        beforeEnter(el) {
          tl.set(el, {
            opacity: 0,
            width: 0
          });
          tl.set(el.children, {
            opacity: 0
          });
        },
        enter(el, done) {
          tl.to(
            el,
            1,
            {
              delay: 0.5,
              opacity: 1,
              width: 250,
              ease: Back.easeOut.config(2)
            },
            0.5
          );
          tl.to(
            el.children,
            0.5,
            {
              delay: 1,
              top: 10,
              opacity: 1
            },
            0.5
          );
        },
        leave(el, done) {
          tl.to(
            el,
            0.3,
            {
              y: 100,
              opacity: 0,
              onComplete: done
            },
            0
          );
        }
      }
    };
    return h("transition", data, context.children);
  }
};
</script>
