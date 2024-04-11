<script lang="ts" setup>
import { ScrollTrigger } from "gsap/ScrollTrigger";
onMounted(() => {

  const { $gsap } = useNuxtApp()

  $gsap.set(`#realFollowCursor`, { scale: 0.8 })
  const pulsarAnim = $gsap.to(`#realFollowCursor`, { duration: 2, scale: 1.4, repeat: -1, yoyo: true })


  ScrollTrigger.create({
    trigger: `.footer-section`,
    start: 'top 140%',
    end: 'bottom 60%',
    markers: true,
    onEnter: (self) => {
      pulsarAnim.pause()
      $gsap.to(`#realFollowCursor`, { duration: 2, ease: "power4.in", scale: 0, opacity: 0 })
    },
    onLeaveBack: (self) => {
      $gsap.to(`#realFollowCursor`, { duration: 2, scale: 0.8, opacity: 1 })
      setTimeout(() => {
        $gsap.set(`#realFollowCursor`, { scale: 0.8 })
        pulsarAnim.play(0)
      }, 2000)

    },
    // onToggle: (self) => console.log("toggled, isActive:", self.isActive),
    // onUpdate: (self) => {
    //   console.log(
    //     "progress:",
    //     self.progress.toFixed(3),
    //     "direction:",
    //     self.direction,
    //     "velocity",
    //     self.getVelocity()
    //   );
    // },
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
  window.speed = 0.05; // Скорость перемещения элемента (от 0 до 1)


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
      <img
        class="corsor-elem"
        src="/bg/cursor.svg"
      >
      <!-- <svg
        class="corsor-elem"
        viewBox="0 0 930 880"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          style="mix-blend-mode:soft-light"
          filter="url(#filter0_f_1229_6999)"
        >
          <path
            d="M259.051 625.088C311.258 716.957 357.743 666.229 374.461 629.382C397.012 552.45 458.688 428.056 524.979 545.936C591.27 663.816 660.882 631.306 687.401 600.316C734.437 550.133 778.41 444.363 578.01 422.749C377.61 401.135 347.125 360.253 330.371 309.212C320.952 280.518 331.211 136.036 261.195 241.116C173.676 372.465 193.793 510.253 259.051 625.088Z"
            fill="#FFE0E0"
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
              stdDeviation="70.32"
              result="effect1_foregroundBlur_1229_6999"
            />
          </filter>
        </defs>
      </svg> -->


      <!-- <svg
        class="corsor-elem"
        viewBox="0 0 620 587"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g style="mix-blend-mode:soft-light">
          <path
            d="M172.615 416.859C207.396 478.062 238.365 444.267 249.502 419.719C264.526 368.467 305.614 285.595 349.778 364.127C393.941 442.66 440.317 421.001 457.984 400.356C489.32 366.923 518.614 296.459 385.107 282.06C251.6 267.661 231.291 240.424 220.129 206.421C213.854 187.305 220.689 91.0502 174.044 161.055C115.739 248.56 129.14 340.355 172.615 416.859Z"
            fill="#FFE0E0"
          />
        </g>

      </svg> -->
    </div>
    <!-- <img
      class="shapes-all-noth"
      src="/bg/Northern.svg"
    > -->
    <img
      class="shapes-all"
      src="/bg/shapes-new.svg"
    >

    <!-- <img
      class="blob-6"
      src="/bg/blob6.svg"
    >
    <img
      class="blob-5"
      src="/bg/blob5.svg"
    >

    <img
      class="blob-4"
      src="/bg/blob4.svg"
    >

    <img
      class="blob-3"
      src="/bg/blob3.svg"
    >


    <img
      class="blob-1"
      src="/bg/blob1.svg"
    > -->


  </div>

</template>

<style scoped lang="scss">
.shapes-all {
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
}

.cursor-div-vrapper {
  position: fixed;
  width: calc(556.15px * 2.2);
  height: calc(395.86px* 2.2);
  pointer-events: none;
  z-index: 2;
  /* border: 24px solid white; */
}


.shapes-all-noth {
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 2;
}

.color-dodge-wrapper {
  pointer-events: none;
  overflow: hidden;

  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  mix-blend-mode: color-dodge;
}

.blob-6 {
  /* blob6 */

  position: absolute;
  width: calc(358.93px* 1.9);

  height: calc(285.9px*1.9);

  left: 562px;
  top: 100px;

  /* background: #BD00FF;
  mix-blend-mode: hard-light;
  filter: blur(101.32px); */


}

.blob-5 {
  position: absolute;


  left: 330px;
  top: 290px;

  width: calc(616.93px* 1.9);
  height: calc(559.89px*1.9);





}

.blob-4 {
  position: absolute;
  left: 970px;
  top: 590px;

  width: calc(520px* 1.7);
  height: calc(414px*1.7);

}


.blob-3 {
  position: absolute;
  left: 970px;
  top: 0px;

  width: calc(890px* 1.9);
  height: calc(811px*1.9);

}

.blob-1 {
  position: absolute;
  left: -100px;
  top: 600px;

  width: calc(740px* 1.5);
  height: calc(670px*1.5);

}






.corsor-elem {
  /* cursor */
  pointer-events: none;

  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;

  /* cursor */


  /* transform: rotate(-146.6deg); */


  /* cursor */

  position: absolute;

  /* left: 791.3px;
  top: 810.64px; */

  /* background: #FFE0E0; */
  /* filter: blur(101.32px); */




  /* background: #FFE0E0; */
  /* mix-blend-mode: soft-light; */
  /* blur 1 */
  /* filter: blur(0px); */
  /* transform: matrix(-0.88, -0.48, 0.62, -0.78, 0, 0); */




  /* background: #FFE0E0; */
  /* mix-blend-mode: soft-light; */

}



.blob-2 {
  /* blob2 */

  position: absolute;
  width: 674px;
  height: 384px;
  left: 144.97px;
  top: 0px;

  /* background: #BD00FF; */
  /* mix-blend-mode: hard-light; */

  mix-blend-mode: soft-light;

  /* blur 1 */
  filter: blur(67.5px);


}
</style>