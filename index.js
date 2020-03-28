import express from 'express';
import routes from './src/routes/nodeJSRoutes';

const app = express();
const PORT = 4000;

routes(app);

app.get('/', (request, response) => {
    response.send(`Node and express server running on port ${PORT}`)
});

app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
});