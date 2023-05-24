// get necessary elements
let quote_id = document.getElementById("count")
let quote = document.getElementById("quote")

const api = "https://api.adviceslip.com/advice"

let get_advice = async () => {
    let get_quote = await fetch(api)
    let quote_data = await get_quote.json()

    quote_id.innerText = ""+quote_data.slip.id
    quote.innerText = ""+quote_data.slip.advice
}

window.onload = get_advice
document.getElementById("quote-btn").onclick = get_advice