// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]

1) Understanding the problem
- Array transformed to string, separated by ...
- What is the X days? Answer: index + 1

2) Breaking up into sub-problems
- Transform array into string
- Transform each element to string with ºC
- Strings needs to contain day (index + 1)
- Add ... between elements and start and end of string
- Log string to console
*/

const temperatures = [17, 21, 23]
let str = ``;
console.log(temperatures.length)
for(let i=0; i<temperatures.length; i++){
    str+= `${temperatures[i]}ºC in ${i+1} days... `;
}

console.log(str)



console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent=``


document.querySelector('.score').textContent=5

document.querySelector('.guess').value


const generaterand = function(){
    let no = Math.floor(Math.random()*20)+1
    return no
}

let values
let tries =3
let rand=generaterand()
console.log(rand)

const mainfun = function(tries){
    document.querySelector('.check').addEventListener('click',function(){
        
        values=Number(document.querySelector('.guess').value) //This will return the no as srting, so we can caonvert it to number
        document.querySelector('.guess').value=``
        if(values==rand){
            console.log(`Equal`)
            document.querySelector('.message').textContent=`You win!!`
            document.querySelector('body').style.backgroundColor='#60b347'
        }else {
            tries--;
            if (tries > 0) {
                document.querySelector('.message').textContent = `Try Again!`;
                document.querySelector('.number').textContent = tries;
                console.log(`Not equal`);
            } else {
                document.querySelector('.message').textContent = `You failed.`;
                document.querySelector('.number').textContent = `0`;
            }
        }
    })
}

mainfun(tries)//Send tries as a parameter
document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('body').style.backgroundColor='#222'
    rand=generaterand()
    console.log(rand)
    tries=3
    // document.querySelector('.number').textContent=tries
    mainfun(tries)
    document.querySelector('.message').textContent = "Start guessing..."; //Reset
    document.querySelector('.guess').value = ''; //Clear the I/P
    document.querySelector('.number').textContent = tries; //Reset tries
    document.querySelector('body').style.backgroundColor = '#222'; //Reset Background colour
})