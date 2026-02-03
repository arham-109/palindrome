function check(event) {
    event.preventDefault()

    let userInput = document.querySelector("#input").value

    let new_value = userInput.split("").reverse().join("")

    let output = document.querySelector("#output")

    if (
        userInput.toLowerCase() == new_value.toLowerCase()
    ) {
        document.querySelector("#output").innerText = "Your Word is a Palindrome"
    }

    else {
        document.querySelector("#output").innerText = "Your word is not a Palindrome"
    }




}