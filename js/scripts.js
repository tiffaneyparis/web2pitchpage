$('article').readmore({
  speed: 50,
  lessLink: '<a href="#">Done</a>',
  moreLink: '<a href="#">Read On</a>',
  
});

$('#tiff').rotate({
  bind:
  {
    mouseover : function() {
    $(this).rotate({animateTo:360})
  },
  mouseout : function() {
    $(this).rotate({animateTo:0})
    }
  }

});

$('.icon').rotate({
  bind:
  {
    mouseover : function() {
    $(this).rotate({animateTo:360})
  },
  mouseout : function() {
    $(this).rotate({animateTo:0})
    }
  }

});