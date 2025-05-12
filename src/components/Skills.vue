<template>
  <div class="skills" id="skills">
    <v-container class="container">
      <div class="content">
        <div class="explain-skills">
          <h2 class="second-title">{{ t('skills.title') }}</h2>
          <p class="top">
            {{ t('skills.text.one') }}
            <br />
            {{ t('skills.text.two') }}
            <br />
            {{ t('skills.text.three') }}
          </p>
          <p class="bottom">
            {{ t('skills.text.four') }}
            <br />
            {{ t('skills.text.five') }}
            <br />
            {{ t('skills.text.six') }}
          </p>
          <p class="bottom">{{ t('skills.text.seven') }}</p>
          <a href="#contact">{{ t('skills.contact') }}</a>
        </div>
        <div class="all-skills">
          <div class="my-skills">
            <div class="image" v-for="skill in skills" :key="skill.id">
              <img :src="skill.img" alt="" />
              <p>{{ skill.name }}</p>
            </div>
          </div>
        <p class="working">{{ t('skills.work') }}</p>
          <div class="my-skills">
            <div class="image">
              <img src="@/assets/imgs/next.png" alt="" />
              <p>Next</p>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const skills = ref([
  {
    id: 1,
    name: "Html",
    img: require("@/assets/imgs/html.png"),
  },
  {
    id: 2,
    name: "Css",
    img: require("@/assets/imgs/CSS.png"),
  },
  {
    id: 3,
    name: "JavaScript",
    img: require("@/assets/imgs/js.png"),
  },
  {
    id: 4,
    name: "TypeScript",
    img: require("@/assets/imgs/ts.png"),
  },
  {
    id: 5,
    name: "Python",
    img: require("@/assets/imgs/Python.png"),
  },
  {
    id: 6,
    name: "Vue",
    img: require("@/assets/imgs/vue.png"),
  },
  {
    id: 7,
    name: "Vuex",
    img: require("@/assets/imgs/vuex.png"),
  },
  {
    id: 8,
    name: "Pinia",
    img: require("@/assets/imgs/pinia.png"),
  },
  {
    id: 9,
    name: "Vuetify",
    img: require("@/assets/imgs/vuetify.png"),
  },
  {
    id: 10,
    name: "Nuxt",
    img: require("@/assets/imgs/nuxt.png"),
  },
    {
    id: 14,
    name: "Vee validate",
    img: require("@/assets/imgs/vee-validate.png"),
  },
  {
    id: 15,
    name: "React",
    img: require("@/assets/imgs/react.png"),
  },
  {
    id: 16,
    name: "Redux",
    img: require("@/assets/imgs/redux.svg"),
  },
  {
    id: 14,
    name: "I18n",
    img: require("@/assets/imgs/i18n.png"),
  },
  {
    id: 15,
    name: "Pug",
    img: require("@/assets/imgs/pug.png"),
  },
  {
    id: 16,
    name: "Gulp",
    img: require("@/assets/imgs/gulp.png"),
  },
  {
    id: 17,
    name: "Jest",
    img: require("@/assets/imgs/jest.png"),
  },
  {
    id: 18,
    name: "Bootstrap",
    img: require("@/assets/imgs/bootstrap.png"),
  },
  {
    id: 19,
    name: "Sass",
    img: require("@/assets/imgs/sass.png"),
  },
  {
    id: 20,
    name: "Postman",
    img: require("@/assets/imgs/postman.png"),
  },
  {
    id: 21,
    name: "Git",
    img: require("@/assets/imgs/git.png"),
  },
  {
    id: 22,
    name: "Github",
    img: require("@/assets/imgs/github.png"),
  },
  {
    id: 23,
    name: "Gitlab",
    img: require("@/assets/imgs/gitlab.webp"),
  },
    {
    id: 24,
    name: "Vercel",
    img: require("@/assets/imgs/vercel.svg"),
  },
    {
    id: 25,
    name: "Command Line",
    img: require("@/assets/imgs/commandline.png"),
  },
]);
</script>
