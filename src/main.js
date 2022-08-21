import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import components from "./components/UI"
import directives from "./directives";

const app = createApp(App);

components.forEach((c) => {
  app.component(c.name, c);
});
directives.forEach((directive) => {
  app.directive(directive.name, directive);
});

app.use(store).mount("#app");
