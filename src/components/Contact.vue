<template>
  <div class="contact" id="contact">
    <v-container>
      <div class="content d-flex justify-center align-center">
        <div class="data">
          <h2 class="second-title mb-2">{{ t('contact.title') }}</h2>
          <p class="ask mb-8">{{ t('contact.desc') }}</p>
          <p class="phone"><v-icon>mdi-phone</v-icon>01148622443</p>
          <p class="mail">
            <v-icon>mdi-email</v-icon>amirashraf2899@gmail.com
          </p>
        </div>
        <form action="" id="contact-form">
          <div class="w-100 ma-2">
            <label for="name">{{ t('contact.name') }}</label>
            <input
              class="name w-100 pa-2"
              type="text"
              name="name"
              id="name"
              required
              :placeholder="t('contact.namePlaceholder')"
            />
          </div>
          <div class="w-100 ma-2">
            <label for="email">{{ t('contact.email') }}</label>
            <input
              class="email w-100 pa-2"
              type="email"
              name="email"
              id="email"
              required
              :placeholder="t('contact.emailPlaceholder')"
            />
          </div>
          <div class="w-100 ma-2">
            <label for="subject">{{ t('contact.subject') }}</label>
            <input
              class="subject w-100 pa-2"
              type="text"
              name="subject"
              id="subject"
              required
              :placeholder="t('contact.subjectPlaceholder')"
            />
          </div>
          <div class="w-100 ma-2">
            <label for="message">{{ t('contact.message') }}</label>
            <textarea
              class="message w-100 pa-2"
              name="message"
              id="message"
              required
            :placeholder="t('contact.messagePlaceholder')"
            >
            </textarea>
          </div>
          <div class="send w-100 ma-2" :style="btnStyle">
            <button name="submit" @submit.prevent>{{ t('contact.send') }}</button>
          </div>
        </form>
      </div>
    </v-container>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

const btnStyle = computed(() => ({
  textAlign: locale.value === "en" ? "right" : "left"
}))

</script>