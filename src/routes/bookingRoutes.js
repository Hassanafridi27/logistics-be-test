const express = require('express');
const { createBooking } = require('../controllers/bookingController');
const router = express.Router();
/**
 * @swagger
 * tags:
 *   name: Bookings
 *   description: API endpoints for managing delivery bookings
 */

/**
 * @swagger
 * /api/bookings:
 *   post:
 *     summary: Create a new delivery booking
 *     tags: [Bookings]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               pickupLocation:
 *                 type: string
 *               dropoffLocation:
 *                 type: string
 *               vanType:
 *                 type: string
 *               deliveryTime:
 *                 type: string
 *                 format: date-time
 *               userId:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Successfully created a new booking
 *       '400':
 *         description: Invalid request body
 *       '500':
 *         description: Server error
 */

router.post('/bookings', createBooking);

module.exports = router;
