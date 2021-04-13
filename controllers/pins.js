import Pins from '../models/Pins.js'

// @description Get all pins
// @route GET /api/v1/pins
// @access Public

const getPins = async (req, res, next) => {
    try {
        const pins = await Pins.find();

        return res.status(200).json({
            success: true,
            count: pins.length,
            data: pins
        });

    } catch (error) {
        res.status(500).json({ error: 'Server error' })
    }
};

// @description add a pin
// @route POST /api/v1/pins
// @access Public
const addPins = async (req, res, next) => {
    try {

        console.log(req.body)

        // create pins with mongoose and save it in mongodb
        const pin = await Pins.create(req.body); // pinId needs to match to schema

        // send back a response
        return res.status(200).json({
            success: true,
            data: pin
        })
    } catch (error) {
        if(error.code === 11000){
            return res.status(400).json({ error: 'DUPLICATE_KEY' }) // 400 error is a USER error meaning that the user sent something that shouldnt have been sent
        }
            
        res.status(500).json({ error: error})
        
    }
};

export { getPins, addPins };