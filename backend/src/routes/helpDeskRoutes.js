const express = require('express');
const router = express.Router();
const helpDeskController = require('../controllers/helpDeskController');

// POST /api/help-desk/request - Create a support request
router.post('/request', helpDeskController.createRequest);

// GET /api/help-desk/requests - Get all requests (Admin only)
router.get('/requests', helpDeskController.getAllRequests);

// POST /api/help-desk/respond - Admin responds to a request
router.post('/respond', helpDeskController.respondToRequest);

// GET /api/help-desk/status/:email - Patient checks their request status
router.get('/status/:email', helpDeskController.getRequestStatus);

module.exports = router;
