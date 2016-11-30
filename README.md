# Vue.js single page application template

this project is forked from skyronic/vue-spa, used as a template for spa

# steps
0. customize app layouts in /src/pages/App.vue
1. create new page in /src/pages/
2. import new page in /src/router.js, and define routes for it
3. define new page
    * define template
    * define script( this component's definition )
    * define style
    * define new mutations type in /src/vuex/mutation-types.js
    * define entity's state, actions, getters in /src/vuex/{ENTITY}/
    * add module's state to /src/vuex/store.js
4. go back to step 1 if needs more pages