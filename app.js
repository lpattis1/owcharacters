// Variables
const rightBtn = document.querySelector(".right-btn");
const leftBtn = document.querySelector(".left-btn");
const imgSlider = document.querySelector(".img-slider");

// Array to store characters
const image = [
  {
    name: "Lucio",
    description:
      "On the battlefield, Lúcio’s cutting-edge Sonic Amplifier buffets enemies with projectiles and knocks foes back with blasts of sound. His songs can both heal his team or boost their movement speed, and he can switch between tracks on the fly.",
    img: "1.jpg",
  },

  {
    name: "Moira",
    description:
      "Moira’s biotic abilities enable her to contribute healing or damage in any crisis. While Biotic Grasp gives Moira short-range options, her Biotic Orbs contribute longer-range, hands-off damage and healing; she can also Fade to escape groups or remain close to allies in need of support. Once she’s charged Coalescence, Moira can save multiple allies from elimination at once or finish off weakened enemies.",
    img: "2.jpg",
  },

  {
    name: "Sigma",
    description:
      "Sigma is an eccentric astrophysicist and volatile tank who gained the power to control gravity in an orbital experiment gone wrong. Manipulated by Talon and deployed as a living weapon, Sigma’s presence on the battlefield cannot be ignored.",
    img: "3.jpg",
  },

  {
    name: "Winston",
    description:
      "Winston wields impressive inventions—a jump pack, electricity-blasting Tesla Cannon, portable shield projector and more—with literal gorilla strength.",
    img: "4.jpg",
  },

  {
    name: "Symmetra",
    description:
      "Symmetra utilizes her light-bending Photon Projector to dispatch adversaries, shield her associates, construct teleportation pads and deploy particle-blasting Sentry Turrets.",
    img: "5.jpg",
  },

  {
    name: "Bastion",
    description:
      "Repair protocols and the ability to transform between stationary Sentry, mobile Recon and devastating Tank configurations provide Bastion with a high damage output at the cost of mobility.",
    img: "6.jpg",
  },

  {
    name: "Hanzo",
    description:
      "Hanzo’s versatile arrows can reveal his enemies or rapid fire to strike multiple targets. He can scale walls to fire his bow from on high, or summon a titanic spirit dragon.",
    img: "7.jpg",
  },
];

// Function to run code
/**
 * @param  {container} slide - the image slider container where I will put the background images.
 * @param  {array} image - the array which holds all the characters in stored objects
 * @param  {button} prevBtn - the button to go back
 * @param  {button} nextBtn - the button to go forward
 */

function slider(slide, image, prevBtn, nextBtn) {
  let counter = 0;
  window.onload = function () {
    slide.style.backgroundImage = `url(/img/${image[counter].img})`;
    slide.innerHTML = `
    <div class="chara-container">
    <h2 class="chara-name">${image[counter].name}</h2>
    <p class="chara-description">${image[counter].description}</p>
    </div>
    `;
  };

  prevBtn.addEventListener("click", function (e) {
    if (counter < 0) {
      counter = image.length;
    }
    counter--;
    slide.style.backgroundImage = `url(/img/${image[counter].img})`;
    slide.innerHTML = `
    <div class="chara-container">
    <h2 class="chara-name">${image[counter].name}</h2>
    <p class="chara-description">${image[counter].description}</p>
    </div>
    `;
  });

  nextBtn.addEventListener("click", function (e) {
    if (counter < image.length - 1) {
      counter++;
    } else {
      counter = 0;
    }

    slide.style.backgroundImage = `url(/img/${image[counter].img})`;
    slide.innerHTML = `
    <div class="chara-container">
    <h2>${image[counter].name}</h2>
    <p>${image[counter].description}</p>
    </div>
    `;
  });
}

// Called function
slider(imgSlider, image, leftBtn, rightBtn);
