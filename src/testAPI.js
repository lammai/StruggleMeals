var http = require("https");

var options = {
    "method": "GET",
    "hostname": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    "port": null,
    "path": "/food/menuItems/search?offset=0&number=10&minCalories=0&maxCalories=5000&minProtein=0&maxProtein=100&minFat=0&maxFat=100&minCarbs=0&maxCarbs=100&query=burger",
    "headers": {
        "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "x-rapidapi-key": "78052abcd9msh26b8a26bb9eff7cp1104f7jsn20d19761b723",
        "useQueryString": true
    }
};

var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
        chunks.push(chunk);
    });

    res.on("end", function () {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
    });
});

req.end();