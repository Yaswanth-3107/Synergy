
const PORT = process.env.PORT || 9000
const express = require("express");
const app = express();
app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.render("synergy")
}
)


app.listen(PORT, function () {
    console.log("server on port 3000");
});
