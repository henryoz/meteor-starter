// ***************************************************************
// STATIC PAGES - GUEST
// ***************************************************************

Router.map(function() {

  // FRONTPAGE
  // -------------------------------------------------------
  this.route('home', {
    path: '/',
    template: 'home'
  });

  // ABOUT
  // -------------------------------------------------------
  this.route('about', {
    path: '/about',
    template: 'about'
  });

  this.route('accessDenied', {
    template: 'accessDenied',
    path: 'accessDenied',
  });

});
