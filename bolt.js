"use strict";
const dotenv = require("dotenv");
const bolt = require("@slack/bolt");
dotenv.config();

const fortunes = ["ねこ吉", "大吉", "吉", "中吉", "小吉", "末吉", "凶"];

const app = new bolt.App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
  logLevel: "debug",
});

app.message(/hello/i, ({ message, say }) => {
  say(`こんにちは!<@${message.user}>さん！`);
});

app.message(/おみくじ/i, ({ message, say }) => {
  let resultFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  say(`あなたの運勢は${resultFortune}!!`);
});

app.start();
