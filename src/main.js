import { createApp } from "vue";
import App from "./App.vue";
import TheHeader from "./components/layout/TheHeader.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import BaseTitle from "./components/ui/BaseTitle.vue";
import BaseModal from "./components/ui/BaseModal.vue";
import store from "./store";

const app = createApp(App).use(store);

app.component("the-header", TheHeader);
app.component("base-button", BaseButton);
app.component("base-title", BaseTitle);
app.component("base-modal", BaseModal);

app.mount("#app");
