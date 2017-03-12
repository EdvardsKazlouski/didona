import model from '../model';

export const getState = (req, res) => {
    const state = model.getState();

    res.json(state);
};
