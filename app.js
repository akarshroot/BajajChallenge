const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/bfhl", (req, res) => {
  try {
    const body = req.body.data;

    const data = body.split("[")[1].split("]")[0].split(",");
    const result = {
      user_id: "akarsh_tripathi_11102002",
      email: "akarsh1278.be20@chitkarauniversity.edu.in",
      roll_number: "2011981278",
      odd_numbers: [],
      even_numbers: [],
      alphabets: [],
    };
    data.forEach((element) => {
      let num;
      try {
        num = parseInt(element);
      } catch (e) {}
      if (num != NaN) {
        if (num % 2 == 0) result.even_numbers.push(num.toString());
        else result.odd_numbers.push(num.toString());
      } else {
        result.alphabets.push(element.toUpperCase());
      }
    });
    result.is_success = true;
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

app.listen(PORT, () => {
  console.log("listening");
});
