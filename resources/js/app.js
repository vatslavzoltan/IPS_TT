/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

window.Vue = require('vue');
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Tempalate parts
Vue.component('blog-page', require('./components/BlogPage.vue').default);
Vue.component('blog-content', require('./components/BlogContent.vue').default);
Vue.component('sidebar', require('./components/Sidebar.vue').default);
Vue.component('subscribe-form', require('./components/SubscibeComponent').default);
Vue.component('subscribe-popup', require('./components/SubscribePopup').default);
// Reusable components
Vue.component('styled-header', require('./components/StyledHeader.vue').default);
Vue.component('scaled-image', require('./components/ScaledImage.vue').default);
Vue.component('styled-button', require('./components/StyledButton').default);
Vue.component('step-progress', require('./components/StepProgress').default);
Vue.component('check-icon', require('./components/CheckIcon').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
