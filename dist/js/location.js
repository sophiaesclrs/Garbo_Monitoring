// for the sub-menu icon
const menuBtn = document.querySelector(".menu-btn");
    const navigation = document.querySelector(".navigation");

    menuBtn.addEventListener("click", () =>{
      menuBtn.classList.toggle("active");
      navigation.classList.toggle("active");
    })

    const btns = document.querySelectorAll(".nav-btn");

    var sliderNav = function(manual){
      btns.forEach((btn) => {
        btn.classList.remove("active");
      });
      
      btns[manual].classList.add("active");
    }

    btns.forEach((btn, i) => {
      btn.addEventListener("click", () => {

        sliderNav(i);
      });
    });

    let subMenu = document.getElementById("subMenu");

    function toggleMenu(){
      subMenu.classList.toggle("open-menu");
    }

// for the whole page
const sr = ScrollReveal ({
  distance: '65px',
  duration: 2600,
  delay: 450,
  reset: true
});

sr.reveal('.content', {delay:200, origin:'top'});
sr.reveal('.instruction', {delay:250, origin:'top'});
sr.reveal('.map', {delay:250, origin:'top'});