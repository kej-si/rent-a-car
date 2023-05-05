const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <footer>
  <div class="footer-container">
    <div class="footer-column">
    <a href="index.html"><h3 class="footer-logo"> WheelDeal Rentals </h3></a>
    </div>
  <div class="footer-column">
      <h3>Addresses</h3>
        <p>Mother Tereza Airport</p>
        <p>Tirana,Albania</p>
        <p>Newborn Stadium</p>
        <p>Prishtina, Kosova</p>

      </ul>
    </div>
  <div class="footer-column">
      <h3>Contact</h3>
        <p>Email: info@wheeldeal.com</p>
        <p>Phone: (355) 694490198</p>
    </div>
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