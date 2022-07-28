/**
 * Manage dropdown sorter
 */
class DropdownSorter {
  constructor() {}

  /**
   * Generate dropdown HTML node
   * @returns HTML node
   */
  CreateDropdownSorter() {
    const $wrapper = document.createElement("div");
    const $text = document.createElement("span");
    const $dropdown = document.createElement("div");
    const dropdown = `
      <input type="radio" name="sortType" value="popularity" checked="checked" id="sort-popularity">
      <label for="sort-popularity">Popularité</label>

      <input type="radio" name="sortType" value="date" id="sort-date">
      <label for="sort-date">Date</label>

      <input type="radio" name="sortType" value="title" id="sort-title">
      <label for="sort-title">Titre</label>
    `;


    $text.innerText = "Trier par";
    $text.classList.add("photograph__content__sortby");

    $dropdown.innerHTML = dropdown;
    $dropdown.classList.add("dropdown");

    $wrapper.insertAdjacentElement("beforeend", $text);
    $wrapper.insertAdjacentElement("beforeend", $dropdown);
    $wrapper.classList.add("dropdown-container");

    return $wrapper;
  }
}