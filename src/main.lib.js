import Vue from "vue";

import AdeVue from "./components/AdeVue";
import AdeVueAutoComplete from "./components/AutoComplete";
import AdeVueSearchBox from "./components/SearchBox";
import AdeVueFamilyTree from "./components/FamilyTree";

const Components = {
  AdeVue,
  AdeVueAutoComplete,
  AdeVueSearchBox,
  AdeVueFamilyTree
};

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

export default Components;