const express = require('express');
const router = express.Router();
router.use(express.json());

router.post('/foodData', (req, res) => {
    try {
        res.send([global.food_items, global.food_category]);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;
