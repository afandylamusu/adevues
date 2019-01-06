import Vue from "vue";

import AdeVue from "./components/AdeVue";
import AdeVueAutoComplete from "./components/AutoComplete";
import AdeVueSearchBox from "./components/SearchBox";

const Components = {
  AdeVue,
  AdeVueAutoComplete,
  AdeVueSearchBox
};

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

export default Components;