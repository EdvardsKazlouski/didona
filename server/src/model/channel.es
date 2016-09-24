import mongoose, { Schema } from 'mongoose';

const ChannelSchema = new Schema({
    logo: { type: String, required: true },
    name: { type: String, required: true },
    isLocked: { type: Boolean, required: true },
});

ChannelSchema.set('toObject', { virtuals: true });
ChannelSchema.set('toJSON', { virtuals: true });

ChannelSchema.statics.findByName = function (name) {
    return new Promise((resolve, reject) => {
        this.findOne({ name })
            .then(resolve)
            .catch(reject);
    });
}

ChannelSchema.statics.getAll = function () {
    return new Promise((resolve, reject) => {
        this.find({}, (error, channels) => { resolve(channels); });
    });
}

ChannelSchema.statics.save = function ({ logo, name, isLocked = false }) {
    return new Promise((resolve, reject) => {
        this.findByName(name)
            .then(reject)
            .catch(() => {
                const channel = new this({
                    logo,
                    name,
                    isLocked
                });
                channel.save((error) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(channel);
                    }
                });
            });
    });
}

export default mongoose.model('Channel', ChannelSchema);