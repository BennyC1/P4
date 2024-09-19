const express = require('express');
const router = express.Router();

router.use("/", (req, res) => {
    const data = {
        caption: "Mahasiswa", 
        layout : "layout/main-layout",
        data :[
            {
                npm : "2226240031",
                nama : "benny"
            },
            {
                npm : "2226240010",
                nama : "ddd"
            },
            {
                npm : "2226240055",
                nama : "bee"
            }
        ]
    };
    res.render("index", data);
});

module.exports = router;