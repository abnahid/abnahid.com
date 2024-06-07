const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY >0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '25px',
	duration: 2500,
	reset: true
})

sr.reveal('.home-section',{delay:190, origin:'bottom'})

sr.reveal('.about,.services',{delay:200, origin:'bottom'})

///-------------- faq --------------------------///

const faqItems = document.querySelectorAll('#Questions li');

faqItems.forEach(item => {
  const label = item.querySelector('label');
  const content = item.querySelector('.content');
  const icon = label.querySelector('i');

  label.addEventListener('click', () => {
    faqItems.forEach(otherItem => {
      if (otherItem !== item) {
        const otherContent = otherItem.querySelector('.content');
        const otherIcon = otherItem.querySelector('i');

        otherContent.style.maxHeight = "0";
        otherIcon.classList.remove('active');
      }
    });

    if (content.style.maxHeight && content.style.maxHeight !== "0px") {
      content.style.maxHeight = "0";
      icon.classList.remove('active');
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      icon.classList.add('active');
    }
  });
});
