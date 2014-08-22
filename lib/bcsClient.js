var BCS = require('./vendor/bcs.js').BCS;


module.exports.upload = function(opt, data, path, cb){
    var client = new BCS(opt);
    client.create_object_by_content(opt.bucket, path, data, {
        filepath: path,
        callback: function(err, data){
            cb && cb(null, "0");
        }
    });
}