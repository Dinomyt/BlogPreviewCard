document.addEventListener('DOMContentLoaded', function () {
    let customHover = document.getElementById('custom-hover');
    let card = document.getElementById('cardId');
  
    customHover.addEventListener('mouseover', function () {
      card.style.boxShadow = '8px 8px 0px 0px black';
      customHover.style.color = 'gold';
      customHover.style.cursor = 'pointer';
    });
  
    customHover.addEventListener('mouseout', function () {
      card.style.boxShadow = '5px 5px 0px 0px black';
      customHover.style.color = 'black';
      customHover.style.cursor = '';
    });
  });