AFRAME.registerComponent('position-on-scroll', {
    init: function () {
      this.onScroll = this.onScroll.bind(this);
      window.addEventListener('wheel', this.onScroll);
    },
    onScroll: function (event) {    
      var deltaY = event.deltaY;     
      var currentPosition = this.el.getAttribute('position');
      var newPosition;
      if (deltaY > 0) {        
        newPosition = {
          x: currentPosition.x,
          y: currentPosition.y,
          z: currentPosition.z - 0.1
        };
      } else {
        newPosition = {
          x: currentPosition.x,
          y: currentPosition.y,
          z: currentPosition.z + 0.1 
        };
      }      
      this.el.setAttribute('position', newPosition);
    },
    remove: function () {
      window.removeEventListener('wheel', this.onScroll);
    }
  });
  