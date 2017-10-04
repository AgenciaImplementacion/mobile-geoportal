require('./toc.css');


// http://2ality.com/2015/01/template-strings-html.html

function htmlEscape(str) {
    return str.replace(/&/g, '&amp;') // first!
              .replace(/>/g, '&gt;')
              .replace(/</g, '&lt;')
              .replace(/"/g, '&quot;')
              .replace(/'/g, '&#39;')
              .replace(/`/g, '&#96;');
}

var people = [
    { first: 'Jane', last: 'Bond', phones: ['312341234', '31421234', 'asdjfkajsd\'klf;&<br>jasdfs'] },
    { first: 'Lars', last: 'Croft', phones: ['234234234', '522343434'] }
];

/**
 * Muestra en una plantilla un UL
 */
const template = addrs => `
  Ejemplo 1:
  <ul>
  ${addrs.map(addr => `
      <li>
        <b>${addr.first + ' ' + addr.last}</b>
        <ul>
          ${addr.phones.map(phone => `
            <li>${phone}</li>
          `).join('')}
        </ul>
      </li>
  `).join('')}
  </ul>
`;

/**
 * Muestra en una plantilla un UL
 * escapando los caracteres HTML del telefono
 */
const template2 = addrs => `
  Ejemplo 2:
  <ul>
  ${addrs.map(addr => `
      <li>
        <b>${addr.first + ' ' + addr.last}</b>
        <ul>
          ${addr.phones.map(phone => `
            <li>${htmlEscape(phone)}</li>
          `).join('')}
        </ul>
      </li>
  `).join('')}
  </ul>
`;


/**
 * Muestra en una plantilla un UL
 * escapando los telefonos que no son números
 */
const template3 = addrs => `
  Ejemplo 3:
  <ul>
  ${addrs.map(addr => `
      <li>
        <b>${addr.first + ' ' + addr.last}</b>
        <ul>
          ${addr.phones.filter(phone => Number(phone) + '' === phone).map(phone => `
            <li>${htmlEscape(phone)}</li>
          `).join('')}
        </ul>
      </li>
  `).join('')}
  </ul>
`;


var rendered = template(people);
$('#contenido-barra-lateral').append(rendered);
console.log(people, rendered);

rendered = template2(people);
$('#contenido-barra-lateral').append(rendered);
console.log(people, rendered);

rendered = template3(people);
$('#contenido-barra-lateral').append(rendered);
console.log(people, rendered);
