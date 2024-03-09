function hoverImgBox() {
  var imgStable = document.querySelector('.img-stable'); // Selecting the img-stable element
  imgStable.classList.add('shrink');
}

function unhoverImgBox() {
  var imgStable = document.querySelector('.img-stable'); // Selecting the img-stable element
  imgStable.classList.remove('shrink');
}

document.querySelectorAll('.img-box').forEach(item => {
  item.addEventListener('mouseover', hoverImgBox); // Hovering over img-box triggers shrinking effect
  item.addEventListener('mouseout', unhoverImgBox);
});

document.querySelector('.img-stable').addEventListener('mouseover', function() {
  document.querySelectorAll('.img-box').forEach(item => {
    item.removeEventListener('mouseover', hoverImgBox); // Remove shrinking effect when hovering over img-stable
  });
});

document.querySelector('.img-stable').addEventListener('mouseout', function() {
  document.querySelectorAll('.img-box').forEach(item => {
    item.addEventListener('mouseover', hoverImgBox); // Add shrinking effect back when moving out of img-stable
  });
});
