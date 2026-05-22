const express = require('express');
const router = express.Router();
const patientRoutes = require('./patientRoutes');
const authRoutes = require('./authRoutes');
const doctorRoutes = require('./doctorRoutes');
const adminRoutes = require('./adminRoutes');
const appointmentRoutes = require('./appointmentRoutes');
const helpDeskRoutes = require('./helpDeskRoutes');

// Mount routes
router.use('/patients', patientRoutes);
router.use('/auth', authRoutes);
router.use('/doctors', doctorRoutes);
router.use('/admin', adminRoutes);
router.use('/appointments', appointmentRoutes);
router.use('/help-desk', helpDeskRoutes);

module.exports = router;
