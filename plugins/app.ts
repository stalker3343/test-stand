import VueScrollTo from "vue-scrollto";
import type { ObjectDirective } from "vue";
// import anime from "animejs";

const anime = () => {

}

interface ScrollAnimateBindingOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number;
}

const scrollAnimate: (
  direction?: "left" | "right" | "bottom"
) => ObjectDirective<HTMLElement, ScrollAnimateBindingOptions> = (
  direction = "bottom"
) => ({
  getSSRProps() {
    const directionToStyle = {
      left: "opacity: 0; translateX(-100px)",
      right: "opacity: 0; translateX(100px)",
      bottom: "opacity: 0; translateY(100px)",
    };

    return {
      style: "opacity: 0; translateX(100px)",
    };
  },
  beforeMount(el, binding) {
    // Устанавливаем изначальные стили для скрытия элементов
    const directionToStyle = {
      left: "translateX(-100px)",
      right: "translateX(100px)",
      bottom: "translateY(100px)",
    };
    el.style.opacity = "0";
    el.style.transform = directionToStyle[direction];
  },
  mounted(el, binding) {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // можно настраивать
      ...binding.value, // позволяет переопределять опции через значение директивы
    };

    const directionToAnimConfig = {
      left: {
        translateX: [-100, 0],
      },
      right: {
        translateX: [100, 0],
      },
      bottom: {
        translateY: [100, 0],
      },
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          anime({
            targets: entry.target,
            opacity: [0, 1],

            easing: "easeOutExpo",
            duration: 2000,
            ...directionToAnimConfig[direction],
            // complete: () => observer.unobserve(entry.target)
          });
        }
      });
    }, options);

    observer.observe(el);
  },
});
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("scroll-reveal", scrollAnimate());
  nuxtApp.vueApp.directive("scroll-reveal-left", scrollAnimate("left"));
  nuxtApp.vueApp.directive("scroll-reveal-right", scrollAnimate("right"));

  nuxtApp.vueApp.directive("scroll-to", {
    mounted(el, binding) {
      // const { element, duration } = binding.value;
      const element = binding.value;
      el.addEventListener("click", (e: Event) => {
        e.preventDefault();
        VueScrollTo.scrollTo(element, { easing: [0.12, 0, 0.39, 0] });
      });
    },
    getSSRProps() {
      return {};
    },
  });

  return {
    provide: {
      $scrollTo: VueScrollTo.scrollTo,
    },
  };
});
