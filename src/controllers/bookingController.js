const Booking = require('../models/booking');

/**
 * Create a new delivery booking.
 * @param {express.Request} req - The request object.
 * @param {express.Response} res - The response object.
 * @returns {Promise<void>}
 */

const createBooking = async (req, res) => {
  const { pickupLocation, dropoffLocation, vanType, deliveryTime, userId } = req.body;

  if (!pickupLocation || !dropoffLocation || !vanType || !deliveryTime || !userId) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newBooking = new Booking({
      pickupLocation,
      dropoffLocation,
      vanType,
      deliveryTime,
      userId,
    });

    const savedBooking = await newBooking.save();
    res.status(201).json(savedBooking);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = { createBooking };
