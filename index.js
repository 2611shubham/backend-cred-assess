const express = require('express');
var cors = require('cors');
const bodyParser = require("body-parser");

const app = express();
const port = 8800;


app.use(cors())
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/getAllQuestions', (req, res) => {

    const QUESTIONS = [
        {
            question: "Question1 dfghjkbvcd hjbhjkcbj hbhcvashbas jkbkjdbsabsacbsabc kjbckjsabcjkbskjcbsak ?",
            options: ["option1", "option2", "option3", "option4"],
            key: "question1"
        },
        {
            question: "Question2 dfghjkbvcd hjbhjkcbj hbhcvashbas jkbkjdbsabsacbsabc kjbckjsabcjkbskjcbsak ?",
            options: ["option1", "option2"],
            key: "question2"
        },
        {
            question: "Question3 dfghjkbvcd hjbhjkcbj hbhcvashbas jkbkjdbsabsacbsabc kjbckjsabcjkbskjcbsak ?",
            options: ["option1", "option2", "option3", "option4"],
            key: "question3"
        },
        {
            question: "Question4 dfghjkbvcd hjbhjkcbj hbhcvashbas jkbkjdbsabsacbsabc kjbckjsabcjkbskjcbsak ?",
            options: ["option1", "option2", "option3"],
            key: "question4"
        },
        {
            question: "Question5 dfghjkbvcd hjbhjkcbj hbhcvashbas jkbkjdbsabsacbsabc kjbckjsabcjkbskjcbsak ?",
            options: ["option1", "option2", "option3", "option4"],
            key: "question5"
        },
        {
            question: "Question6 dfghjkbvcd hjbhjkcbj hbhcvashbas jkbkjdbsabsacbsabc kjbckjsabcjkbskjcbsak ?",
            options: ["option1", "option2", "option3", "option4"],
            key: "question6"
        },
        {
            question: "Question7 dfghjkbvcd hjbhjkcbj hbhcvashbas jkbkjdbsabsacbsabc kjbckjsabcjkbskjcbsak ?",
            options: ["option1", "option2", "option3", "option4"],
            key: "question7"
        },
        {
            question: "Question8 dfghjkbvcd hjbhjkcbj hbhcvashbas jkbkjdbsabsacbsabc kjbckjsabcjkbskjcbsak ?",
            options: ["option1", "option2", "option3", "option4"],
            key: "question8"
        },
        {
            question: "Question9 dfghjkbvcd hjbhjkcbj hbhcvashbas jkbkjdbsabsacbsabc kjbckjsabcjkbskjcbsak ?",
            options: ["option1", "option2", "option3", "option4"],
            key: "question9"
        },
        {
            question: "Question10 dfghjkbvcd hjbhjkcbj hbhcvashbas jkbkjdbsabsacbsabc kjbckjsabcjkbskjcbsak ?",
            options: ["option1", "option2", "option3", "option4"],
            key: "question10"
        },

    ]
    res.send(QUESTIONS);
});


app.post('/submitResponse', (req, res) => {
    console.log(req.body)
    res.send({ success: true })
});

app.post('/registerUser', (req, res) => {
    const { userDetails } = req.body;
    console.log({userDetails})
    if (userDetails.email === "shubham@gmail.com")
        return res.send({ success: true, user_id: "shubhamuserid" })
    else
        return res.send({ success: false })
})
app.post('/login', (req, res) => {
    console.log(req.body)

    const { email, password } = req.body;
    const userDetails = {
        role: "",
        name: "shubham",

    }
    if (email === "nautiyalshubham2611@gmail.com")
        userDetails.role = "chief_admin";
    else if (email === "shubham.nautiyal@credgenics.com")
        userDetails.role = "talent_partner";
    else
        return res.send({ success: false })

    res.send({
        success: true, userDetails
    })

});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});