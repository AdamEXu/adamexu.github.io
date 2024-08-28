var scrolled = false;

function all_scroll() {
  document.getElementById("side-pane").addEventListener("wheel", function (e) {
    e.preventDefault();
    document.getElementById("main-pane").scrollBy({
      top: e.deltaY,
    });
  });
}

function scroll_func() {
  scrolled = true;
  document.getElementById("scroll-nag").classList.add("scroll-nag-out");
}

function onload() {
  all_scroll();
  document.getElementById("loading").classList.add("loading-out");
  setTimeout(function () {
    document.getElementById("loading").style.display = "none";
    document.getElementById("loading").remove();
  }, 500);
  setTimeout(function () {
    document.getElementById("content").classList.add("content-in");
  }, 200);
  setTimeout(function () {
    Waypoint.refreshAll();
  }, 700);
  setTimeout(function () {
    if (!scrolled) {
      document.getElementById("scroll-nag").classList.add("scroll-nag-in");
    }
  }, 1800);
}

function hideall() {
  document.getElementById("viz1").style.opacity = 0;
  document.getElementById("viz2").style.opacity = 0;
  document.getElementById("viz3").style.opacity = 0;
  document.getElementById("viz4").style.opacity = 0;
}

var waypoint1 = new Waypoint({
  element: document.getElementById("slide1"),
  handler: function (direction) {
    if (direction == "up") {
      console.log("Switching frame to 1");
      hideall();
      setTimeout(function () {
        hideall();
        document.getElementById("viz1").style.opacity = 1;
      }, 250);
    }
  },
  context: document.getElementById("main-pane"),
  offset: -400,
});

var waypoint2 = new Waypoint({
  element: document.getElementById("slide2"),
  handler: function (direction) {
    if (direction == "down") {
      console.log("Switching frame to 2");
      hideall();
      setTimeout(function () {
        hideall();
        document.getElementById("viz2").style.opacity = 1;
      }, 250);
    }
  },
  context: document.getElementById("main-pane"),
  offset: 400,
});

var waypoint3 = new Waypoint({
  element: document.getElementById("slide2"),
  handler: function (direction) {
    if (direction == "up") {
      console.log("Switching frame to 2");
      hideall();
      setTimeout(function () {
        hideall();
        document.getElementById("viz2").style.opacity = 1;
      }, 250);
    }
  },
  context: document.getElementById("main-pane"),
  offset: -400,
});

var waypoint4 = new Waypoint({
  element: document.getElementById("slide3"),
  handler: function (direction) {
    if (direction == "down") {
      console.log("Switching frame to 2");
      hideall();
      setTimeout(function () {
        hideall();
        document.getElementById("viz3").style.opacity = 1;
      }, 250);
    }
  },
  context: document.getElementById("main-pane"),
  offset: 400,
});

var waypoint5 = new Waypoint({
  element: document.getElementById("slide3"),
  handler: function (direction) {
    if (direction == "up") {
      console.log("Switching frame to 2");
      hideall();
      setTimeout(function () {
        hideall();
        document.getElementById("viz3").style.opacity = 1;
      }, 250);
    }
  },
  context: document.getElementById("main-pane"),
  offset: -400,
});

var waypoint6 = new Waypoint({
  element: document.getElementById("slide4"),
  handler: function (direction) {
    if (direction == "down") {
      console.log("Switching frame to 2");
      hideall();
      setTimeout(function () {
        hideall();
        document.getElementById("viz4").style.opacity = 1;
      }, 250);
    }
  },
  context: document.getElementById("main-pane"),
  offset: 400,
});
