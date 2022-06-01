//change 5 to the total number of questions
var total=10
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Excellente!"
compliments[1]="Smokin!"
compliments[2]="Amazing!"
compliments[3]="Gushing random response!"
compliments[4]="YOU ARE CORRECT. HUMAN ERADICATION PAUSED 10 MINUTES!"
compliments[5]="Winning!"
compliments[6]="Keep this up and you will rule them all!"


/*Below lists the questions, its choices, and finally, the solution to each question. Folow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]="Which Friday the 13th movie came first?"
choice1[1]="The first one."
choice1[2]="The sequel to A."
choice1[3]="The sequel to B"
choice1[4]="There is no such thin as Friday the 13th. It is all in your head!"

question[2]="What is the world's most common come on?"
choice2[1]="Hey!"
choice2[2]="Sup!"
choice2[3]="Yo!"
choice2[4]="Hello, wonderful person. Have you a minute to converse?"

question[3]="Which city ranks as the world\'s most pungent city?"
choice3[1]="Mexico City (Mexico)"
choice3[2]="Englewood, Florida (US)"
choice3[3]="Tokyo (Japan)"
choice3[4]="Shanghai (China)"

question[4]="According to statistics, which statistics are most static?"
choice4[1]="Ones that do not change"
choice4[2]="Ones that change"
choice4[3]="Ones that change into not changing"
choice4[4]="One"

question[5]="As of today, what day is tomorrow?"
choice5[1]="Yesterday"
choice5[2]="A long time ago in a galaxy far away"
choice5[3]="The day after tomorrow"
choice5[4]="Tomorrow"

question[6]="Which question on this quiz came first?"
choice6[1]="The first one to sing us a song, you are the piano man!"
choice6[2]="The second one."
choice6[3]="The first one"
choice6[4]="What quiz?!"

question[7]="Hey!"
choice7[1]="Hey!"
choice7[2]="What!"
choice7[3]="No!"
choice7[4]="?"

question[8]="Which Star Trek is James' favorite?"
choice8[1]="VOY"
choice8[2]="DS9"
choice8[3]="TNG"
choice8[4]="TOS"

question[9]="According to common sense, which sense is best?"
choice9[1]="25 cents"
choice9[2]="Sense-say"
choice9[3]="Common sense"
choice9[4]="Sense and Sensibility"

question[10]="As of tomorrow, what day is yesterday?"
choice10[1]="All my troubles seemed so far away..."
choice10[2]="On the porch"
choice10[3]="Today"
choice10[4]="Yesterday"


solution[1]="a"
solution[2]="a"
solution[3]="b"
solution[4]="a"
solution[5]="d"
solution[6]="c"
solution[7]="a"
solution[8]="c"
solution[9]="c"
solution[10]="d"

