// let count = 0;
// //to select value and btn
// const value = document.querySelector('#value')
// const btns = document.querySelectorAll('.btn')
// // console.log(btn);


// btns.forEach(function(btn){
// btn.addEventListener('click', function(e){
//     const style = e.currentTarget.classList


//     if(style.contains('decrease')){
//         count--
//     }else if(style.contains('increase')){
//         count++
//     }else{
//         count = 0
//     }
//     value.textContent = count;
//     if(count > 0){
//         value.style.color = "green"
//     }
//     if(count < 0){
//         value.style.color = "red"
//     }
//     if(count === 0){
//         value.style.color = "#000"
//     }

// })
// })



//create a variable
let count = 0;

const btns = document.querySelectorAll('.btn')
const value= document.querySelector('#value')
btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const style = e.currentTarget.classList

        if(style.contains('decrease')){
            count--
        }else if(style.contains('increase')){
            count++
        } else{
            count = 0
        }
        value.textContent = count
        if (count > 0){
            value.style.color = "Green"
        
        }  if (count < 0){
            value.style.color = "red"
            
        }  if (count === 0){
            value.style.color = "black"
        }
    })
})