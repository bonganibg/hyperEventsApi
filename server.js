const app = require("./src/app");
const process = require("process")
const PORT = process.env.PORT

app.set('port', PORT);
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});