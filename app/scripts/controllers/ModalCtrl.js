(function() {
    function ModalCtrl (Room, $uibModalInstance){
      var $ctrl = this;

      $ctrl.roomName = "";

      $ctrl.ok = function () {
        if($ctrl.roomName != "") {
          Room.add($ctrl.roomName);
        }

        $uibModalInstance.close();
      };

      $ctrl.cancel = function () {
        $uibModalInstance.close();
      };
    }

    angular
      .module('blocChat')
      .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();
