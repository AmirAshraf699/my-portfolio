<template>
  <div class="profile" id="profile">
    <v-container>
      <ul class="profile-links">
        <li>
          <a href="https://www.linkedin.com/in/amir-ashraf2899" target="_blank">
            <v-icon>mdi-linkedin</v-icon>
            <p>{{ t('profile.linkedin') }}</p>
        </a>
        </li>
        <li>
          <a href="https://www.github.com/amirashraf699" target="_blank">
            <v-icon>mdi-github</v-icon>
            <p>{{ t('profile.github') }}</p>
        </a>
        </li>
      </ul>
      <div class="content">
        <div class="second-title">{{ t('profile.title') }}</div>
        <p class="ask">{{ t('profile.desc') }}</p>
        <p class="phone"><i class="fa-solid fa-phone"></i>01148622443</p>
        <p class="mail">
          <i class="fa-solid fa-envelope"> </i>amirashraf2899@gmail.com
        </p>
      </div>
    </v-container>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

