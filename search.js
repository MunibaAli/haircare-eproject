document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.querySelector(".search-icon");
    const searchDropdown = document.getElementById("searchDropdown");
    const closeSearch = document.querySelector(".close-search");
  
    searchIcon.addEventListener("click", function (e) {
      e.stopPropagation();
      // Toggle the .show class
      searchDropdown.classList.toggle("show");
    });
  
    closeSearch.addEventListener("click", function () {
      searchDropdown.classList.remove("show");
    });
  
    // Close if user clicks outside
    document.addEventListener("click", function (event) {
      if (!searchDropdown.contains(event.target) && !searchIcon.contains(event.target)) {
        searchDropdown.classList.remove("show");
      }
    });
  });
  