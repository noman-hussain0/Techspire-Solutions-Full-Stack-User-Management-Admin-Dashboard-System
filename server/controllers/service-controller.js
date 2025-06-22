const Service = require("../models/service-model");

const services = async (requestAnimationFrame, res) => {
    try {
        const response = await Service.find();
        if (!response) {
            // handle the case where no docmnt was found
            res.status(404).json({ msg: "No Services Found" });
            return;
        }
        res.status(200).json({ msg: response });
    } catch (error) {
        console.log(`services: ${error}`)
    }
};

module.exports = services;