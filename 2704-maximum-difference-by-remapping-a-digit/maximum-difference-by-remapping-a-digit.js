/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function(num) {
    let max = ""
    let maxrep = ""

    let min = ""
    let minrep = ""

    let numstr = `${num}`
    
    console.log("numstr", numstr)
    for (let i = 0; i < numstr.length; i++){
        // get max num-string
        if (numstr[i] === "9") {
            max += "9"
        } else if (!maxrep) {
            maxrep = numstr[i]
            max += "9"
        } else if (maxrep === numstr[i]) {
            max += "9"
        } else {
            max += numstr[i]
        }

        // get min num-string
        if (numstr[i] === "0") {
            min += "0"
        } else if (!minrep) {
            minrep = numstr[i]
            min += "0"
        } else if (minrep === numstr[i]) {
            min += "0"
            continue
        } else {
            min += numstr[i]
        }
    }

    max = parseInt(max)
    let newMin = "0"
    let isValid = false
    for (let i = 0; i < min.length; i++) {
        if (min[i] === "0" && !isValid) {
            continue
        }
        newMin += min[i]
        if (!isValid) {
            isValid = true
        }
    }
    newMin = parseInt(newMin)

    return max - newMin
};