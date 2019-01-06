import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';

import AdeVue from './components/AdeVue';
import AdeAutoComplete from './components/AutoComplete';
import AdeSearchBox from './components/SearchBox';

window.customElements.define('ade-vue', wrap(Vue, AdeVue));
window.customElements.define('ade-vue-autocomplete', wrap(Vue, AdeAutoComplete));
window.customElements.define('ade-vue-searchbox', wrap(Vue, AdeSearchBox));