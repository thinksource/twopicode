
Template.ModalTemplate.helpers({
  create: function(){

  },
  rendered: function(){

  },
  destroyed: function(){

  },
  visitcount:function(){
    return Session.get('visitcount');
  }
});

Template.ModalTemplate.events({
  "click #foo": function(event, template){

  }
});
