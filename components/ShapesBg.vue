<script lang="ts" setup>
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CorsorElement from '@/assets/bg/cursor.svg?skipsvgo';

// import ShepesElement from '@/assets/bg/shapes-new.svg?skipsvgo';
// import ShepesElementNew from '@/assets/bg/BLOBS_MAP.svg?skipsvgo';
// import ShepesElementNew from '@/assets/bg/BLOBMAP_1440.svg?skipsvgo';


const ShepesElementXl = defineAsyncComponent(() => import('@/assets/bg/BLOBMAP_1440.svg?skipsvgo'))
const ShepesElementXXl = defineAsyncComponent(() => import('@/assets/bg/BLOBS_MAP.svg?skipsvgo'))







onMounted(() => {

  const { $gsap } = useNuxtApp()

  $gsap.set(`#realFollowCursor`, { scale: 0.8 })
  const pulsarAnim = $gsap.to(`#realFollowCursor`, { duration: 25, ease: "power1.inOut", scale: 1.4, repeat: -1, yoyo: true })

  const rotateanim = $gsap.to(`#realFollowCursor`, { duration: 15, rotation: 360, ease: "power1.inOut", repeat: -1, yoyo: true })

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



  // $gsap.timeline({
  //   scrollTrigger: {
  //     trigger: `.footer-section`,
  //     start: 'top 75%',
  //     end: 'bottom 60%',
  //     toggleActions: 'play none none reverse',
  //     markers: true,
  //   }
  // })


  /////// 
  const onCroseLineToFooter = () => {


  }

  const onCroseLineFromFooter = () => {


  }

  // Получаем div элемент
  // const divElement = document.querySelector('.hidden-row-for-anim');

  // // Добавляем событие mousemove на div элемент
  // divElement.addEventListener('mouseleave', (event) => {
  //   // Получаем координаты курсора относительно div элемента
  //   const x = event.clientX - divElement.offsetLeft;
  //   const y = event.clientY - divElement.offsetTop;

  //   // Определяем высоту и ширину div элемента
  //   const height = divElement.offsetHeight;
  //   const width = divElement.offsetWidth;
  //   console.log("~ x:", x)
  //   console.log("~ y:", y)

  //   // Определяем, пересекает ли курсор мышки div элемент в форме линии
  //   const isIntersecting = y < x && y < width - x && y > x - height && y > -x + height;

  //   // Если курсор мышки пересекает div элемент в форме линии, то выполняем какое-либо действие
  //   if (isIntersecting) {
  //     console.log('Курсор мышки пересекает div элемент в форме линии');
  //   }
  // });





  var tracker = document.getElementById('realFollowCursor');
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

    // // Изменение размера элемента
    // scale += window.scaleDirection;
    // tracker.style.transform = `scale(${scale})`;
    // // Проверяем, нужно ли изменить направление масштабирования
    // if (scale <= 0.8 || scale >= 1.5) {
    //   window.scaleDirection = -window.scaleDirection;
    // }


    // Планируем следующее обновление
    requestAnimationFrame(updatePosition);
  }

  // Обработчик события движения мыши, который обновляет целевые координаты
  document.addEventListener('mousemove', function (e) {
    // Получаем размеры элемента
    var trackerWidth = tracker.offsetWidth * scale;
    var trackerHeight = tracker.offsetHeight * scale;
    // Вычисляем половину размеров для центрирования
    var halfWidth = trackerWidth / 2;
    var halfHeight = trackerHeight / 2;
    // Обновляем целевые координаты
    targetX = e.clientX - halfWidth;
    targetY = e.clientY - halfHeight;
  });

  // Запускаем цикл обновления позиции
  updatePosition();


  // document.addEventListener('mousemove', function (e) {
  //   var tracker = document.getElementById('realFollowCursor');

  //   if (!tracker) return
  //   // Получаем размеры элемента
  //   var trackerWidth = tracker.offsetWidth;
  //   var trackerHeight = tracker.offsetHeight;
  //   // Вычисляем половину размеров для центрирования
  //   var halfWidth = trackerWidth / 2;
  //   var halfHeight = trackerHeight / 2;
  //   // Обновляем позицию элемента, используя вычисленные значения
  //   tracker.style.left = (e.clientX - halfWidth) + 'px';
  //   tracker.style.top = (e.clientY - halfHeight) + 'px';
  // });










})
</script>

<template>
  <div class="color-dodge-wrapper">

    <div
      id="realFollowCursor"
      class="cursor-div-vrapper"
    >
      <CorsorElement class="corsor-elem"></CorsorElement>
      <!--  <CorsorElement class="corsor-elem"></CorsorElement> -->

      <!-- <svg
        class="corsor-elem"
        width="930"
        height="880"
        viewBox="0 0 930 880"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          style="mix-blend-mode:saturation"
          filter="url(#filter0_f_1229_6999)"
        >
          <path
            d="M259.051 625.088C311.258 716.957 357.743 666.229 374.461 629.382C397.012 552.45 458.688 428.056 524.979 545.936C591.27 663.816 660.882 631.306 687.401 600.316C734.437 550.133 778.41 444.363 578.01 422.749C377.61 401.135 347.125 360.253 330.371 309.212C320.952 280.518 331.211 136.036 261.195 241.116C173.676 372.465 193.793 510.253 259.051 625.088Z"
            fill="#33FF00"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_1229_6999"
            x="-0.00585938"
            y="0.702393"
            width="929.84"
            height="878.913"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood
              flood-opacity="0"
              result="BackgroundImageFix"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="100.32"
              result="effect1_foregroundBlur_1229_6999"
            />
          </filter>
        </defs>
      </svg> -->
      <!--     <canvas></canvas> -->
    </div>
    <!-- <div class="container shapes-container"> -->
    <!-- <ShepesElement class="shapes-all"></ShepesElement> -->
    <!-- <ShepesElementNew class="shapes-all"></ShepesElementNew> -->
    <ShepesElementXXl
      v-if="$viewport.match('xxl')"
      class="shapes-all"
    >
    </ShepesElementXXl>
    <ShepesElementXl
      v-else
      class="shapes-all"
    ></ShepesElementXl>

    <!-- </div> -->





    <!-- <ShepesElement class="shapes-all"></ShepesElement> -->




    <!--   <canvas class="shapes-all" id="canvas2"></canvas>
-->
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
  top: 0px;
  left: 0px;
  // height: 100%;
  z-index: 2;

}

.cursor-div-vrapper {
  position: fixed;
  width: calc(556.15px * 2.2);
  height: calc(395.86px * 2.2);
  pointer-events: none;
  z-index: 1;
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
</style>
