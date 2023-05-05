// here is created a function called createFooter which creates the footer bar 
//the reason for this is so that the footer to be inserted dynamically into the page using js

const createFooter = () => {
  let footer = document.querySelector('footer');

  footer.innerHTML = `
    <footer>   <!-- the footer tag    -->
  <div class="footer-container">  <!-- the main div to be divided into 4 equal parts  -->
    <div class="footer-column">   <!-- the first div here we added the name of the brand clickable to send u to the top of the page-->
    <a href="index.html"><h3 class="footer-logo"> WheelDeal Rentals </h3></a>
    </div>
  <div class="footer-column">  <!--  this is the  second div where we added the physical addresses of the shop the tags used were h3 and p  -->
      <h3>Addresses</h3>
        <p>Mother Tereza Airport</p>
        <p>Tirana,Albania</p>
        <p>Newborn Stadium</p>
        <p>Prishtina, Kosova</p>
    </div>

<!-- this is the third div with our contact information if the users want further assistance-->
  <div class="footer-column">
      <h3>Contact</h3>
        <p>Email: info@wheeldeal.com</p>
        <p>Phone: (355) 694490198</p>
        <p>Technical support: (355) 694490198</p>
    </div>

<!-- this is the fourth div with our social medias each sends u to our social media page-->
    <div class="footer-column">
      <h3>Connect with Us</h3>
      <div class="social-icons">
        <p class="fab fa-facebook-f"><a href="https://www.facebook.com/profile.php?id=100079656861433" target="_blank">Facebook</p></a>
        <p class="fab fa-instagram"><a href="https://www.instagram.com/kejsii.02/" target="_blank">Instagram</p></a>
        <a href="https://www.linkedin.com/in/kejsi-mu%C3%A7a-4aa00a19b/"><p class="fab fa-linkedin-in" target="_blank">LinkedIn</p></a>
      </div>
    </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2023 WheelDeal Rentals. All Rights Reserved.</p>
    </div>
  </footer>
    `;
}

createFooter();