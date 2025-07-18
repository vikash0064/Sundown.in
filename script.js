
const tabs = document.querySelectorAll("#tabs h2");
const image=document.getElementById("page4-img");
const desc = document.getElementById("desc");
// Show image when hovering on a specific element

function page4Animation(){
var elemC = document.querySelector("#elem-container");
var fixed = document.querySelector("#fixed-image");
var elems = document.querySelectorAll(".elem");
elems.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        var image = e.getAttribute("data-image");
        fixed.style.backgroundImage = `url(${image})`;
        fixed.style.display = "block";
    });
});


// Hide image when leaving the whole container
    elemC.addEventListener("mouseleave", function(){
    fixed.style.display = "none";
});
}

const descriptions = {
  Design: "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.",
  Project: "We manage each project with precision and creativity, ensuring timelines, resources, and communication are streamlined from concept to completion.",
  Execution: "From the first brick to the final reveal, we focus on delivering quality and innovation in every step of execution, transforming vision into tangible impact."
};

tabs.forEach(tab=>{
    tab.addEventListener("click",()=>{
        const imageURL =tab.getAttribute("data-img");
        const tabId = tab.id;
        image.src =imageURL;
        desc.textContent=descriptions[tabId];

        tabs.forEach(t=>t.classList.remove("active"));
        tab.classList.add("active");

    });
});

function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 20,
    });
}
swiperAnimation()
page4Animation()