import mongoose, { Schema } from 'mongoose';

const ChannelSchema = new Schema({
    logo: { type: String, required: true },
    name: { type: String, required: true },
    isLocked: { type: Boolean, required: true },
    isRadio: { type: Boolean, required: true }
});

ChannelSchema.set('toObject', { virtuals: true });
ChannelSchema.set('toJSON', { virtuals: true });

ChannelSchema.statics.findByName = function (name) {
    return new Promise((resolve, reject) => {
        this.findOne({ name }, (error, channel) => {
            if (error || !channel) {
                return reject(error);
            }
            resolve(channel);
        });
    });
}

ChannelSchema.statics.getAll = function () {
    return new Promise((resolve, reject) => {
        this.find({}, (error, channels) => {
            if (error) {
                return reject(error);
            }
            resolve(channels);
        });
    });
}

ChannelSchema.statics.save = function ({ logo, name, isLocked = false, isRadio = false }) {
    return new Promise((resolve, reject) => {
        this.findByName(name)
            .then((channel) => {
                reject(channel);
            })
            .catch(() => {
                const channel = new this({
                    logo,
                    name,
                    isLocked,
                    isRadio,
                });
                channel.save((error) => {
                    if (error) {
                        return reject(error);
                    }
                    resolve(channel);
                });
            });
    });
}

ChannelSchema.statics.removeAll = function () {
    return new Promise((resolve ,reject) => {
        this.remove({}, (error) => {
            if (error) {
                return reject(error);
            }
            resolve();
        })
    });
}

export default mongoose.model('Channel', ChannelSchema);