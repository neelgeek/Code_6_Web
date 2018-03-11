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

    find(obj) {
        var cname = obj.cropname;
        var ctype = obj.type;
        var cquantity = obj.quant;


        return this.produceModel.find({ crop: cname, type: ctype }).then(response => {

            if (response.length > 0) {
                return response;
            } else {
                throw new Error("No Produce Found");
            }
        }).catch(err => {
            return err;
        });
    }
}
module.exports = farmer;