

window.onload = () => {
    console.log('Hello World');

    const buttonElement = document.getElementById('button');

    if(!buttonElement)
        throw new Error('Button not found!!');

    const eventListener = () => {
        const displayElement = document.getElementById('display');

        if(!displayElement)
            throw new Error(`Display Element not found!!`);

        displayElement.innerHTML = Date();
    }

    buttonElement.addEventListener('click',eventListener);

}