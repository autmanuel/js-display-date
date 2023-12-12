
//all commands below will be only executed when the DOM has been loaded
window.onload = () => {

    let dateShown = false;
    //created boolean for function to hide the date after clicking button again, watch 22-27
    console.log('Hello World');

    const buttonElement = document.getElementById('button');
    //created unchangeable id for button

    if(!buttonElement)
        throw new Error('Button not found!!');
    //boolean that throws a error if button doesnt exist, if true, error will be not thrown

    const eventListener = () => {
        const displayElement = document.getElementById('display');
        //create function that will be executed when button is clicked, look line 34

        if(!displayElement)
            throw new Error(`Display Element not found!!`);
        // boolean to check if display element exist or not
        // date shown is default false!!

        if(!dateShown) { // when datesshown is false
            displayElement.innerHTML = Date(); // display date text
            dateShown = true; // set date shown to true
        } else { // if dateshown is true
            displayElement.innerHTML = ''; // reset display to empty
            dateShown = false; // set date shown to false;
        }
    }
    //line 16 will be executed if button got clicked
    buttonElement.addEventListener('click',eventListener);


}