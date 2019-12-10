const mongoose = require('mongoose');

const cnt = mongoose.connect('mongodb+srv://francotasso:16200241@sales-gkbrc.gcp.mongodb.net/HuayroTech?retryWrites=true&w=majority', {
    useNewUrlParser: true
}).then(db => console.log('db is connected'))
    .catch(err => console.log(err));

module.exports = {
    connection: cnt
}