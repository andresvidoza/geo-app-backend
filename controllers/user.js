import User from '../models/User.js'

// @description Post one user
// @route POST /api/v1/users
// @access Public
const postUser = async (req, res, next) => {
    try {

        // create pins with mongoose and save it in mongodb
        const user = await User.create(req.body); // userId needs to match to schema

        // send back a response
        return res.status(200).json({
            success: true,
            data: user
        })
    } catch (error) {
        if(error.code === 11000){
            return res.status(400).json({ error: 'DUPLICATE_KEY' }) // 400 error is a USER error meaning that the user sent something that shouldnt have been sent
        }
            
        res.status(500).json({ error: error})
        
    }
};

const updateUser = async (req, res, next) => {
    try {
        const user = await User.updateOne(
           { "userId" : req.body.userId},
           { $set: { "location" : {"coordinates": [req.body.location.coordinates[0],req.body.location.coordinates[1]]} } }
        );

        return res.status(200).json({
            success: true,
            data: user
        })
     } catch (error) {
         console.log(error)
        res.status(500).json({ error: error})
     }
}

export { postUser, updateUser };