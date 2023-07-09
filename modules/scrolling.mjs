export function smoothScroll() {
  const link = document.querySelector(".retour");
  link.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
