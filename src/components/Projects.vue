<template>
  <div class="projects" id="projects">
    <v-container class="container">
      <h2 class="main-title">{{ t('projects.title') }}</h2>
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="4" v-for="project in projects" :key="project.id">
          <v-card>
            <div class="image">
              <img :src="project.img" alt="" />
            </div>
            <div class="text pa-5">
              <h3>{{ project.name }}</h3>
              <p>
                {{ project.desc }}
                <br />
                {{ project.data }}
              </p>
              <div class="links">
                <a class="repo" :href="project.repo" target="_blank">{{ t('projects.repo') }}</a>
                <a class="design" :href="project.design" target="_blank">{{ t('projects.design') }}</a>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const projects = ref([
  {
    id: 1,
    name: t('projects.project.one.title'),
    desc: t('projects.project.one.desc'),
    data: t('projects.project.one.data'),
    img: require('@/assets/imgs/project-1.jpg'),
    repo: 'https://github.com/AmirAshraf699/e-commerce',
    design: 'https://e-commerce-rosy-gamma.vercel.app',
  },
  {
    id: 2,
    name: t('projects.project.two.title'),
    desc: t('projects.project.two.desc'),
    data: t('projects.project.two.data'),
    img: require('@/assets/imgs/project-2.jpg'),
    repo: 'https://github.com/AmirAshraf699/Dashboard',
    design: 'https://amirashraf699.github.io/Dashboard/',
  },
  {
    id: 3,
    name: t('projects.project.three.title'),
    desc: t('projects.project.three.desc'),
    data: t('projects.project.three.data'),
    img: require('@/assets/imgs/project-3.jpg'),
    repo: 'https://github.com/AmirAshraf699/landing-page',
    design: 'https://amirashraf699.github.io/landing-page/',
  },
])
</script>
