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
        console.log(obj);
        var cname = obj.cropname;
        var ctype = obj.type;
        var cquantity = Number(obj.quantity);


        return this.produceModel.find({ crop: cname, type: ctype, quantity: { $gt: cquantity } }).then(response => {

            if (response.length != null) {
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