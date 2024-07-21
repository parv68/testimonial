const testimonial = [
    {
        name:"Cheris G",
        img:"https://randomuser.me/api/portraits/women/1.jpg",
        text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod."
    },
    {
        name:"Rosetta Q",
        img:"https://plus.unsplash.com/premium_photo-1664541336896-b3d5f7dec9a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod."
    },
    {
        name:"Constantine V",
        img:"https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod."
    }
];
const imgEl = document.querySelector('img')
const usernameEl = document.querySelector('.username')
const textEl = document.querySelector('.text')
let idx = 0;
updateTestimonial()
function updateTestimonial(){
    const {name, img, text} = testimonial[idx]
    imgEl.src = img
    usernameEl.textContent = name
    textEl.textContent = text
    idx++
    if(idx === testimonial.length) idx = 0
    setTimeout(() =>{
        updateTestimonial()
    }, 2000)
}