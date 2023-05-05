// here is created a function called createNav which creates the navigation bar in html
//the reason for this is so that the navigation bar to be inserted dynamically into the page using js
//this is the aboutus.html navbar
const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <header id="nav_bar">
    <!--this is the nav bar-->
<div id="emri"> <!--here is added the name of the brand WheelDeal Rentals and it is inserted inside the a tag so when the 
user clicks over it it reloads the hopepage-->
<a href="index.html" style="text-decoration:none"><h1 id="emrih">WheelDeal Rentals</h1></a>
    </div>
      <!--this is the nav bar-->
      <!-- to create the navbar we used unorderd list and using the li tag we inserted the names of each page. inside the 
li tag we used the a tag so that the page is loaded when the user clicks it-->
<nav>
    <ul>
      <li><a href="index.html">Home</a></li>  <!--the home page-->
      <li><a href="rentacar.html">Rent a Car</a></li>   <!--the rent a car page -->
      <li><a href="aboutus.html" class="active">About us</a></li>   <!--the aboutus page  has the class active which changes the background
      based on what page the user is-->
      <li><a href="mycart.html">My Cart</a></li>  <!--the my cart page -->
      <li><a href="login.html" class="login">Login</a></li>   <!--the login page -->
    </ul>
    </nav>
</header>
    `;
}

createNav();