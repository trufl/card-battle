const pickedCards = [];

const submitBtn = document.getElementById('submit-btn');

const pickUsersCard = () => {
    const cardArea = document.querySelector('#card-img-area');

    cardArea.addEventListener('click', clickHandler);
} 

const clickHandler = (event) => {
    //checks to make sure seven cards havent been selected
    if(pickedCards.length < 7) {

        //if clicked item is an image then proceed
        if(event.target === Image) {

            //get card id from img attribute
            const cardId = event.target.getAttribute('data-id');

            // add card id to array if not already selected
            if(!pickedCards.includes(cardId)) {
                pickedCards.push(cardId);

                //add class that applies css to show that the card has been selected
                event.target.classList.add('custom-bgrnd-selected');

                 //add event listener to img so that a double click can unselect card
                event.target.addEventListener('dblclick', dblHandler);

                if(pickedCards.length === 7) {

                    // if seven cards have been selected then show submit button and add event listener to send data to server
                    submitBtn.classList.add('show-button');
                    submitBtn.addEventListener('click', submitHandler);
                }
            }
        }
    }
}

const dblHandler = (event) => {
    //get id again from img attribute
    const cardId = event.target.getAttribute('data-id');

    if(pickedCards.includes(cardId)) {

        //after making sure card is in array get index of card in array
        const index = pickedCards.indexOf(cardId);

        //double checks to make sure card was found
        if(index > -1) {
            //if found remove item from array
            pickedCards.splice(index, 1);
        }

        //remove event listener from img
        event.target.removeEventListener('dblclick', dblHandler);

        //removes custom background to let user know card was unselected
        event.target.classList.remove("custom-bgrnd-selected");

        if(pickedCards.length < 7) {
            //makes sure card was removed
            //then remove event listener from submit button
            submitBtn.removeEventListener('click', submitHandler);

            //then hide submit button
            submitBtn.classList.remove("show-button");
        }
    }
}

const submitHandler = () => {
    if(pickedCards.length === 7) {
        const [card_1_id, card_2_id, card_3_id, card_4_id, card_5_id, card_6_id, card_7_id] = pickedCards;

        fetch('api/card-pick', {
            method: 'POST',
            headers: ["content-type", "application-json"],
            body: {
                card_1_id,
                card_2_id,
                card_3_id,
                card_4_id,
                card_5_id,
                card_6_id,
                card_7_id,
            }
        })
        ,then((res) => {
            if(res.ok) {
                window.location.replace('/character-customize')
            }
        })
        .catch((err) => console.error(err));
    }
}

// To use when ready for deployment
//* pickUsersCard();