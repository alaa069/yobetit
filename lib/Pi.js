"use strict";
var PIf = 3.1415926535897932;
var PIs = "14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709384460955058223172535940812848111745028410270193852110555964462294895493038196442881097566593344612847564823378678316527120190914564856692346034861045432664821339360726024914127372458700660631558817488152092096282925409171536436789259036001133053054882046652138414695194151160943305727036575959195309218611738193261179310511854807446237996274956735188575272489122793818301194912983367336244065664308602139494639522473719070217986094370277053921717629317675238467481846766940513200056812714526356082778577134275778960917363717872146844090122495343014654958537105079227968925892354201995611212902196086403441815981362977477130996051870721134999999837297804995105973173281609631859502445945534690830264252230825334468503526193118817101000313783875288658753320838142061717766914730359825349042875546873115956286388235378759375195778185778053217122680661300192787661119590921642019893809525720106548586327886593";

var MAX_DIGITS = PIs.length;
var MAX_NUM = 16;
var DEFAULT_DIGITS = 4;

/*
 * Helper Functions
 */
function digitsWarn(m_i) {
    switch (m_i) {
        case 1:
            console.warn("[WARNING] Total number of digits exceeds " + MAX_NUM + " - return value will be of type String")
            break;
        case 2:
            console.warn("[WARNING] Total number of digits exceeds " + MAX_DIGITS + " - return value will be of " + MAX_DIGITS + " digits")
            break;
        case 3:
            console.error("[ERROR] Wrong parameter - returning Math.PI");
    }
}

function assert(val) {
    if (typeof val == "undefined" || (typeof val === "number" && isNaN(val))) {
        digitsWarn(3);
        return Math.PI;
    }
    return val;
}


/**
* Returns digits of Pi in "Int", "Float", or String format
* @param {number} digits number of digits to return (default = 4)
* @param {boolen} decimalsOnly return the decimals only (default = false)
* @return {string}
*/
exports.getPi = function (digits = DEFAULT_DIGITS, decimalsOnly = false) {
    if (typeof digits !== "number") {
        digitsWarn(3);
        return Math.PI;
    }
    var res;
    if (digits < 1) {
        digits = DEFAULT_DIGITS;
    }

    if (digits > MAX_DIGITS) {
        digitsWarn(2);
        res = exports.getPiString(MAX_DIGITS, decimalsOnly);
    } else if (digits > MAX_NUM) {
        digitsWarn(1);
        res = exports.getPiString(digits, decimalsOnly);
    } else {
        if (decimalsOnly) {
            res = parseInt(PIs.slice(0, digits));
        } else {
            res = parseFloat(PIf.toFixed(digits));
        }
    }
    return assert(res);
}

/**
* Returns digits of Pi explicitly String format
* @param {number} digits number of digits to return (default = 4)
* @param {boolen} decimalsOnly return the decimals only (default = false)
* @return {string}
*/
exports.getPiString = function (digits = 4, decimalsOnly = false) {
    if (typeof digits !== "number") {
        digitsWarn(3);
        return Math.PI;
    }
    if (digits < 1) {
        digits = DEFAULT_DIGITS;
    } else if (digits > MAX_DIGITS) {
        digitsWarn(2);
        digits = MAX_DIGITS;
    }
    if (decimalsOnly) {
        return PIs.slice(0, digits);
    } else {
        return "3." + PIs.slice(0, digits);
    }
}