const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    //訂單編號(Auto),家事員帳號,家事員名稱,使用者帳號,使用者名稱,使用者電話,服務地址,服務時間,服務費用
    id: String,
    cleaner : {type: mongoose.Schema.Types.Mixed , ref: 'Cleaner'},
    user : {type: mongoose.Schema.Types.Mixed , ref: 'User'},
    
    serve_region: String,
    serve_date: Date,
    price: { type: Number, min: 0, max: 10000000 },
    create_time : {type:Date, default: Date.now},
    update_time : {type:Date, default: Date.now}
});

module.exports = mongoose.model('Order', OrderSchema);