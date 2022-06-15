const postVar = [
  {
    isBooked: false,
    pseudo: "Melanight",
    isSponsored: false,
    avatar: "http://via.placeholder.com/50",
    imgUrl: "./img/Capture d’écran 2022-06-02 140052.png",
    isLiked: false,
    likes: 380,
  },
  {
    isBooked: true,
    pseudo: "LucieLpb",
    isSponsored: true,
    avatar: "http://via.placeholder.com/50",
    imgUrl: "./img/vanessa.jpg",
    isLiked: false,
    likes: 667,
  },
  {
    isBooked: false,
    pseudo: "k_rlos",
    isSponsored: false,
    avatar: "http://via.placeholder.com/50",
    imgUrl: "./img/vanessa.jpg",
    isLiked: false,
    likes: 666,
  },

];

const app = document.getElementById("appMel");

const render = () => {
  postVar.map((data) => {
    const posteu = document.createElement("div");
    app.appendChild(posteu);
    // création du grand papa

    const hautDiv = document.createElement("div");
    hautDiv.classList.add("haut");
    posteu.appendChild(hautDiv);
    // div en haut

    const imgAvat = document.createElement("img");
    imgAvat.classList.add("space10");
    imgAvat.src = data.avatar;
    hautDiv.appendChild(imgAvat);
    // img Avatar

    const h2Pseudo = document.createElement("h2");
    h2Pseudo.textContent = data.pseudo;
    hautDiv.appendChild(h2Pseudo);
    //pseudo

    if (data.isSponsored) {
      const pSponso = document.createElement("p");
      pSponso.classList.add("sponso");
      pSponso.textContent = `Sponsored`;
      hautDiv.appendChild(pSponso);
    }
    //if sponsored

    const imgDiv = document.createElement("div");
    imgDiv.classList.add("imgCenter");
    posteu.appendChild(imgDiv);
    // div de la publication

    const imgPost = document.createElement("img");
    imgPost.src = data.imgUrl;
    imgDiv.appendChild(imgPost);
    // img de la publication

    const basDiv = document.createElement("div");
    posteu.appendChild(basDiv);
    basDiv.classList.add("bas");
    // div du bas

    const iconSDiv = document.createElement("div");
    iconSDiv.classList.add("iconS");
    basDiv.appendChild(iconSDiv);
    // papa des icon

    const i_Hearth = document.createElement("i");
    i_Hearth.classList.add("fa-heart");
    i_Hearth.classList.add("fa-regular");
    iconSDiv.appendChild(i_Hearth);

    const i_comment = document.createElement("i");
    i_comment.classList.add("fa-comment");
    i_comment.classList.add("fa-regular");
    iconSDiv.appendChild(i_comment);

    const i_send = document.createElement("i");
    i_send.classList.add("fa-paper-plane");
    i_send.classList.add("fa-regular");
    iconSDiv.appendChild(i_send);

    const i_fav = document.createElement("i");
    i_fav.classList.add("fa-bookmark");
    i_fav.classList.add("fa-regular");
    iconSDiv.appendChild(i_fav);
    // les icons

    const spacePost = document.createElement('div');
    spacePost.classList.add('spaceDown');
    posteu.appendChild(spacePost);
    // space entre publi
  });
};

render();
