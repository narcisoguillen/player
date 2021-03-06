define(['Backbone'], function(){
  var AlbumView = Backbone.View.extend({

    className: 'album',

    events: {
      'click .add' : 'addAlbum'
    },

    initialize: function(){
      this.template = _.template($('#album-template').html());
      this.render();
    },

    addAlbum: function(event){
      this.options.player.playlist.add(this.model);
    },

    render: function(){
      this.$el.html(this.template(this.model.toJSON()));
    }

  });

  return AlbumView;
});
