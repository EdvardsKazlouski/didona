// model
import ProfileSchema from '../model/profile';

// formatters
import { formatProfile } from '../formatters/profile';

// constants
import { STATUS_CODES } from '../constants/http';

export const getProfileByEmail = (req, res) => {
    const email = req.params.email;

    ProfileSchema.findByEmail(email)
        .then((profile) => {
            res.json(formatProfile(profile));
        })
        .catch(() => {
            res.status(STATUS_CODES.STATUS_500).end();
        });
};
