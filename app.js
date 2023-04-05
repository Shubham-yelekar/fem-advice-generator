
const adviceText = document.getElementById('quote-text');
const adviceId = document.getElementById('id-num');
const button = document.getElementById('btn')
const loading = document.getElementById('loader')

function showLoading() {
    loading.classList.add('display');
    setTimeout(() => {
        loading.classList.remove('display');
    }, 3000);
}

// function hideLoading() {
//     loading.classList.classList.remove('display')
// }


button.addEventListener('click', ()=>{
    showLoading()
    getAdvice()
})



function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then((data) => {
        // hideLoading()
        adviceText.innerHTML = `'${data.slip.advice}'`
        adviceId.innerHTML = `#${data.slip.id}`
    })
    
  }




