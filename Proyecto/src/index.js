const express = require('express');
const app = express();
const morgan = require('morgan');

//settings

app.set('port', process.env.port || 3000)
app.set('json spaces', 2);


//middleware 

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//rutas

app.use(require('./routes/index'));
app.use('/api/pilotos', require('./routes/pilotos'));
app.use('/api/pilotosNube', require('./routes/pilotosNube'));
app.use('/api/constructores', require('./routes/constructores'));

//inicia el servidor

app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`);
}); 