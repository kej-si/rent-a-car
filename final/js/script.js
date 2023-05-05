document.querySelectorAll("nav a").forEach(function(navItem) {
  navItem.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link behavior

    // Remove the active class from the previous active navbar item
    document.querySelector("nav a.active").classList.remove("active");

    // Add the active class to the clicked navbar item
    this.classList.add("active");

    // Navigate to the URL of the clicked navbar item
    window.location.href = this.href;
  });
});
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn1')];
const preBtn = [...document.querySelectorAll('.pre-btn1')];

productContainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})