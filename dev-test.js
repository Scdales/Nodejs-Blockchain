const Blockchain = require('./blockchain');

const bc = new Blockchain();

for (var i = 0;i < 10; i++) {
    console.log(bc.addBlock(`foo ${i}`).toString());
}