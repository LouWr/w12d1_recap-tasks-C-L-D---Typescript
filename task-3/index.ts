// Add type annotations for the return type and each parameter.
function getSumForTwoNumbers(firstNumber:number, secondNumber:number): number {
  return firstNumber + secondNumber;
}

// Add type annotations for the return type and each parameter.
const getGreetingForUser = (username:string): string => `Hello ${username}!`;

// Fix the incorrect type annotations for the parameters and return type below 
// Need to check Promise type
async function getRandomNumber(minNumber: number, maxNumber: number): Promise<number> {
  const interval = maxNumber - minNumber;
  const randomInterval = Math.round(Math.random() * interval);
  return minNumber + randomInterval;
}

// Create an interface named Player which describes an object with the following key-value pairs:
//      - id = any number
//      - name = any text
//      - isComputer = either true or false
 interface Player{
   id: number;
   name: string;
   isComputer: boolean;
 }

// Create an interface named GameSummary which describes an object with the following key-value pairs:
//      - gameId = any number
//      - hasFinished = either true or false
//      - players = an array of players (use the interface created above)
 interface GameSummary{
   gameId: number;
   hasFinished: boolean;
   [index:number]:Player
 }