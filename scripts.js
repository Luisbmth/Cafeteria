document.addEventListener("DOMContentLoaded", function () {
  const searchIcon = document.getElementById("search-icon");
  const searchInput = document.getElementById("search-input");

  searchIcon.addEventListener("click", () => {
      if (searchInput.style.display === "none" || searchInput.style.display === "") {
          searchInput.style.display = "inline-block";
          searchInput.focus();
      } else {
          searchInput.style.display = "none";
      }
  });

  searchInput.addEventListener("input", function () {
      const searchTerm = this.value.toLowerCase();
      const menuItems = document.querySelectorAll("#menu .box");

      menuItems.forEach(item => {
          const name = item.querySelector("h3").textContent.toLowerCase();
          if (searchTerm && name.includes(searchTerm)) {
              item.classList.add("highlight");
          } else {
              item.classList.remove("highlight");
          }
      });
  });

  searchInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
          const searchTerm = this.value.toLowerCase();
          const menuItems = document.querySelectorAll("#menu .box");

          for (let item of menuItems) {
              const name = item.querySelector("h3").textContent.toLowerCase();
              if (name.includes(searchTerm)) {
                  item.scrollIntoView({ behavior: "smooth", block: "center" });
                  break;
              }
          }
      }
  });

  document.addEventListener("click", function (e) {
      const isClickInside = searchInput.contains(e.target) || searchIcon.contains(e.target);
      if (!isClickInside) {
          searchInput.style.display = "none";
      }
  });
});
