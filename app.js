const change = document.querySelector('.area');
 

const arr = [
    {
        "feedback": "\"If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.\"",
        "name": "John Tarkpor",
        "job": "Junior Front-end Developer",
        "image": "./images/image-john.jpg"
    },
    {
        "feedback": "\"I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.\"",
        "name": "Tanya Sinclair",
        "job": "UX Engineer",
        "image": "./images/image-tanya.jpg"
    }
] 

let flag = 1;
change.addEventListener('click', (e)=> {
   if(e.target.classList.contains('next')){
       if(flag) {
        let change_1 = document.querySelector('.writen-content');
        change_1.innerHTML = arr[0].feedback;
        let change_2 = document.querySelector('.name');
        change_2.innerText = arr[0].name;
        let change_3 = document.querySelector('.job');
        change_3.innerHTML = arr[0].job;
        let change_4 = document.querySelector('.image');
        change_4.src = arr[0].image;
        flag = 0;
       }
   } 
   if(e.target.classList.contains('previous')) {
       if(flag === 0) {
        let change_1 = document.querySelector('.writen-content');
        change_1.innerHTML = arr[1].feedback;
        let change_2 = document.querySelector('.name');
        change_2.innerText = arr[1].name;
        let change_3 = document.querySelector('.job');
        change_3.innerHTML = arr[1].job;
        let change_4 = document.querySelector('.image');
        change_4.src = arr[1].image;
        flag = 1;
       }
   }
});