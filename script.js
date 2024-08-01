
       
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.addEventListener("mousemove", draw);

// Initialize lastPos variable
let lastPos;

function resize() {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}
resize();

function getMousePos(event) {
const rect = canvas.getBoundingClientRect();
return {
x: event.clientX - rect.left,
y: event.clientY - rect.top
};
}

function draw(event) {
if (!lastPos) return; // Return if lastPos is not set

ctx.beginPath();
ctx.lineWidth = 30;
ctx.lineCap = "round";
ctx.strokeStyle = "#2D00FF";

const mousePos = getMousePos(event);
ctx.moveTo(lastPos.x, lastPos.y);
ctx.lineTo(mousePos.x, mousePos.y);
ctx.stroke();

lastPos = mousePos;
}

canvas.addEventListener("mousedown", (event) => {
lastPos = getMousePos(event);
});

canvas.addEventListener("mouseup", () => {
lastPos = null;
});


const sections = document.querySelectorAll('.hi, .works, .about');
const navbarItems = document.querySelectorAll('.header-list-item li');

navbarItems.forEach((item, index) => {
item.addEventListener('click', () => {
sections[index].scrollIntoView({ behavior: 'smooth' });

// Update active class on clicked item
navbarItems.forEach((navItem, i) => {
 if (i === index) {
   navItem.classList.add('active');
 } else {
   navItem.classList.remove('active');
 }
});
});
});

window.addEventListener('scroll', () => {
sections.forEach((section, index) => {
const rect = section.getBoundingClientRect();
if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
 navbarItems.forEach((item, i) => {
   if (i === index) {
     item.classList.add('active');
   } else {
     item.classList.remove('active');
   }
 });
}
});
});

const workItems = document.querySelectorAll('.work-item');

workItems.forEach((workItem) => {
const cursorImage = workItem.querySelector('.cursor-image');

workItem.addEventListener('mouseenter', () => {
cursorImage.style.display = 'block';
});

workItem.addEventListener('mousemove', (e) => {
const xOffset = e.clientX - workItem.getBoundingClientRect().left;
const yOffset = e.clientY - workItem.getBoundingClientRect().top;

cursorImage.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
});

workItem.addEventListener('mouseleave', () => {
cursorImage.style.display = 'none';
});
});
