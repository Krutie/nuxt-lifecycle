export default {
  isOpen: state => state.isOpen,
  isNext: state => state.isNext,
  loading: state => state.loading,
  pages: state => state.pages,
  activePageIndex: state => state.active.pageIndex,
  activePage: state => state.pages[state.active.pageIndex] || state.activePage,
  activeTopic: state => param => {
    let page = state.pages[state.active.pageIndex] || state.activePage;
    return page.points.find(point => point.id === param);
  },
  tips: state => state.tips,
  titleTemplate: state => (titleChunk, siteTitle) => {
    return titleChunk ? `${titleChunk} - ${siteTitle}` : `${siteTitle}`;
  }
};
