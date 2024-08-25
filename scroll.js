function all_scroll() {
  document.getElementById('side-pane').addEventListener('wheel', function(e) {
    e.preventDefault();
    document.getElementById('main-pane').scrollBy({
      top: e.deltaY
    });
  });
}

function onload() {
  all_scroll();
  document.getElementById('loading').classList.add('loading-out');
  setTimeout(function() {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('loading').remove();
    document.getElementById('content').classList.add('content-in');
  }, 500);
}