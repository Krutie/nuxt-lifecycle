export default {
  /*
   ** Push route everytime activePage changes
   */

  action1({ getters }) {
    this.$router.push(
      this.app.localePath({
        path: `/${getters.activePage.slug}`
      })
    );
  },

  /*
   ** 'Next' action for page navigation
   ** Used at components/layout/PageNavigation
   */

  next({ commit, dispatch }) {
    commit("NEXT");
    commit("TOGGLE_STATE", { key: "isNext", value: true });
    dispatch("action1");
  },

  /*
   ** 'Back' action for page navigation
   ** Used at components/layout/PageNavigation
   */
  back({ commit, dispatch }) {
    commit("BACK");
    commit("TOGGLE_STATE", { key: "isNext", value: false });
    dispatch("action1");
  },

  /*
   ** Complete Tip
   ** Used at components/base/Tips
   */
  setCompleted({ commit }, payload) {
    commit("SET_TIP_COMPLETED", payload);
  },

  /*
   ** Reset Tip
   ** Used at components/base/Tips
   */
  // resetTips({ commit }) {
  //   commit("RESET_TIPS");
  // },

  /*
   ** when page is accessed via Sub Navigation
   ** payload = 2
   ** Used at components/layout/NavBar.default
   */
  goToPage({ commit, dispatch }, payload) {
    commit("UPDATE_ACTIVE_KEY", payload);
    dispatch("action1");
  },

  /*
   ** when page is accessed directly via route params
   ** update active pageIndex based on payload

   ** payload = nuxt-server-init, validate, 
   ** route-middleware, async-data-and-fetch, summary
   ** Used at layout/default
   */
  updateActivePageIndex({ commit }, payload) {
    commit("UPDATE_ACTIVE_PAGE_INDEX", payload.slug);
  },

  /*
   ** Change the title value on error
   ** Used at layout/error
   */
  updateActivePage({ commit }, payload) {
    commit("SET_TITLE", payload);
  },

  /*
   ** when page is access via Sub Navigation or direct URL access
   ** update the direction of animation based on previous page
   ** toggle isNext based on newPageIndex and oldPageIndex

   ** payload = {newVal: 3, oldVal: 2}
   ** Used at layout/default
   */

  updateDirection({ state, commit }, payload) {
    payload.newVal > payload.oldVal
      ? commit("TOGGLE_STATE", { key: "isNext", value: true })
      : commit("TOGGLE_STATE", { key: "isNext", value: false });
  },

  /* generic toggle state function

  payload - { key: 'isOpen', value: true }

  ** Used at:
  ** components/layout/NavBar.default where key="isOpen"
  ** components/loading where key="loading"
  ** layout/default where key="isOpen"
  ** pages/_slug/_id where key="isOpen"
  ** page/_slug/index where key="isOpen"
  ** store/actions where key="isNext"
  */
  toggleState({ state, commit }, payload) {
    commit("TOGGLE_STATE", payload);
  },

  /*
   ** Toggle `isOpen` based on payload

   ** payload = true or false
   */

  toggleContent({ commit }, payload) {
    commit("TOGGLE_CONTENT", payload);
  },
  /*
   ** Toggle loading state var as updated by
   ** @/components/loading.vue

   ** payload = true or false
   */
  toggleLoading({ commit }, payload) {
    commit("TOGGLE_LOADING", payload);
  },
  /*
   ** First lifecycle hook of Nuxt
   ** nuxtServerInit sets the initial data for pages and items
   ** at the same time keeping locale i18n in check
   */

  nuxtServerInit(vuexContext, nuxtContext) {
    vuexContext.commit("SET_PAGES", nuxtContext.app.i18n.t("pages"));
    vuexContext.commit("SET_TIPS", nuxtContext.app.i18n.t("tips"));
    vuexContext.commit("SET_TITLE", nuxtContext.app.i18n.t("title"));
  }
};
