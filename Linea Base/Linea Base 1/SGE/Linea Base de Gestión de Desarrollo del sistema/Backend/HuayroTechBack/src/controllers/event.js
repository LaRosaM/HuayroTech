const Event = require('../models/event');

async function getEvent(req, res, next) {
    const { eventId } = req.params;
    const event = await Event.findById(eventId);
    res.status(200).json(event);
}

async function getEvents(req, res, next) {
    const events = await Event.find({});
    res.status(200).json(events);
}

async function postEvent(req, res, next) {
    const { title, description, district, street, startDate, endDate, price, maxCapacity, creationDate } = req.body;
    const newEvent = new Event({ title, description, district, street, startDate, endDate, price, maxCapacity, creationDate });
    await newEvent.save();
    res.status(200).json({ text: 'Evento registrado satisfactoriamente' });
}

async function editEvent(req, res, next) {
    const newEvent = req.body;
    const { eventId } = req.params;
    await Event.findByIdAndUpdate(eventId, newEvent);
    res.status(200).json({ text: 'Evento actualizado correctamente' });
}

async function deleteEvent(req, res, next) {
    const { eventId } = req.params;
    await Event.findByIdAndDelete(eventId);
    res.status(200).json({ success: true });
}

module.exports = {
    getEvent,
    getEvents,
    postEvent,
    editEvent,
    deleteEvent
}