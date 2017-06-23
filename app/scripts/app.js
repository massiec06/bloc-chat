(function() {
    function config($locationProvider, $stateProvider) {
         $locationProvider
             .html5Mode({
                 enabled: true,
                 requireBase: false
              });

         $stateProvider

             .state('home', {
                 url: '/',
                 controller: 'HomeCtrl as home',
                 templateUrl: '/templates/home.html'
             });
     }

     function Cookies($uibModal, $cookies) {
       var currentUser = $cookies.get('blocChatCurrentUser');

       if (!currentUser || currentUser === '') {
         $uibModal.open({
           animation: true,
           ariaLabelledBy: 'modal-title',
           ariaDescribedBy: 'modal-body',
           templateUrl: '../templates/AddUsernameModal.html',
           controller: 'CookiesCtrl',
           controllerAs: '$ctrl'
        })
       }
     }


     angular
         .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap', 'ngCookies'])
         .config(config)
         .run(['$uibModal', '$cookies', Cookies]);
 })();
