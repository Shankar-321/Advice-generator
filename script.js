const adviceId = document.querySelector('#adviceId');
const adviceText = document.querySelector('#adviceText');
const btn = document.querySelector('#dice');

function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(adivceData => {
            const AdviceInt = adivceData.slip.id;
            const AdviceString = adivceData.slip.advice;

            adviceId.innerHTML = AdviceInt;
            adviceText.innerHTML = `<h4>"${AdviceString}"</h4>`;                // adviceText.textContent = adviceString

        })
        .catch(error => console.log(error));
}

btn.addEventListener('click', () => {
    getAdvice();
})

window.onload = () => {
    getAdvice();
}

