const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Enter date(YYYY-MM-DD): ",function(d) {

    let date = new Date(d);

    let days = ["Sunday","Monday", "Tuesday",
                "Wednesday","Thursday", "Friday", "Saturday"];

    let months = ["January","February", "March",
                  "April","May", "June", "July",
                  "August","September", "October",
                  "November","December"];

    console.log("Day:", date.getDate());
    console.log("Month:",months[date.getMonth()]);
    console.log("Year:",date.getFullYear());
    console.log("Weekday:", days[date.getDay()]);

    input.close();
});