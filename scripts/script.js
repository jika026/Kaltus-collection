class Webpages {
  constructor(container) {
    this.container = container;
    this.currentPage = container.querySelectorAll(".pages ul");
  }
  init() {
    this.currentPage.forEach((page) => {
      page.addEventListener("click", (e) => {
        const lists = this.container.querySelectorAll(".pages ul a li");
        lists.forEach((list) => {
          list.classList.remove("active");
          console.log("Reached here Successfully!");
        });
        e.target.classList.add("active");
        console.log(e.target);
      });
    });
  }
}
const webPages = new Webpages(document.querySelector(".pages"));
webPages.init();
