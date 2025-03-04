const express = require('express')

const app = express();

// appliction level settings
app.set('view engine', 'ejs')

// routing
app.get('/', (req, res) => {
    res.send("Home page")
})

app.post('/ai/data', (req, res) => {
    res.json({
        message: "data received",
        data: req.body
    })
})

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send("something went wrong");
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is now running at port ${port}`);
});