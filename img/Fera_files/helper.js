//* 9fbef606107a605d69c0edbcd8029e5d *//
(function clearAuthTokenOnPageRefresh() {
    let isWebPageInsideIFrame= false;
    if(window) {
      isWebPageInsideIFrame = window !== window.parent;
    }
    if ((typeof window === undefined) || isWebPageInsideIFrame) return;


  window.onload = function() {
    sessionStorage.removeItem('authToken');
  };
})();
