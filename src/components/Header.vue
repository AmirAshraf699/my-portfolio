<template>
  <header>
    <v-container>
      <h1 class="logo">{{ t("header.logo") }}</h1>
      <nav>
        <ul class="links">
          <li>
            <a class="link" href="#about">{{ t("header.links.one") }}</a>
          </li>
          <li>
            <a class="link" href="#skills">{{ t("header.links.two") }}</a>
          </li>
          <li>
            <a class="link" href="#projects">{{ t("header.links.three") }}</a>
          </li>
          <li>
            <a class="link" href="#contact">{{ t("header.links.four") }}</a>
          </li>
          <li>
            <button class="link language" @click="toggleLanguage">
              {{ t("header.language") }}
            </button>
          </li>
        </ul>
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-app-bar-nav-icon
              class="toggle-menu"
              v-bind="props"
            ></v-app-bar-nav-icon>
          </template>

          <v-list style="background-color: rgb(21, 21, 21, 0.7); width: 250px">
            <v-list-item>
              <a style="color: var(--white)" class="link" href="#about">{{
                t("header.links.one")
              }}</a>
            </v-list-item>
            <v-list-item>
              <a style="color: var(--white)" class="link" href="#skills">{{
                t("header.links.two")
              }}</a>
            </v-list-item>
            <v-list-item>
              <a style="color: var(--white)" class="link" href="#projects">{{
                t("header.links.three")
              }}</a>
            </v-list-item>
            <v-list-item>
              <a style="color: var(--white)" class="link" href="#contact">{{
                t("header.links.four")
              }}</a>
            </v-list-item>
            <v-list-item :style="lanStyle">
              <button
                class="link px-7 py-2"
                @click="toggleLanguage"
                style="
                  color: var(--white);
                  background-color: var(--yellow);
                  transition: var(--transition);
                  border-radius: 6px;
                "
              >
                {{ t("header.language") }}
              </button>
            </v-list-item>
          </v-list>
        </v-menu>
      </nav>
    </v-container>
  </header>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { ref, onMounted, computed } from "vue";

const { t, locale } = useI18n();

const currentLanguage = ref(localStorage.getItem("language") || "en");

const toggleLanguage = () => {
  window.location.reload();
  currentLanguage.value = currentLanguage.value === "en" ? "ar" : "en";
  locale.value = currentLanguage.value;
  localStorage.setItem("language", currentLanguage.value);
};

const lanStyle = computed(() => ({
  textAlign: locale.value === "en" ? "right" : "left"
}))

onMounted(() => {
  if (localStorage.getItem("language")) {
    locale.value = localStorage.getItem("language");
  }
});
</script>
