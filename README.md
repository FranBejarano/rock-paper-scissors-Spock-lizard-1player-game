# RPS Challenge

Instructions
-------

* Feel free to use google, your notes, books, etc. but work on your own
* If you refer to the solution of another coach or trainee, please put a link to that in your README
* If you have a partial solution, **still check in a partial solution**
* You must submit a pull request to this repo with your code by 9:30am Monday morning

Task
----

The DFA team ( **DFAT** ) have asked you to provide a game for them. The daily grind is pretty tough and they need time to have a little fun.

As usual please start by

* Forking this repo
* TEST driving development of your app

Your task is to provide a _Rock, Paper, Scissors_ game for them so they can play on the web with the following user stories:

### Acceptance Criteria

```
As a DFAT member
So that I can see my name
I would like to register my name before playing an online game

As a DFAT member
So that I can enjoy myself away from the daily grind
I would like to be able to play rock/paper/scissors
```

Hints on functionality

* the DFAT member should be able to enter their name before the game
* the DFAT member will be presented the choices (rock, paper and scissors)
* the DFAT member can choose one option
* the game will choose a random option
* a winner will be declared

## Basic Rules

* Rock beats Scissors
* Scissors beats Paper
* Paper beats Rock

In code review we'll be hoping to see:

* All tests passing
* High test coverage
* The code is elegant: every class has a clear responsibility, methods are short etc.

### Extended Acceptance Criteria

#### Multiplayer

Change the game so that two DFAT members can play against each other ( _yes there are two of them_ ).

#### Rock, Paper, Scissors, Spock, Lizard

Use the _special_ rules ( _you can find them here <http://en.wikipedia.org/wiki/Rock-paper-scissors-lizard-Spock>_ )

# Some ideas

* create the environment for the app, including express
* create entry page with form to add the player's name
* screen with username, dropdown with the options to choose from, and button to start the game
* function that helps to create a random number between 1 and 3. These numbers correspond to each of the game options
* result screen with button for next turn
* add a counter so that the first to reach 3 wins the game
* winner screen with button to play again or exit

# Tests

Class Player tests

1. should return a Player
2. should add a victory

Class Duel tests

3. should call constructor of player class (this test fails, however when debugging it call constructor of player class)
4. should create an array of Players of length 2 when adding 2 players
5. should return the name of player1
6. should return the name of player2
7. should add 1 victory to player 1
8. should add 1 victory to player 2
9. should call handShape from botSelection function (same than test 3)
10. should return rock when 0 is sent to handShape function
11. should return paper when 0 is sent to handShape function
12. should return scissors when 0 is sent to handShape function
13. should return Spock when 0 is sent to handShape function
14. should return lizard when 0 is sent to handShape function

Class Rules tests

15. should return "ties" when "rock" and "rock" are sent to "prime()" in Duel class
16. should return "wins" when "rock" and "scissors" are sent to "prime()" in Duel class
17. should return "wins" when "rock" and "lizard" are sent to "prime()" in Duel class
18. should return "loses" when "rock" and "paper" are sent to "prime()" in Duel class
19. should return "loses" when "rock" and "Spock" are sent to "prime()" in Duel class
20. should return "ties" when "paper" and "paper" are sent to "prime()" in Duel class
21. should return "wins" when "paper" and "rock" are sent to "prime()" in Duel class
22. should return "wins" when "paper" and "Spock" are sent to "prime()" in Duel class
23. should return "loses" when "paper" and "scissors" are sent to "prime()" in Duel class
24. should return "loses" when "paper" and "lizard" are sent to "prime()" in Duel class
25. should return "ties" when "scissors" and "scissors" are sent to "prime()" in Duel class
26. should return "wins" when "scissors" and "paper" are sent to "prime()" in Duel class
27. should return "wins" when "scissors" and "lizard" are sent to "prime()" in Duel class
28. should return "loses" when "scissors" and "rock" are sent to "prime()" in Duel class
29. should return "loses" when "scissors" and "Spock" are sent to "prime()" in Duel class
30. should return "ties" when "Spock" and "Spock" are sent to "prime()" in Duel class
31. should return "wins" when "Spock" and "rock" are sent to "prime()" in Duel class
32. should return "wins" when "Spock" and "scissors" are sent to "prime()" in Duel class
33. should return "loses" when "Spock" and "paper" are sent to "prime()" in Duel class
34. should return "loses" when "Spock" and "lizard" are sent to "prime()" in Duel class
35. should return "ties" when "lizard" and "lizard" are sent to "prime()" in Duel class
36. should return "wins" when "lizard" and "paper" are sent to "prime()" in Duel class
37. should return "wins" when "lizard" and "Spock" are sent to "prime()" in Duel class
38. should return "loses" when "lizard" and "rock" are sent to "prime()" in Duel class
39. should return "loses" when "lizard" and "scissors" are sent to "prime()" in Duel class

Test Requests

To perform tests on the requests made in this app, I have decided to use a VSCode extension called Thunder Client. With this extension you get similar or equal results to those you get with Postman, but with the advantage of not having to change environment.
