const readline = require('readline');

const { FUD_KEYWORDS, CRYPTONAME_KEYWORDS } = require('./keywords');

async function analyzeTweet(tweetText) {
  const lowerText = tweetText.toLowerCase();
  const foundFudKeywords = [];
  const foundCryptoNames = [];

  for (let keyword of FUD_KEYWORDS) {
    if (lowerText.includes(keyword)) {
      foundFudKeywords.push(keyword);
    }
  }

  for (let keyword of CRYPTONAME_KEYWORDS) {
    if (lowerText.includes(keyword)) {
      foundCryptoNames.push(keyword);
    }
  }
    
  const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${foundCryptoNames[0]}&vs_currencies=usd&include_market_cap=true&x_cg_demo_api_key=CG-nTsVxM6TkPAK6ETNyfB2vW71`);
  const data = await response.json();
    

  return {
    isPotentialFud: foundFudKeywords.length > 0,
    triggeredKeywords: foundFudKeywords,
    isCoinMentioned: foundCryptoNames.length > 0,
    triggeredCryptoName: foundCryptoNames,
    fetchedData: data
  };
}

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log('\n🔍 FudFinder - Tweet Analyzer CLI');
  console.log('================================');
  console.log('Paste a tweet to analyze for potential FUD.');
  console.log('Type "exit" to quit.\n');

  const askForTweet = () => {
    rl.question('Enter tweet text: ', async (input) => {
      if (input.toLowerCase() === 'exit') {
        console.log('\nGoodbye!');
        rl.close();
        return;
      }

      if (!input.trim()) {
        console.log('Please enter some text to analyze.\n');
        askForTweet();
        return;
      }

      const result = await analyzeTweet(input);
      const coinKey = Object.keys(result.fetchedData)[0];

      console.log('\n--- Analysis Result ---');
      if (result.isCoinMentioned) {
        console.log(`Coin mentioned: ${result.triggeredCryptoName}`);
        console.log(`Data: Price - $${result.fetchedData[coinKey].usd} Marketcap - $${result.fetchedData[coinKey].usd_market_cap.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`); //paste coin data from coingecko
      } else {
        console.log('No coin mentioned.');
      }
      if (result.isPotentialFud) {
        console.log('⚠️  Potential FUD: YES');
        console.log(`📌 Triggered keywords: ${result.triggeredKeywords.join(', ')}`);
      } else {
        console.log('✅ Potential FUD: NO');
        console.log('No FUD keywords detected.');
      }
      console.log('-----------------------\n');

      askForTweet();
    });
  };

  askForTweet();
}

main();
