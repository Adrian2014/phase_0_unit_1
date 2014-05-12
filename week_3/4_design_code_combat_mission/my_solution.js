// I worked [by myself, with:] on this challenge
// James Miller, helped point me in the right direction 

// Your mission description:
//   You see a group of Trolls about to attack a farm and you either, want to stop them or take a nap.
// 
// 

// Pseudocode
//   What's your name?  
//   What kind of Warrior are you? 
//   What will you do?
//   What kind of rock do you choose?
// 
// 

// Initial Code
confirm ("Are you ready? 'Cause here we go!");
var yourName = prompt("Your name please?");
var yourType = prompt("So " + yourName +" what kind of warrior are you? Passive or Aggressive?");

if (yourType.toUpperCase() === "AGGRESSIVE")
   { anwserOne = prompt("You are resting on a hillside, when you see a group of Trolls about to attack a farm.  You decide you need to do something.  You realize the easiest way to get the trolls attention is to...'Throw a rock' or 'Yell'?")
   ;}
   else {
     console.log ("You are resting on a hillside, when you see a group of Trolls about to attack a farm.  You decide you need to do nothing.  It's a dog eat dog world, and you would rather take a nap.  GAME OVER")
   ;};

if (anwserOne.toUpperCase() === "THROW A ROCK")
   { anwserTwo = prompt("You see a 'throwable' rock at locationXY , but you see a boulder that you can roll down hill at locationXY (32,10).  Where do you decide to this.moveXY()?");}
   else {
     console.log ("You decide that you are not capable of defeating the Trolls on your own.  You need help! So what do you decide to yell?  It doesn't matter, the Trolls have spotted you and you have been eaten!")
     ;};


if (anwserTwo === "(32,10)")
   { console.log("You have squashed all the Trolls with one boulder!  You are a hero!");};
   
if (anwserTwo === "(35,15)")
	{ console.log("You only made the Trolls angry, and you ahve been eaten!");};




// Refactored Code


// Reflection
//   I was able to get my code to work in the console, but I am not sure if it is what DBC is looking for.   
//  I was unsure what to do for this challenge so I asked someone from my accountability group for help.  He showed me what he had done in a pairing session with another member of our group.  Thiers was much more witty, and better written.
//   I still don't understand why I was unable to put an 'else' clause in for my last 'if' statement.  No matter how I tried I could not get it to work, so I created two 'if' statements.
//   This was the first time I have used prompt in Javascript.  It was realitively simple.
//    I am pretty comfortable with all the Learning Competencies, except for the bonus.. which I am going to teach myself next week.
// 
// 
// 
