#!/usr/bin/env node
import gradient from "gradient-string";
import quotes from "./quotes.json" assert { type: "json" };

const quote = quotes[Math.floor(Math.random() * quotes.length)];
console.log(gradient.pastel(`${quote.text}\n\t- ${quote.author}`));
