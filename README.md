# Card Battle [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

Card Battle is a turn based card game.  We decided to create this game...  This is a full-stack application.  It uses a mysql database, an express backend, and a handlebars view engine to render the page.

## Table of Contents 

- [Usage](#Usage)
- [Credits](#Credits)
- [License](#License)
- [How to Contribute](#How-to-Contribute)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation

Installation instructions: `npm i`   
On MySQL CLI: run `SOURCE db/schema.sql`  
On CLI: run `npm run seed`  
Create an .env file in the root directory with three variables with your respective credentials: `DB_NAME='database name'` `DB_USER='user name'` `DB_PASSWORD='SQL password'`  

## Usage

To play this game, you either need to sign in or play as a guest.  If you are playing as a guest, you cannot pick your own deck or save your score.  If you chose to sign in you will first have to customize your deck.  After that you can then play.  The rules of the game are simple.  First select the card you would like to play.  After that choose what you would like to do.  You can either skip, defend, or attack.  Skip allows you to change turns without playing a card.  Defend allows you to heal yourself.  Attack allows you to do damage to the enemy AI.  The game is over when either the AI or player reaches 0 hp.

![Example Gif](./public/images/Card-Battle-gif.gif)

## Credits

[Morgan Tolman](https://github.com/unheardof77)
[Jerome Nixon](https://github.com/jeromemn)  
[Tristan Saragosa](https://github.com/trufl)  
[Leo Roccaforte](https://github.com/leorocca40)  
[James Xalis](https://github.com/jamesxalis)  


## License

This application uses the MIT license.

## How to Contribute

If you would like to contribute, first fork the application from github then make a pull request with a detailed description of why you think this would improve our game.

## Tests

N/A

## Questions

If you have any further questions, concerns, or feedback feel free to email Morgan at morgan.tolman04@gmail.com, Jerome at jeromenixon95@gmail.com, Tristan at endlesstruffle80@gmail.com, Leo at leocubshat@gmail.com, and James at jamesxalis@icloud.com.
---