function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li"); //cada imagem
  const tabContent = document.querySelectorAll(".js-tabcontent section"); // cada section

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");
    function activeTab(index) {

      tabContent.forEach((index) => {
        index.classList.remove("ativo");
      });

      tabContent[index].classList.add("ativo");

    }
    //remove a classe de todas e adiciona a que for clicada

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });

  }
}
initTabNav()

//Acordion
function faq() {

  const dtitle = document.querySelectorAll(".js-faq dt");

  const ddesc = document.querySelectorAll(".js-faq dd");

  if (dtitle.length && ddesc.length) {
    ddesc[0].classList.add('ativo');
    function activedd(index) {

      ddesc[index].classList.toggle('ativo');
    }


    dtitle.forEach((dt, index) => {
      dt.addEventListener("click", function () {
        activedd(index);
      });
    });
  }
}
faq();

function scrollSmooth() {

  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',

    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  })
}
//scoll suave;
scrollSmooth();

