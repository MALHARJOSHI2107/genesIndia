// auth.js
(function () {
  const protectedRoutes = [
    "sperm/entries/sperm_donor_entry.html",
    "oocyte/entries/oocyte_donor_entry.html",
  ];

  const currentPage = window.location.pathname.split("/").slice(-2).join("/");

  if (protectedRoutes.includes(currentPage)) {
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";

    if (!isLoggedIn) {
      window.location.href = "../../login.html";
    }
  }
})();
