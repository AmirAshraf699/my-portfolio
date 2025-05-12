<template>
    <div class="about" id="about">
      <v-container class="justify-center align-center flex-wrap">
        <img src="@/assets/imgs/My-pic.png" alt="Amir">
        <div class="content"> 
          <h2 class="second-title">{{ t('about.title') }}</h2>
          <div class="text">
            {{ t('about.text.one') }}
            <br>
            {{ t('about.text.two') }}
            <br>
            {{ t('about.text.three') }}
            <br>
            {{ t('about.text.four') }}
            <br>
            {{ t('about.text.five') }}
            <br>
            {{ t('about.text.six') }}
          </div>
          <div class="info mt-6">
            <a class="d-inline-block px-3 py-2" href="../pdf/Amir-shraf-Amir.pdf" download="Amir-Ashraf-Amir.pdf" target="_blank">{{ t('about.download') }}</a>
            <a class="d-inline-block px-3 py-2" href="#contact">{{ t('about.contact') }}</a></div>
        </div>
      </v-container>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n() 
</script>