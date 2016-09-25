import mongoose, { Schema } from 'mongoose';

const ProfileSchema = new Schema({
    email: { type: String, required: true },
    unlockedChannels: { type: Array, required: false },
    currentChannelId: { type: String, required: false },
});

ProfileSchema.set('toObject', { virtuals: true });
ProfileSchema.set('toJSON', { virtuals: true });

ProfileSchema.statics.findByEmail = function (email) {
    return new Promise((resolve, reject) => {
        this.findOne({ email }, (error, profile) => {
            if (error || !profile) {
                return reject(error);
            }
            resolve(profile);
        });
    });
}

ProfileSchema.statics.save = function ({ email, unlockedChannels = [], currentChannelId = '' }) {
    return new Promise((resolve, reject) => {
        this.findByEmail(email)
            .then((profile) => {
                reject(profile);
            })
            .catch(() => {
                const profile = new this({
                    email,
                    unlockedChannels,
                    currentChannelId,
                });
                profile.save((error) => {
                    if (error) {
                        return reject(error);
                    }
                    resolve(profile);
                });
            });
    });
}

ProfileSchema.statics.removeAll = function () {
    return new Promise((resolve ,reject) => {
        this.remove({}, (error) => {
            if (error) {
                return reject(error);
            }
            resolve();
        })
    });
}

export default mongoose.model('Profile', ProfileSchema);
