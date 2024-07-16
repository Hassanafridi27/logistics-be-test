const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');
const Booking = require('../models/booking');

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

/**
 * Test suite for booking API endpoints.
 */

describe('POST /api/bookings', () => {
  it('should create a new booking', async () => {
      // Test implementation
    const response = await request(app)
      .post('/api/bookings')
      .send({
        pickupLocation: 'Location A',
        dropoffLocation: 'Location B',
        vanType: 'medium',
        deliveryTime: new Date().toISOString(),
        userId: 'user123',
      });
    
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('_id');
    expect(response.body.pickupLocation).toBe('Location A');
  });

  it('should return 400 for missing fields', async () => {
      // Test implementation
    const response = await request(app)
      .post('/api/bookings')
      .send({
        pickupLocation: 'Location A',
        vanType: 'medium',
        deliveryTime: new Date().toISOString(),
      });
    
    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe('All fields are required');
  });
});
