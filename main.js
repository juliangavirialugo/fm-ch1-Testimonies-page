const prevBtn =document.querySelector('#prev-btn');
const nextBtn =document.querySelector('#next-btn');
const userImg =document.querySelector('#user-img');
const userTestimonial = document.querySelector('.user-testimonial')
const userName = document.querySelector('.user-name')
const userDegree = document.querySelector('.user-degree')

const user = [
    {
        name: 'Tanya Sinclair',
        imageUrl: './images/image-tanya.jpg',
        testimonial: '“I’ve been interested in coding for a while but never taken ' +
            'the jump, until now. I couldn’t recommend this course enough. ' +
            'I’m now in the job of my dreams and so excited about the future.”',
        degree: 'UX Engineer'
    },
    {
        name: 'John Tarkop',
        imageUrl: './images/image-john.jpg',
        testimonial: '“ If you want to lay the best foundation possible I’d recommend taking' +
            'this course. The depth the instructors go into is incredible. I now feel' +
            ' so confident about starting up as a professional developer. ”',
        degree: 'Junior Front-end Developer',
    },
   
];


let imageIndex =0;

const updateProfileInfo = () =>{
    userImg.setAttribute('src', user[imageIndex].imageUrl)
    userTestimonial.textContent = user[imageIndex].testimonial
    userName.textContent = user[imageIndex].name,
    userDegree.textContent = user[imageIndex].degree
}

prevBtn.addEventListener('click', ()=>{
    if (imageIndex===0) {
        imageIndex=user.length -1;
    }else{imageIndex--}
    
    updateProfileInfo()
});
nextBtn.addEventListener('click', () => {
    if (imageIndex===user.length -1) {
        imageIndex=0;
    }else{imageIndex++}
    userImg.setAttribute('src', user[imageIndex].imageUrl);
    updateProfileInfo()
});


