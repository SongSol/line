const line = require('@line/bot-sdk');

const config = {
    channelSecret: 'f1d91cb80ea6e9a410f079f3d6b57d57',
    channelAccessToken: 'RQ19pMFLu2loB6isOZCQmny4dFzBejVs41WP59vMV+Wmc44iIVvjxePFSQQ1OD+RurEibg+C4kQXpImShaf/7PEFKvYIxinT0Z5bxllU41ATHuWPLjuWIOOTMkDq+WciuGbBhiOWCqK24Oy1nd1zAgdB04t89/1O/w1cDnyilFU='
};

app.post('/webhook', line.middleware(config), (req, res) => {
    console.log(req.body.events);
    Promise
      .all(req.body.events.map(handleEvent))
      .then((result) => res.json(result));
});

const client = new line.Client(config);

function handleEvent(event) {
  if (event.type !== 'message' || event.message.type !== 'text') {
    return Promise.resolve(null);
  }

  return client.replyMessage(event.replyToken, {
    type: 'text',
    text: event.message.text //実際に返信の言葉を入れる箇所
  });
}