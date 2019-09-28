const express = require('express');
const router = express.Router();
let bodyParser = require('body-parser');
router.use(bodyParser.json());


router.get('/', function (req, res) {
    // return message: '/ in stocksController' with status 200
    res.send('path / is being accessed');
});
//
// router.post('/generateSequence', function (req, res){
//     const input = req.body;
//     let modules = new Set(input.modules);
//     let dependents = new Set();
//
//
//     let hash = {};
//     for(let i = 0; i < input.dependencyPairs.length; i++){
//         if(hash[input.dependencyPairs[i].dependee]){
//             hash[input.dependencyPairs[i].dependee].add(input.dependencyPairs[i].dependentOn);
//             dependents.add(input.dependencyPairs[i].dependee);
//         }else{
//             hash[input.dependencyPairs[i].dependee] = new Set();
//             hash[input.dependencyPairs[i].dependee].add(input.dependencyPairs[i].dependentOn);
//             dependents.add(input.dependencyPairs[i].dependee);
//         }
//     }
//
//     let difference = new Set(
//         [...modules].filter(x => !dependents.has(x)));
//     let result = [...difference];
//     let count = 0;
//
//     for (let key in hash) {
//         console.log(key, hash[key]);
//         for (let i = 0; i < result.length; i++) {
//             if (hash[key].has(result[i])) {
//                 hash[key].delete(result[i]);
//             }
//         }
//     }
//
//     for (let key in hash) {
//         if (!hash[key].size) {
//             count++;
//         }
//     }
//
//     function isEquivalent(a, b) {
//         // Create arrays of property names
//         var aProps = Object.getOwnPropertyNames(a);
//         var bProps = Object.getOwnPropertyNames(b);
//
//         // If number of properties is different,
//         // objects are not equivalent
//         if (aProps.length != bProps.length) {
//             return false;
//         }
//
//         for (var i = 0; i < aProps.length; i++) {
//             var propName = aProps[i];
//
//             // If values of same property are not equal,
//             // objects are not equivalent
//             if (a[propName] !== b[propName]) {
//                 return false;
//             }
//         }
//
//         // If we made it this far, objects
//         // are considered equivalent
//         return true;
//     }
//     let deepClone = {};
//     while(count !== 0) {
//         for (let key in hash) {
//             if (!hash[key].size) {
//                 result.push(key);
//                 delete hash[key];
//                 count--;
//             }
//         }
//         if(isEquivalent(hash, deepClone)){
//             break;
//         }
//
//         for (let key in hash) {
//             console.log(key, hash[key]);
//             for (let i = 0; i < result.length; i++) {
//                 if (hash[key].has(result[i])) {
//                     hash[key].delete(result[i]);
//                 }
//             }
//         }
//         deepClone = JSON.parse(JSON.stringify(hash));
//
//         for (let key in hash) {
//             if (!hash[key].size) {
//                 count++;
//             }
//         }
//     }
//
//     console.log(hash);
//     console.log(result);
//
//     let array = ['a', 'b', 'c'];
//     res.status(200).send(result);;
// });

module.exports = router;
