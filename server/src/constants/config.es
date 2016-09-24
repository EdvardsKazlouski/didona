export const EXPRESS = {
    HOST: 'localhost',
    PORT: 8888
};

// local constants
const DB = 'tv-data';
const HOST = 'localhost';
const PORT = 27017;

export const MONGO = {
    DB,
    HOST,
    PORT,
    URI: `mongodb://${HOST}:${PORT}/${DB}`,
    OPTIONS: {},
};
