'use strict';

const line = require('@line/bot-sdk');
const express = require('express');

// create LINE SDK config from env variables
const LINE_CHANNEL_ACCESS_TOKEN = 'DPNzw0zlGlV/n+sXCqVEuw5tC89xJ4cjwiGz7aBRVaCYW4pYMKfd3MeWhb3F0If3q5uL3gLekqX55l+5aYEG7d16wrvNbz9CnYarKFknT+B9Cu2/pui4GyXxeaP9Pwd0XcqmzyqteTDbHxLIrFcw+QdB04t89/1O/w1cDnyilFU=';

var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();

app.post('/webhook', function(req, res, next){
    res.status(200).end();
    for (var event of req.body.events){
        if (event.type == 'message' && event.message.text == 'ハロー'){
            var headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + LINE_CHANNEL_ACCESS_TOKEN
            }
            var body = {
                replyToken: event.replyToken,
                messages: [{
                    type: 'text',
                    text: 'こんにちは'
                }]
            }
            var url = 'https://api.line.me/v2/bot/message/reply';
            request({
                url: url,
                method: 'POST',
                headers: headers,
                body: body,
                json: true
            });
        }
    }
});

// listen on port
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});