# rock-paper-scissors

This simple game of rock & paper & scissors was written as part of a project assignment for The Odin Project course.

HOW TO PLAY?

After downloading the files and running index.html in your web browser, a window will pop up asking you to type “rock”, “paper” or “scissors”. You have to type in EXACTLY one of these words, although they do not necessarily have to be in lowercase you can also type in “Rock” or “PaPeR”. The program is very intelligent and will convert the user's entered word to the target value in lowercase :D When my programming skills improve I will try to add an appropriate message when the user: 

a) will not type anything and press “ok”
b) press “cancel”
c) type an incorrect word, e.g. make a spelling mistake 

You can also select the number of rounds by editing the script.js file and specifying the value in the playGame function call at line 157.

!Attention!

I noticed that the prompt method causes that the first time the program is loaded, the user's and computer's choices are not displayed on the fly, and it does not display who won the round. You have to play the game normally by typing three consecutive values, after which everything will be printed to the console at once. After the next browser refresh everything should work as expected. This is caused by the prompt method. 

Enjoy! :)
 
FUTURE DEVELOPMENT 

- Display a message in case the user:

    a) does not enter anything and presses “ok”
    b) press “cancel”
    c) enters an incorrect word, e.g. makes a typo

- Add GUI 

- Solve the prompt method bug