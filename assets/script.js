const sitekey = '6LeLS10bAAAAAEE5oAINI-cSo9STuJrvDSLQY-o2';
const timeElm = document.querySelector('#copy-year');
const year = new Date().getUTCFullYear();
timeElm.textContent = year;
timeElm.setAttribute('datetime', year);

const contact = document.querySelector('#contact-addr');
const str = 'g!#sx!#sP!#s0!#sS!#sz!#sX!#sg!#sE!#s7!#sU!#sO!#sc!#se!#sG!#sV!#s1!#si!#sp!#s2!#sV!#s_!#sr!#se!#ss!#su';

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const { target } = entry;
    const wrapper = target.querySelector('div');
    if (entry.isIntersecting) {
      wrapper.classList.add('slide-in-from-bottom');
      target.classList.add('fade-in');
    }
  });
});

const cardElements = document.querySelectorAll('.card');
cardElements.forEach((elm) => {
  observer.observe(elm, { root: null, rootMargin: '0px', threshold: '50%' });
});

const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (event) => {
  contactForm.disabled = true;
  event.preventDefault();
  contactForm.querySelector('button[type="submit"]');
  const values = {
    name: document.getElementById('name').value,
    subject: document.getElementById('subject').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

  grecaptcha.ready(function () {
    grecaptcha.execute(sitekey, { action: 'submit' }).then((token) => {
      if (!token) return;

      document.querySelector('.contact-us-form').innerHTML = `
      <legend>Contact us</legend>
      <div class="success-message" role="alert">
        <p><strong>Thank you!</strong></p>
        <p>We are doing our best to reply as soon as possible to your message.</p>
      </div>`;
      emailjs.send('default_service', 'template_tyu9wv7', values, str.split('!#s').reverse().join(''));
    });
  });

  grecaptcha.render('recaptcha', {
    sitekey,
    'callback': response => {
      console.log(response);
    },
});
});
