const readline = require('readline');

// FUD keywords to scan for
const FUD_KEYWORDS = [
  'rug',
  'rugged',
  'scam',
  'scammer',
  'dump',
  'dumping',
  'dumped',
  'hack',
  'hacked',
  'exploit',
  'sell',
  'selling',
  'dead',
  'dying',
  'fraud',
  'ponzi',
  'exit',
  'honeypot',
  'fake',
  'warning',
  'avoid',
  'stolen',
  'theft',
  'lawsuit',
  'sec',
  'investigation',
  'insider',
  'manipulation',
  'wash trading',
  'abandon',
  'abandoned'
];

function analyzeTweet(tweetText) {
  const lowerText = tweetText.toLowerCase();
  const foundKeywords = [];

  for (const keyword of FUD_KEYWORDS) {
    if (lowerText.includes(keyword)) {
      foundKeywords.push(keyword);
    }
  }

  return {
    isPotentialFud: foundKeywords.length > 0,
    triggeredKeywords: foundKeywords
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
    rl.question('Enter tweet text: ', (input) => {
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

      const result = analyzeTweet(input);

      console.log('\n--- Analysis Result ---');
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
