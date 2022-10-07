#!/usr/bin/env node
import gradient from "gradient-string";
import fetch from "node-fetch";

const response = await fetch("https://zenquotes.io/api/random");
const data = await response.json();
const quote = data[0]["q"] + "\n\t-- " + data[0]["a"];

console.log(gradient.pastel(quote))
