(function() {
    function HomeCtrl(Message, Room, $uibModal) {
      this.rooms = Room.all;
      this.messages = [];
      this.currentRoom;

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

      this.getMessages = function(room) {
        this.currentRoom = room;
        this.messages = Message.getByRoomId(room.$id);
        console.log(this.messages);
      }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Message', 'Room', '$uibModal', HomeCtrl]);
})();
