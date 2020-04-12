/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  var res = n.toString(2).replace(/0/g, "");
  /*var counter =0;
   for(let i=0;i<res.length;i++){
       if(res[i] === '1'){
           counter+=1;
       }
   }*/

  return res.length;
};
