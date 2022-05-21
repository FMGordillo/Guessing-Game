const readline = require("node:readline/promises");
const { stdin: input, stdout: output } = require("node:process");

async function main() {
  let rl;
  try {
    rl = readline.createInterface({ input, output });
    const guessingNumber = Math.floor(Math.random() * 10);
    const name = await rl.question("enter your name: ");
    console.log(
      "Welcome " + name + ", let's play a game.\n",
      "Guess which is the number that I'm thinking of\n",
      "It's a number between 1 and 10"
    );

    let guess;
    do {
      const userResult = parseInt(
        await rl.question("The number you're thinking of: ")
      );
      if (isNaN(userResult)) {
        console.log("Do you wanna play or not?");
        continue;
      }
      if (userResult == guessingNumber) {
        console.log("Congratulations! Now get out of here");
        break;
      } else {
        const hint = userResult < guessingNumber ? "higher" : "lower";
        console.log(`Whoops! That's not it, you must guess ${hint}`);
      }
    } while (guess != guessingNumber);
  } catch (error) {
  } finally {
    rl?.close();
    process.exit(0);
  }
}

main();
