const Event = require('../models/event');

async function getEvent(req, res, next) {
    const { eventId } = req.params;
    const event = await Event.findById(eventId);
    res.status(200).json(event);
}

async function getEvents(req, res, next) {
    const events = await Event.find({});
    return events;
}

async function postEvent(req, res, next) {
    const { title, description, district, street, startDate, endDate, price, maxCapacity, contactPhone, xCoordinate, yCoordinate, creationDate } = req.body;
    const newEvent = new Event({ title, description, district, street, startDate, endDate, price, maxCapacity, contactPhone, xCoordinate, yCoordinate, creationDate });
    await newEvent.save();
    req.flash('success_msg', 'Evento registrado satisfactoriamente');
    res.redirect('/');
}

async function editEvent(req, res, next) {
    const newEvent = req.body;
    const { eventId } = req.params;
    await Event.findByIdAndUpdate(eventId, newEvent);
    req.flash('success_msg', 'Evento actualizado satisfactoriamente');
    res.redirect('/');
}

async function deleteEvent(req, res, next) {
    const { eventId } = req.params;
    await Event.findByIdAndDelete(eventId);
    req.flash('error_msg', 'Evento eliminado satisfactoriamente');
    res.redirect('/');
}

module.exports = {
    getEvent,
    getEvents,
    postEvent,
    editEvent,
    deleteEvent
}