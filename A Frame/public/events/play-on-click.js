AFRAME.registerComponent("play-on-click", {
  init: function () {
    this.isPlaying = false;
    this.onClick = this.onClick.bind(this);
  },
  play: function () {
    window.addEventListener("click", this.onClick);
  },
  pause: function () {
    window.removeEventListener("click", this.onClick);
  },
  onClick: function (evt) {
    var videoEl = this.el.getAttribute("material").src;
    if (!videoEl) {
      return;
    }
    if (!this.isPlaying) {
      videoEl.pause();
    } else {
      videoEl.play();
    }
    this.isPlaying = !this.isPlaying;
  },
});
