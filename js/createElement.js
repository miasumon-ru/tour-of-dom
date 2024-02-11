
// 1 . where to add

const placeList = document.getElementById('places-list');

// what to be added

const li = document.createElement('li');

li.innerText = 'pahartoli bon';

placeList.appendChild(li)


// again 

const mainContainer = document.getElementById('main-container');

const section = document.createElement('section');

const h1 = document.createElement('h1');

h1.innerText = 'My Food List';

section.appendChild(h1);



const ul = document.createElement('ul');

const li2 = document.createElement('li');
li2.innerText = 'biryani'
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'borhani'
ul.appendChild(li3);

const li4 = document.createElement('li');
li4.innerText = 'salad'
ul.appendChild(li4);

section.appendChild(ul);

mainContainer.appendChild(section)

// setting innerHTML directly

const sectionDress = document.createElement('section');

sectionDress.innerHTML = `

<h1> My dress section </h1>

<ul>
   <li> t-shirt </li>
   <li> lungi</li>
   <li> sando genji</li>

</ul>
   
`

mainContainer.appendChild(sectionDress);

const sections = document.querySelectorAll('section')


for ( const section of sections){
//   console.log(section)
section.style.border = '2px solid red'
section.style.marginBottom = '10px'
section.style.borderRadius = '20px'
section.style.paddingLeft= '20px'
section.style.backgroundColor = 'lightGray'
}
console.log(sections);



