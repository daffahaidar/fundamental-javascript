// logic in non boolean

// or logic "||"
let a = true || false; // will return true
let b = false || false; // will return false
let c = "Daffa" || "Haidar"; // will return "Daffa"
let d = null || "Haidar"; // will return "Haidar"
let e = undefined || "Haidar"; // will return "Haidar"
let f = NaN || "Haidar"; // will return "Haidar"
let g = "" || "Haidar"; // will return "Haidar"

// and logic "&&"
let h = true && false; // will return false
let i = false && false; // will return false
let j = "Daffa" && "Haidar"; // will return "Haidar"
let k = null && "Haidar"; // will return null
let l = undefined && "Haidar"; // will return undefined
let m = NaN && "Haidar"; // will return NaN
let n = "" && "Haidar"; // will return ""
