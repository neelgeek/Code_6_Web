const mongoose = require('mongoose');
const truckSchema = require('../schema/truckSchema');


class trucks {

    constructor() {
        this.truckModel = mongoose.model("truck", truckSchema);
    }

    save(details) {
        let truck = new this.truckModel(details);

        return truck.save().then(response => {
            return response;
        }).catch(err => {
            throw err;
        });
    }




    delete(id) {

        return this.truckModel.findByIdAndRemove(id).then(response => {
            if (response !== null) {
                return response;
            } else {
                throw new Error("No Such Truck Found")
            }
        }).catch(err => {
            throw err;
        });
    }


    toggleStatus(id, status) {
        return this.truckModel.findByIdAndUpdate(id, { activated: status }).then(response => {
            return response;
        }).catch(err => {
            throw err;
        });
    }

    updateLoc(id, loc) {
        return this.truckModel.findByIdAndUpdate(id, { currentLoc: loc }).then(response => {
            return response;
        }).catch(err => {
            throw err;
        });
    }

}
module.exports = trucks;