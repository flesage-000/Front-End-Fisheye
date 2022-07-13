class DropdownSorter {
  constructor() {
    this.AppPhotographer = new AppPhotographer();
    // this._AppPhotographer = new AppPhotographer(PhotographersData);
  }

  CreateDropdownSorter() {
    // const DropdownContainer = document.querySelector('.photograph__content');
    const $wrapper = document.createElement('div');
    const dropdown = `
      <input type="radio" name="sortType" value="popularity" checked="checked" id="sort-popularity">
      <label for="sort-popularity">Popularité</label>

      <input type="radio" name="sortType" value="date" id="sort-date">
      <label for="sort-date">Date</label>

      <input type="radio" name="sortType" value="title" id="sort-title">
      <label for="sort-title">Titre</label>
    `;

    $wrapper.innerHTML = dropdown;
    this.Init($wrapper);
    $wrapper.classList.add('dropdown');

    return $wrapper
  }

  Init(element) {
    console.log('Init', element);
    element.addEventListener('click', function(event) {
      event.preventDefault();
      event.stopPropagation();

      let classList = this.classList;

      if (classList.contains('expanded')) { // Click on element of sorter
        const input = document.getElementById(event.target.getAttribute('for'));
        const inputValue = input.value;

        this.classList.toggle('expanded');
        input.checked = true;

        console.log('this._AppPhotographer', AppPhotographer);

        const appPhotographer = new AppPhotographer(this._PhotographersData);
        appPhotographer.CreatePhotographer(inputValue);

        console.log('IF', input, inputValue);
      } else { // Open the sorter
        this.classList.toggle('expanded');
        console.log('DONT contains', event.target, event.target.checked);
      }
    });
  }
}