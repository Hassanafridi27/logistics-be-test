const mongoose = require('mongoose');

/**
 * Mongoose schema for a delivery booking.
 */

const bookingSchema = new mongoose.Schema({
  pickupLocation: { type: String, required: true },
  dropoffLocation: { type: String, required: true },
  vanType: { type: String, required: true },
  deliveryTime: { type: Date, required: true },
  userId: { type: String, required: true },
}, {
  timestamps: true,
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
