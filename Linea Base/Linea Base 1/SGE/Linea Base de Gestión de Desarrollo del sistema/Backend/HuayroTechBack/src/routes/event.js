const router = require('express-promise-router')();

const event = require('../controllers/event');

/* GET event */
router.get('/event/:eventId', event.getEvent);

/* GET events */
router.get('/events', event.getEvents);

/* POST event */
router.post('/event', event.postEvent);

/* EDIT event */
router.get('/event/:eventId', event.editEvent);

/* DELETE event */
router.post('/event/:eventId', event.deleteEvent);

module.exports = router;