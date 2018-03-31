const mongoose = require('mongoose');
const shareGroupSchema = require('../schema/shareGroupSchema');



function ab() {
    let ShareGroupModel = mongoose.model('sharegroup', shareGroupSchema);
    ShareGroupModel.find({}).then(response => {
        return response;
    });
}


ab().then(a => {
    console.log(a);
});