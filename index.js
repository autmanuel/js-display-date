

window.onload = () => {
    let dateShown = false;
    console.log('Hello World');

    const buttonElement = document.getElementById('button');

    if(!buttonElement)
        throw new Error('Button not found!!');

    const eventListener = () => {
        const displayElement = document.getElementById('display');

        if(!displayElement)
            throw new Error(`Display Element not found!!`);

        // date shown is default false!!

        if(!dateShown) { // when datesshown is false
            displayElement.innerHTML = Date(); // display date text
            dateShown = true; // set date shown to true
        } else { // if dateshown is true 
            displayElement.innerHTML = ''; // reset display to empty
            dateShown = false; // set date shown to false;
        }
    }

    buttonElement.addEventListener('click',eventListener);

}