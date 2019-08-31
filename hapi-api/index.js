const Hapi = require('@hapi/hapi');
const userRoutes = require('./routes/user')
const knex = require('./knex');

const init = async () => {

    const server = Hapi.server({
        port: 5250,
        host: 'localhost'
    });

    server.route(userRoutes)

    await server.start();
    console.log('Server running on %s', server.info.uri);
    console.log(knex)
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();