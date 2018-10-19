const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`Price in dollars please:`, (price_input) => {
    console.log(`Price entered: ${price_input}`)
    var new_price = price_input.replace("$", "");
    console.log(`Price without $ is: ${new_price}`)
    readline.close()
  })