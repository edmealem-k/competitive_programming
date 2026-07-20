/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
   const res = {};

   for (const s of strs) {
    // create an array of 26 zeros
    const count = new Array(26).fill(0);

    // count frequencies using charCodeAt
    for (const c of s) {
        count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    // convert array to string keys (e.g. "1,0,0,1...")
    const key = count.join(',');

    // intialize the group if it does not exist
    if (!res[key]){
        res[key] = [];
    }

    res[key].push(s);
   } 

   // return all grouped anagram arrays
   return Object.values(res);
};