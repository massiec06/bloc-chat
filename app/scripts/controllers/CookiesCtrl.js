(function() {
    function CookiesCtrl($cookies, $uibModalInstance) {
      var $ctrl = this;

      $ctrl.username = "";

      $ctrl.ok = function () {
        if($ctrl.username != "") {
          $cookies.put('blocChatCurrentUser', $ctrl.username)
        }

        $uibModalInstance.close();
      };


    }

    angular
        .module('blocChat')
        .controller('CookiesCtrl', ['$cookies','$uibModalInstance', CookiesCtrl]);
})();
