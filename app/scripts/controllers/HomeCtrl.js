(function() {
    function HomeCtrl(Room, $uibModal) {
      this.rooms = Room.all;

      this.open = function () {
        var modalInstance = $uibModal.open({
          animation: true,
          ariaLabelledBy: 'modal-title',
          ariaDescribedBy: 'modal-body',
          templateUrl: '../templates/AddRoomModal.html',
          controller: 'ModalCtrl',
          controllerAs: '$ctrl'
        });
      };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
