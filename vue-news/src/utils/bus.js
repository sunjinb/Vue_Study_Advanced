import Vue from 'vue';

// 두 문법의 차이
// // bus.js
// export const bus = new Vue();
// // App.vue
// import {bus} from './bus.js';

// // bus.js
// export default new Vue();
// // App.vue
// import Bus from './bus.js';

export default new Vue();