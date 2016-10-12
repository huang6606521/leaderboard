/**
 * Created by jipenghuang on 10/11/16.
 */
playlists = new Mongo.Collection('players');

if (Meteor.isClient) {
  Template.leaderboard.helpers({
    tasks: function() {
      return playlists.find({}, {sort: {createdAt: -1}});
    }
  });
  Template.leaderboard.events({
    "submit .add-task": function(event) {
      let name = event.target.name.value;
      Meteor.call('addTask', name);
      event.target.name.value = '';
      return false;
    },

    'click': function(){
      console.log("You clicked something");
    }
  });

}

Meteor.methods({
  addTask: function(name){

    playlists.insert({
      name: name, createdAt: new Date()
    });
  },



})