class Model {
    constructor () {
        this.source = ''; // string - url of current playable asset
        this.startTime = null; // datetime - time of start playout
    }

    // SOURCE
    setSource (source) {
        this.source = source;
        return this;
    }

    getSource() {
        return this.source;
    }
    // SOURCE END

    // START TIME
    setStartTime (startTime) {
        this.startTime = startTime;
        return this;
    }

    getStartTime() {
        return this.startTime;
    }
    // START TIME END

    getState () {
        return {
            source: this.source,
            startTime: this.startTime
        };
    }
}

export default new Model();
