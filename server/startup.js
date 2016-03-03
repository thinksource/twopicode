var ddpEvents = new EventDDP('raix:push');
listener = function(bar) {
       console.log('Listening custom event', bar);
   };
Meteor.startup(function () {
  //when start again clean the visit number
  totalvisit=0;
});

Meteor.methods({
    'increasevisit':function(){

      totalvisit++;
      console.log("another visit come. Totally "+ totalvisit.toString()+" view the site");
      ddpEvents.emit('visitshow',{'visit':totalvisit});
      return totalvisit;
    },
    'syncvisit':function(){
      return totalvisit;
    },
    'decreasevisit':function(){
      totalvisit--;
      console.log("one of visitor left. Totally "+ totalvisit.toString()+" view the site");
    }


});
