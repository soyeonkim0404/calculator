const buttons = document.querySelectorAll('.button-wrap button');
const $input = document.querySelector('input');

buttons.forEach(e => {
  e.addEventListener('click', () => {
    $input.value += e.innerHTML;
    if (e.dataset.type === 'ac') {
      $input.value = '';
    }

    console.log($input.value);
  });
});
