(function() {
  filter();
})();

/**
 * filter
 * To select filter
 * Script adapted from https://codepen.io/j0be/pen/jWGVvV?editors=1010
 */
function filter() {
  const dropdown = document.querySelector('.dropdown');

  dropdown.addEventListener('click', function(event) {
    event.preventDefault();
    event.stopPropagation();

    let classList = this.classList;

    // this.classList.toggle('expanded');
    // event.target.checked = true;
    // console.log('add', this, event.target.id, event.target.checked);

    if (classList.contains('expanded')) {

      event.target.checked = true;
      this.classList.toggle('expanded');
      document.getElementById(event.target.getAttribute('for')).checked = true;

      console.log('contains', document.getElementById(event.target.getAttribute('for')).checked);
    } else {

      this.classList.toggle('expanded');
      console.log('DONT contains', event.target, event.target.checked);
    }
  });

  document.addEventListener('click', function() {
    console.log('removeClass', dropdown);
    dropdown.classList.remove('expanded');
  });
}