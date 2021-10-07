var socialMedia = {
  facebook: {
    img: './images/facebook.png',
    url: 'http://facebook.com',
    target: '_blank'
  },

  flickr: {
    img: './images/flickr.png',
    url: 'http://flickr.com',
    target: '_blank'
  },

  google: {
    img: './images/google.png',
    url: 'http://google.com',
    target: '_blank'
  },

  linkedin: {
    img: './images/linkedin.png',
    url: 'http://linkedin.com',
    target: '_blank'
  },

  meetup: {
    img: './images/meetup.png',
    url: 'http://meetup.com',
    target: '_blank'
  },

  twitter: {
    img: './images/twitter.png',
    url: 'http://twitter.com',
    target: '_blank'
  },

  wordpress: {
    img: './images/wordpress.png',
    url: 'http://wordpress.com',
    target: '_blank'
  },

  youtube: {
    img: './images/youtube.png',
    url: 'http://youtube.com',
    target: '_blank'
  }
};

let socialmediaicons = document.getElementsByClassName("socialmediaicons");

for (let i = 0; i < socialmediaicons.length; i++) {
  Object.keys(socialMedia).forEach(key => {//Se llama al objeto y con el KEYS cada llave del objeto y mediante el ciclo foreach se va recorriendo por todas las llaves que tenga el objeto
    const tagA = document.createElement("a");//Se crea una etiqueta a de HTML
    tagA.getAttribute("href");
    tagA.setAttribute("href", socialMedia[key].url);//Desde el href se redirecciona a otra pagina
    tagA.setAttribute("target", socialMedia[key].target)//Con el target se logra abrir la redireccion en una nueva pestaña

    socialmediaicons[i].appendChild(tagA);//Se crea el appendChild con la constante tagA
    const tagImg = document.createElement("img");//Se crea una etiqueta img de HTML
    tagA.appendChild(tagImg);//Se crea el appendChild refiriendo a la constante tagImg en la constante tagA
    tagImg.src  = socialMedia[key].img;//Se llama la imagen que esta dreto de la key
    tagImg.alt = key;
  })
}

