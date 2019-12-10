const mongoose= require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/SGE-APP', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    promiseLibrary: global.Promise
});
mongoose.connection.on('connected', ()=>{
    console.log('DB is connected');
});
mongoose.connection.on('error', err =>{
    console.log('DB have ERROR: -------- ' + err);
});
