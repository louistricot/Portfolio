var container = document.querySelector('.container');
var prev = document.querySelector('.prev');
var entr = document.querySelector('.entr');
var items = document.querySelectorAll('.item');

var containerWidth = container.clientWidth;
var index = 0;

prev.addEventListener('click', function() {
  index--;
  if (index < 0) index = 0;
  console.log(index);
  items.forEach(function(item) {
    item.style.transform = 'translateX(-' + index * containerWidth + '%)';
  });
});

entr.addEventListener('click', function() {
  index++;
  if (index >= items.length) index = items.length - 1;
  console.log(index);
  items.forEach(function(item) {
    item.style.transform = 'translateX(-' + index * containerWidth + 'px)';
  });
});
