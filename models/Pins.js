import mongoose from 'mongoose';

const pinsSchema = new mongoose.Schema({
    pinId: {
        type: String,
        required: [true, 'Please add a pin ID'],
        trim: true,
        maxlenght: [10, 'Pin ID must be less than 10 chars']
    },
    location: {
        type: {
          type: String, // Don't do `{ location: { type: String } }`
          enum: ['Point'] // 'location.type' must be 'Point'
        },
        coordinates: {
          type: [Number],
          index: '2dsphere'
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Pins', pinsSchema);