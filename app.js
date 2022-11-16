const express = require("express");
const app = express();
app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.render("synergy")
}
)
app.listen(9000, function () {
    console.log("server on port 3000");
});
