const mel = document.getElementById("mel");

for (let i = 0; i < 20; i++) {
mel.innerHTML += `
<div class="haut">
<img src="http://via.placeholder.com/50" class="space10" alt="avatar" />
<h2>Vaness_K_hoot</h2>
<p class="sponso">Sponsorisé</p>
</div>
<div class="imgCenter">
<img src="./img/vanessa.jpg" alt="publication" />
</div>
<div class="bas">
<div class="iconS">
  <i class="fa-regular fa-heart"></i>
  <i class="fa-regular fa-comment"></i>
  <i class="fa-regular fa-paper-plane"></i>
  <i class="fa-regular fa-bookmark"></i>
</div>
</div>`;
}
