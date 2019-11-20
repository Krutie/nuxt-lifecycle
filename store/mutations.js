export default {
  /*
   ** set initial pages
   */

  SET_PAGES(state, payload) {
    state.pages = payload;
  },

  /*
   ** set tips
   */

  SET_TIPS(state, payload) {
    state.tips = payload;
  },

  /*
   ** reset tips
   */

  // RESET_TIPS(state) {
  //   state.tips.forEach(tip => {
  //     tip.completed = false;
  //   });
  // },

  SET_TIP_COMPLETED(state, payload) {
    state.tips[payload].completed = true;
  },
  /*
   ** set title
   */

  SET_TITLE(state, payload) {
    state.activePage.title = payload;
  },

  /*
   ** When Back and Next navigation is used,
   ** the following mutations are run
   */
  NEXT(state, payload) {
    state.active.pageIndex++;
  },
  BACK(state, payload) {
    state.active.pageIndex--;
  },

  /*
  ** when dynamic page is accessed directly
  ** from subnavigation component

  ** subnavigation component receives dataSize to create
  ** linear navigation, hence payload isn't in the form of
  ** item.slug, but rather index value and keyType,
  ** where the keyType can be 'pageIndex' or 'itemIndex'

  ** instead of ++ and -- the active pageIndex or itemIndex,
  ** we simply assign the pageIndex/itemIndex id that is clicked
  
  ** payload = 2
  */
  UPDATE_ACTIVE_KEY(state, payload) {
    state.active.pageIndex = payload;
  },

  /*
  ** when dynamic page is accessed directly via route params
  ** This is opposite of UPDATE_ACTIVE_KEY(...) above

  ** Instead of index id and keyType, here we receive
  ** payload in the form of item.slug, which is a string
  ** So we, then track back the id of the page using findIndex

  ** payload = index, morning, afternoon, evening, night, summary
  */

  UPDATE_ACTIVE_PAGE_INDEX(state, payload) {
    state.active.pageIndex = state.pages.findIndex(
      page => page.slug == payload
    );
  },

  /*
   ** payload - { key: 'isOpen', value: true }
   ** where value can be true or false, and
   ** key can be: `isNext`, `isOpen` or `loading`
   */

  TOGGLE_STATE(state, payload) {
    state[payload.key] = payload.value;
  }
};
