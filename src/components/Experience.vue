<template>
  <div class="experience">
    <v-container>
      <h2 class="main-title">{{ t('experience.title') }}</h2>
      <div class="experience-content" :style="borderStyle">
        <div class="experience-child py-15 px-10 position-relative">          
          <p class="desc">{{ t('experience.desc') }}</p>
          <div class="empty position-absolute rounded-circle" :style="dirStyle"></div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { t, locale } = useI18n();

const borderStyle = computed(() => ({
  [locale.value === "en" ? 'borderLeft' : 'borderRight']: '3px solid var(--white)'
}));

const dirStyle = computed(() => ({
  [locale.value === "en" ? 'left' : 'right']: '0',
  transform: locale.value === 'en' ? 'translate(-50%, -50%)' : 'translate(50%, -50%)'
}))
</script>