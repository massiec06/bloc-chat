(function() {
    function HomeCtrl(Message, Room, $uibModal, $cookies) {
      this.rooms = Room.all;
      this.messages = [];
      this.currentRoom;
      this.newMessage = {};

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
      }

      this.sendMessage = function() {
        this.newMessage.username = $cookies.get('blocChatCurrentUser');
        this.newMessage.roomId = this.currentRoom.$id;
        Message.send(this.newMessage);
        this.newMessage = {};
      }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Message', 'Room', '$uibModal', '$cookies', HomeCtrl]);
})();
