// const http = require('http');
// const routes = require('./routes');
// const server = http.createServer(routes);
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routeDir = require('./util/path');
const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoute = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminData.routes);
app.use(shopRoute);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(routeDir, 'views', '404.html'));
})




// const server = http.createServer(app);
app.listen(3000);
// server.listen(3000, function () {
// }
// );