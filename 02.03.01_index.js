// Tạo Project và Ghi nhận thông tin liên quan
// npm init --y
// npm install --save express
// Mở thư viện fs, express
// const fs = require("fs");
const express = require("express");
var path = require('path');
// Tham số - Web lắng nghe tại xport
xport = process.env.PORT || 3000;
// Tạo App Web
const app = express();
const router = express.Router();
// Routing WEB
// MVC

//--- checkout
router.get('/',
    (req, res) => {
        res.sendFile(__dirname + "/ngoclvhbhdl/checkout.html");
    }
);

//--- index
router.get('/index',
    (req, res) => {
        res.sendFile(__dirname + "/ngoclvhbhdl/index.html");
    }
);

//--- Login
router.get('/login',
    (req, res) => {
        res.sendFile(__dirname + "/ngoclvhbhdl/login.html");
    }
);

//--- register
router.get('/register',
    (req, res) => {
        res.sendFile(__dirname + "/ngoclvhbhdl/register.html");
    }
);
//--- shop
router.get('/shop',
    (req, res) => {
        res.sendFile(__dirname + "/ngoclvhbhdl/shop.html");
    }
);
//--- single
router.get('/single',
    (req, res) => {
        res.sendFile(__dirname + "/ngoclvhbhdl/single.html");
    }
);

// START WEB
app.use("/", router);
app.listen(xport,
    (err) => {
        console.log("\n Tạo Web tại ", xport, " với ", err);
    }
);