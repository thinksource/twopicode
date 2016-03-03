totalvisit=0;
Router.configure({
  layoutTemplate: 'layout',
  // subscribe to our animals publication
  // with a waitOn function in Iron Router
  // ... now our application will wait to load
  // until we've successfully subscribed to the
  // publication
  waitOn: function () {
  //  Meteor.subscribe('animals');
  }
});

// Router.route('*',{
//   onBeforeAction:function(){
//     totalvisit++;
//     console.log('router added '+totalvisit);
//   }
// });

Router.route('/', {
  template:'layout',
  name:'hello',

});
