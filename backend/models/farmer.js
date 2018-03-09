const mongoose = require('mongoose');
const produceSchema = require('../schema/produce');
const objectId = mongoose.Types.ObjectId;


class farmer {
    constructor() {
        this.produceModel = mongoose.model('produce', produceSchema);
    }

    save(obj) {
        let produce = new this.produceModel(obj);

        return produce
            .save()
            .then(response => { return response; })
            .catch(err => { return err });
    }

    getproduce(obj) {

    }
}