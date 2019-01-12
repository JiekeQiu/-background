var token = require("../../libs/token.js");
console.log(token);
let crypto = "eyJkYXRhIjp7InVzZXIiOiJsZW1vbiIsIm1pbWEiOiIxMjMifSwiY3JlYXRlZCI6MTU0NzI1NzU0MCwiZXhwIjo2MH0=.zBlJ84XQaDrzDLH7cKjKyJpfSiTlo3AGwz6CB7GkwLE=";
console.log(token.decodeToken(crypto))
console.log(token.checkToken(crypto))