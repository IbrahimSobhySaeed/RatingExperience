let stars=document.querySelectorAll('.stars i');

stars.forEach((star,index)=>{
    // add event lisener  that run when click
    star.addEventListener('click',()=>{

        stars.forEach((star,index2)=>{

            index >= index2 ? star.classList.add('active') : star.classList.remove('active')

        })

    })







})