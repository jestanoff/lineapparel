const timeElm = document.querySelector('#copy-year');
const year = new Date().getUTCFullYear();
timeElm.textContent = year;
timeElm.setAttribute('datetime', year);

const contact = document.querySelector('#contact-addr');
const str =
  'k!#su!#s.!#so!#sc!#s.!#sl!#se!#sr!#sa!#sp!#sp!#sa!#se!#sn!#si!#sl!#s@!#sa!#sl!#se!#sg!#sn!#sa!#s:!#so!#st!#sl!#si!#sa!#sm';
contact.href = str.split('!#s').reverse().join('');
contact.textContent = contact.href.slice(7);
