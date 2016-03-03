//Emitter = new (Meteor.npmRequire('events').EventEmitter);
Session.setDefault('counter', 0);
Session.setDefault('visitcount', 0);
var ddpEvents = new EventDDP('raix:push', Meteor.connection);

Template.hello.onCreated(function(){
    console.log("I am here");
    ddpEvents.setClient({
    appId: '2222',
    visit:1
  });
  Meteor.call('increasevisit', function(e, r){
    Session.set('visitcount',r);
  })

   });

Template.hello.helpers({
  counter: function () {
    return Session.get('counter');
  },

});

Template.hello.events({
  'click .btn-warning': function () {
    // increment the counter when button is clicked
    Session.set('counter', Session.get('counter') + 1);
  },
  'click #showmodal': function(e) {
    e.preventDefault();
    Meteor.call("syncvisit", function(e,r){
      Session.set('visitcount',r);
    });
    $('#MessageModal').modal('show');
  },
  'click #close':function(e){
      $('#MessageModal').modal('hide');
  },
  'click #addwindow':function(e){
    window.open('/');
  },
  /**
  Here just show it can not fire the event close window for javascript, if the window
  do not open by javascript.
  */
  'beforeunload window':function(e){
    Meteor.call('decreasevisit', function(e,r){
      Session.set('visitcount',r);
    });
  }

});
ddpEvents.addListener('visitshow', function(data){
  if(data){
    Session.set('visitcount',data['visit']);
    $('#MessageModal').modal('show');
  }
});
