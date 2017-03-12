import { STATUS_CODES } from '../constants/http';

export function errorHandler (err, req, res/*, next*/) {
    res.status = err.status || STATUS_CODES.STATUS_500;

    if (req.accepts && req.accepts('json')) {
        res.json({
            error: true,
            data: err.message || err,
        });
    } else if (res.render) {
        res.render('error', {
            message: err.message,
            error: err,
            title: 'Error',
        });
    }
}
