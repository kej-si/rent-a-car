const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <header id="nav_bar">
    <!--this is the nav bar-->
<div id="emri">
<a href="index.html" style="text-decoration:none"><h1 id="emrih">WheelDeal Rentals</h1></a>
    </div>
      <!--this is the nav bar-->
<nav>
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="rentacar.html">Rent a Car</a></li>
      <li><a href="aboutus.html">About us</a></li>
      <li><a href="mycart.html" class="active">My Cart</a></li>
      <li><a href="login.html" class="login">Login</a></li>
    </ul>
    </nav>
</header>
    `;
}

createNav();