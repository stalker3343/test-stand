<script
  lang="ts"
  setup
>


onMounted(() => {

  var followDiv = document.getElementById('followCursor');
  console.log("🚀 ~ followDiv:", followDiv)
  if (!followDiv) return
  var isFollowing = false;

  function toggleFollowing() {
    if (!followDiv) return

    isFollowing = !isFollowing;
    if (isFollowing) {
      // followDiv.style.display = 'block';
    } else {
      // followDiv.style.display = 'none';
    }
  }

  document.addEventListener('mousemove', function (e) {
    if (!followDiv) return

    if (isFollowing) {
      var leftPosition = e.clientX - (followDiv.offsetWidth / 2);
      var topPosition = e.clientY - (followDiv.offsetHeight / 2);
      followDiv.style.left = leftPosition + 'px';
      followDiv.style.top = topPosition + 'px';
    }
  });

  document.addEventListener('keydown', function (e) {
    console.log(e.code);
    if (e.code === 'KeyR') { // проверяем нажата ли клавиша пробел
      toggleFollowing();
    }
  });







})


</script>

<template>
  <div class="wrapper-block">
    <div class="inner-wrapper">
      <div
        id="followCursor"
        class="cursor-div-vrapper"
      >


        <svg
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
          <defs>
            <filter
              id="filter0_f_1170_10163"
              x="0.03125"
              y="0.890625"
              width="619.463"
              height="585.535"
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
                stdDeviation="67.5"
                result="effect1_foregroundBlur_1170_10163"
              />
            </filter>
          </defs>
        </svg>
      </div>




    </div>
  </div>


</template>

<style
  scoped
  lang="scss"
>
.blob-1 {
  /* blob1 */

  position: absolute;
  width: 425px;
  height: 252px;
  left: 138px;
  top: 226px;

  /* background: #002545; */
  /* blur 1 */
  filter: blur(67.5px);



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

/* Rectangle 7723 */
.wrapper-block {


  position: relative;
  width: 836px;
  height: 883px;

  background: #005FEE;




}

/* Group 5761 */
.inner-wrapper {


  position: absolute;
  width: 823.2px;
  height: 870.82px;
  left: 2.8px;
  top: -0.82px;

  mix-blend-mode: color-dodge;

}

.cursor-div-vrapper {
  position: absolute;
  width: 639.15px;
  height: 423.57px;
  left: 37px;
  top: 110px;
}

.corsor-elem {
  /* cursor */
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;


  /* background: #FFE0E0; */
  mix-blend-mode: soft-light;
  /* blur 1 */
  filter: blur(67.5px);
  /* transform: matrix(-0.88, -0.48, 0.62, -0.78, 0, 0); */




  /* background: #FFE0E0; */
  /* mix-blend-mode: soft-light; */

}
</style>