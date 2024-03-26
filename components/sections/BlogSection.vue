<template>
  <section
    class="blog-section"
    v-scroll-reveal
    id="blog"
  >
    <div class="container">
      <div class="blog-section-wrapper">
        <div>
          <div class="blog-parag">

            Recent posts in blog


          </div>
        </div>

        <div class="blog-list">
          <a
            target="_blank"
            :href="item.link"
            v-for="(item, key) in articles"
            :key="key"
            class="blog-item"
            :style="key === 0 && 'grid-area: top-row;'"
          >
            <div class="article-title">
              {{ item.title }}
            </div>
            <div class="footer-wrapper">
              <div class="article-time">
                {{ item.time }}
              </div>
              <div class="article-arrow">
                <BaseIcon
                  :size="24"
                  class="article-icon"
                  name="arrow-top-right"
                ></BaseIcon>
              </div>
            </div>

          </a>
        </div>
      </div>

    </div>
  </section>
</template>
<script
  setup
  lang="ts"
>
import BaseIcon from '@/ui/BaseIcon.vue'
import { ref } from "vue";

const articles = ref([{
  title: 'LookLook — the ultimate customer survey platform.Our experience of building a huge platform for a massive multi-users service.',
  time: '4 min read',
  link: 'https://afterlogic.medium.com/looklook-the-ultimate-customer-survey-platform-b438430b3dba'
}, {
  title: 'Why Headless CMS Might Be the Better Choice for Your Next Website a huge platform for a massive multi-users service.',
  time: '3 min read',
  link: 'https://afterlogic.medium.com/why-headless-cms-might-be-the-better-choice-for-your-next-website-6da661c79f0c'

}, {
  title: 'Aviva Zacks of Safety Detectives, and Alexander Orlov (CTO & Co-Founder of AfterLogic) platform for a massive multi-users service.',
  time: '3 min read',
  link: 'https://www.safetydetectives.com/news/interview-alex-orlov-afterlogic-works/'
}])

</script>
<style
  lang="scss"
  scoped
>
.blog-section {
  margin-top: 145px;

  @media (min-width: $md) {
    margin-top: 120px;

  }

  @media (min-width: $lg) {}

  @media (min-width: $xl) {}

  @media (min-width: $xxl) {}
}

.blog-section-wrapper {


  @media (min-width: $md) {}

  @media (min-width: $lg) {}

  @media (min-width: $xl) {
    margin-top: 120px;
    // display: grid;
    // grid-template-columns: 1fr 716px;
    // column-gap: 20px;
  }

  // @media (min-width: $xxl) {
  //   grid-template-columns: 1fr 870px;
  //   column-gap: 160px;


  // }
}

.blog-parag {

  font-family: 'Onest', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 140%;
  color: #FFFFFF;
  margin-bottom: 40px;


  @media (min-width: $md) {}

  @media (min-width: $lg) {
    font-size: 32px;
  }

  @media (min-width: $xl) {}

  @media (min-width: $xxl) {}
}

.blog-list {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "top-row"
    "."
    '.';

  grid-template-rows: 240px;
  gap: 20px 20px;
  grid-auto-flow: row;

  // @media (min-width: $md) {
  //   grid-template-columns: 1fr 1fr;
  //   grid-template-rows: 240px 240px;
  //   grid-template-areas:
  //     "top-row top-row"
  //     ". .";
  // }

  @media (min-width: $lg) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: $xl) {}

  @media (min-width: $xxl) {}

}




.article-time {
  font-family: "Onest", sans-serif;

  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
}

.article-title {
  font-family: "Onest", sans-serif;

  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0px;
  text-align: left;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;


}

.footer-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.blog-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;
  color: #FFFFFF;
  background: rgba(255, 255, 255, 0.08);
  height: 240px;
  padding: 24px 32px 24px 32px;
  border-radius: 24px;
  cursor: pointer;

  &:hover {
    .article-arrow {
      color: white;
    }
  }

}

.article-arrow {
  width: 64px;
  height: 64px;
  background: rgba(255, 255, 255, 0.1);

  color: rgba(255, 255, 255, .5);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.article-icon {}
</style>
