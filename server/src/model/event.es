import mongoose, { Schema } from 'mongoose';

// helpers
import { evaluateEventHash } from '../helpers/event';

const EventSchema = new Schema({
    poster: { type: String, required: true },
    title: { type: String, required: true },
    start: { type: Number, required: true },
    duration: { type: Number, required: true },
    description: { type: String, required: false },
    source: { type: String, required: true },
    genres: { type: Array, required: true },
    channelId: { type: String, required: true },
    hash: { type: String, required: true },
});

EventSchema.set('toObject', { virtuals: true });
EventSchema.set('toJSON', { virtuals: true });

EventSchema.statics.findByHash = function (hash) {
    return new Promise((resolve, reject) => {
        this.findOne({ hash }, (error, event) => {
            if (error || !event) {
                return reject(error);
            }
            resolve(event);
        });
    });
}

EventSchema.statics.getEventsByChannelId = function (channelId) {
    return new Promise((resolve, reject) => {
        this.find({ channelId }, (error, events) => {
            if (error) {
                return reject(error);
            }
            resolve(events);
        });
    });
}

EventSchema.statics.search = function (title) {
    return new Promise((resolve, reject) => {
        const regexp = new RegExp(title, 'ig');
        this.find({ title: regexp }, (error, titleEvents = []) => {
            if (error) { return reject(error); }
            this.find({ genres: regexp }, (error, genreEvents = []) => {
                if (error) { return reject(error); }
                resolve(titleEvents.concat(genreEvents));
            });
        });
    });
}

EventSchema.statics.save = function ({ poster, title, start, description, genres, duration, source, channelId }) {
    return new Promise((resolve, reject) => {
        const eventHash = evaluateEventHash(title, start, channelId);

        this.findByHash(eventHash)
            .then((event) => {
                reject(event);
            })
            .catch(() => {
                const event = new this({
                    poster,
                    title,
                    start,
                    duration,
                    description,
                    source,
                    channelId,
                    genres,
                    hash: eventHash,
                });
                event.save((error) => {
                    if (error) {
                        return reject(error);
                    }
                    resolve(event);
                });
            });
    });
}

EventSchema.statics.removeAll = function () {
    return new Promise((resolve ,reject) => {
        this.remove({}, (error) => {
            if (error) {
                return reject(error);
            }
            resolve();
        })
    });
}

export default mongoose.model('Event', EventSchema);
