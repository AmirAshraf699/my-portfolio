<template>
  <div class="landing">
    <v-container>
      <div class="text">
        <h1>{{ t('landing.titleOne') }} <span>{{ t('landing.titleTwo') }}</span></h1>
        <p>{{ t('landing.jop') }}</p>
        <div class="links">
          <a href="http://https://www.linkedin.com/in/amir-ashraf2899">
            <v-icon>mdi-linkedin</v-icon>
        </a>
        <a href="http://https://github.com/AmirAshraf699">
            <v-icon>mdi-github</v-icon>
        </a>
        </div>
      </div>
      <a class="about-me" href="#about">
        <v-icon>mdi-chevron-double-down</v-icon>
      </a>
    </v-container>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
