<script lang="ts" setup>
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CorsorElement from '@/assets/bg/cursor.svg?skipsvgo';

import CorsorSmallElement from '@/assets/bg/cursorSmalBlure.svg?skipsvgo';




// import ShepesElement from '@/assets/bg/shapes-new.svg?skipsvgo';
// import ShepesElementNew from '@/assets/bg/BLOBS_MAP.svg?skipsvgo';
// import ShepesElementNew from '@/assets/bg/BLOBMAP_1440.svg?skipsvgo';

const ShepesElementSm = defineAsyncComponent(() => import('@/assets/bg/BLOBS_360.svg?skipsvgo'))
const ShepesElementMd = defineAsyncComponent(() => import('@/assets/bg/BLOBS_640.svg?skipsvgo'))
const ShepesElementLg = defineAsyncComponent(() => import('@/assets/bg/BLOBS_1024.svg?skipsvgo'))
const ShepesElementXl = defineAsyncComponent(() => import('@/assets/bg/BLOBMAP_1440.svg?skipsvgo'))
const ShepesElementXXl = defineAsyncComponent(() => import('@/assets/bg/BLOBS_MAP.svg?skipsvgo'))


let mouseListener: (e: MouseEvent) => void = () => { };
let requestAnimationFrameListener: number | null = null;


const { $viewport } = useNuxtApp()

console.log($viewport.isGreaterThan('lg'), 'outside mounted mounted', window && window.innerWidth);


watch($viewport.breakpoint, (newBreakpoint, oldBreakpoint) => {
  console.log('Breakpoint updated:', oldBreakpoint, '->', newBreakpoint)
  if (!$viewport.isGreaterThan('lg')) {
    console.log('remove all listeners');

    document.removeEventListener("mousemove", mouseListener)

    if (requestAnimationFrameListener) {
      window.cancelAnimationFrame(requestAnimationFrameListener)
    }
    var tracker = document.getElementById('realFollowCursor');
    var tracker2 = document.getElementById('realFollowCursor2');
    tracker && (tracker.style.left = '50%')
    tracker && (tracker.style.top = '50%')

    tracker2 && (tracker2.style.left = '50%')
    tracker2 && (tracker2.style.top = '50%')

  }
})




onMounted(() => {

  const { $gsap } = useNuxtApp()

  $gsap.set(`#realFollowCursor`, { scale: 0.8 })
  $gsap.set(`#realFollowCursor2`, { scale: 1.4 })

  const pulsarAnim = $gsap.to([`#realFollowCursor`], { duration: 25, ease: "power1.inOut", scale: 1.3, repeat: -1, yoyo: true })
  const pulsarAnim2 = $gsap.to(['#realFollowCursor2'], { duration: 25, ease: "power1.inOut", scale: 2, repeat: -1, yoyo: true })

  const rotateanim = $gsap.to(`#realFollowCursor`, { duration: 30, rotation: 360, ease: "power1.inOut", repeat: -1, yoyo: true })
  const rotateanim2 = $gsap.to(`#realFollowCursor2`, { duration: 30, rotation: -360, ease: "power1.inOut", repeat: -1, yoyo: true })

  ScrollTrigger.create({
    trigger: `.footer-section`,
    start: 'top 140%',
    end: 'bottom 60%',
    onEnter: (self) => {
      pulsarAnim.pause()
      rotateanim.pause()
      $gsap.to(`#realFollowCursor`, { duration: 2, ease: "power4.in", scale: 0, opacity: 0 })
    },
    onLeaveBack: (self) => {
      $gsap.to(`#realFollowCursor`, { duration: 2, scale: 0.8, opacity: 1 })
      setTimeout(() => {
        $gsap.set(`#realFollowCursor`, { scale: 0.8 })
        $gsap.set(`#realFollowCursor`, { rotation: 0 })

        pulsarAnim.play(0)
        rotateanim.play(0)

      }, 2000)

    },
  });
  console.log($viewport.isGreaterThan('lg'), 'in mounted', window.innerWidth);

  if (!$viewport.isGreaterThan('lg')) {
    return
  }





  var tracker = document.getElementById('realFollowCursor');
  var tracker2 = document.getElementById('realFollowCursor2');

  var targetX = 0, targetY = 0; // Целевые координаты, куда должен двигаться элемент
  var currentX = 0, currentY = 0; // Текущие координаты элемента
  window.speed = 0.01; // Скорость перемещения элемента (от 0 до 1)


  // Начальные и конечные размеры элемента
  var scale = 1; // Текущий масштаб
  window.scaleDirection = -0.009; // Направление изменения масштаба


  // Функция для обновления позиции элемента
  function updatePosition() {
    // Используем линейную интерполяцию для плавного движения элемента к цели
    currentX += (targetX - currentX) * window.speed;
    currentY += (targetY - currentY) * window.speed;


    // Обновляем позицию элемента с новыми координатами
    tracker.style.left = currentX + 'px';
    tracker.style.top = currentY + 'px';

    tracker2.style.left = currentX + 'px';
    tracker2.style.top = currentY + 'px';
    requestAnimationFrameListener = requestAnimationFrame(updatePosition);
  }

  mouseListener = function (e: MouseEvent) {
    // Получаем размеры элемента
    var trackerWidth = tracker.offsetWidth * scale;
    var trackerHeight = tracker.offsetHeight * scale;
    // Вычисляем половину размеров для центрирования
    var halfWidth = trackerWidth / 2;
    var halfHeight = trackerHeight / 2;
    // Обновляем целевые координаты
    targetX = e.clientX - halfWidth;
    targetY = e.clientY - halfHeight;
  }
  // Обработчик события движения мыши, который обновляет целевые координаты
  document.addEventListener('mousemove', mouseListener);

  // Запускаем цикл обновления позиции
  updatePosition()










})
</script>

<template>
  <div class="color-dodge-wrapper">

    <div
      id="realFollowCursor"
      class="cursor-div-vrapper cursor-div-vrapper-1"
    >
      <CorsorSmallElement class="corsor-elem"></CorsorSmallElement>
    </div>

    <div
      id="realFollowCursor2"
      class="cursor-div-vrapper cursor-div-vrapper-2"
    >
      <CorsorElement class="corsor-elem"></CorsorElement>
    </div>



    <ShepesElementSm
      v-if="$viewport.match('sm')"
      class="shapes-all"
    ></ShepesElementSm>
    <ShepesElementMd
      v-else-if="$viewport.match('md')"
      class="shapes-all"
    ></ShepesElementMd>
    <ShepesElementLg
      v-else-if="$viewport.match('lg')"
      class="shapes-all"
    ></ShepesElementLg>
    <ShepesElementXl
      v-else-if="$viewport.match('xl')"
      class="shapes-all"
    ></ShepesElementXl>
    <ShepesElementXXl
      v-else="$viewport.match('xxl')"
      class="shapes-all"
    ></ShepesElementXXl>

  </div>

</template>

<style lang="scss">
.shapes-container {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
}

.shapes-all {
  width: 100%;
  position: absolute;
  left: 0px;
  top: 0px;

  // height: 100%;
  z-index: 2;

  @media (min-width: $md) {}

  @media (min-width: $lg) {}

  @media (min-width: $xl) {
    top: 0px;

  }

  @media (min-width: $xxl) {}

  @media (min-width: 2048px) {
    top: -10px;

  }

}

.cursor-div-vrapper {

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  // transform: translateY(-50%);

  pointer-events: none;
  z-index: 1;
  width: calc(656.15px * 1);
  height: calc(495.86px * 1);

  @media (min-width: $md) {}

  @media (min-width: $lg) {}

  @media (min-width: $xl) {
    transform: initial;
    top: initial;
    left: initial;
    width: calc(556.15px * 2.2);
    height: calc(395.86px * 2.2);
  }

  @media (min-width: $xxl) {}

  /*   transform: translate3d(0, 0, 0);
 */
  /* border: 24px solid white; */
}

.color-dodge-wrapper {
  pointer-events: none;
  overflow: hidden;

  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  /*     mix-blend-mode: color-dodge;


  mix-blend-mode: lighten; !!!!
   mix-blend-mode: difference;
  mix-blend-mode: hue; 
    mix-blend-mode: plus-darker;
 
  
  */

  mix-blend-mode: color-dodge;
  /*   transform: translate3d(0, 0, 0); */
  // display: none;

  @media (min-width: $md) {}

  @media (min-width: $lg) {
    display: block;
  }

  @media (min-width: $xl) {}

  @media (min-width: $xxl) {}
}

.corsor-elem {
  pointer-events: none;
  // transform: translate3d(0, 0, 0);

  /*   filter: blur(101.32px); */
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}

.cursor-div-vrapper-1 {
  opacity: .5;
}

.cursor-div-vrapper-2 {
  opacity: .2;

}
</style>
