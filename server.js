const express = require("express");
const router = require("./server/routes.js")

const app = router(express());
app.use(express.static(__dirname + '/public/dist/public'));

app.listen(8000, (errs)=>console.log(errs?errs:"Now listening on port 8000"));