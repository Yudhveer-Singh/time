/**
  * COPYRIGHT YUDHVEER 2022
  * For Personal Use Only
  */
var orig= new Array("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','0','`','-','=','[',']',';',',','.','/','~','!','@','#','$','%','^','&','*','(',')','_','+','{','}','|',':','"',"'",'<','>','?','–','—'," ");
var num= ["46", "53", "68", "44", "06", "29", "02", "54", "64", "72", "65", "52", "41", "67", "59", "45", "88", "31", "57", "82", "42", "04", "55", "71", "22", "95", "33", "85", "27", "80", "43", "75", "97", "30", "28", "13", "63", "37", "39", "24", "21", "66", "56", "40", "38", "60", "74", "26", "32", "78", "48", "77", "11", "86", "73", "17", "62", "51", "89", "98", "19", "14", "96", "25", "58", "93", "36", "84", "79", "92", "61", "05", "09", "99", "18", "23", "47", "83", "35", "91", "50", "10", "03", "16", "94", "12", "34", "90", "01", "08", "70", "69", "81", "49", "20", "76", "15", "07", "87", "00"];
var upper= ["NX", "MF", "TE", "GU", "ER", "QS", "GB", "WC", "CU", "QO", "AQ", "CO", "NT", "FY", "JG", "EN", "JF", "GV", "IQ", "AK", "KH", "UE", "AT", "AE", "LG", "PJ", "VV", "EG", "PB", "CT", "BH", "NB", "ND", "VQ", "QV", "EO", "WK", "RI", "VE", "OG", "WF", "QJ", "XK", "GH", "QM", "DQ", "SJ", "KX", "OD", "RF", "LO", "BK", "IP", "MK", "EC", "AW", "QZ", "YJ", "PG", "GS", "MO", "OU", "DD", "SI", "UR", "YO", "XD", "KL", "PK", "KE", "ET", "OI", "VG", "HW", "XU", "QQ", "UM", "NC", "QP", "TH", "EW", "TM", "YX", "CH", "PQ", "JQ", "MW", "FK", "FJ", "LJ", "BO", "XM", "WP", "RD", "SU", "CZ", "DH", "BI", "YV", "UX"];
var lower= ["ik", "gr", "ls", "ie", "lh", "cm", "yn", "rz", "jj", "gm", "xv", "bf", "ez", "zb", "fc", "sq", "aj", "fi", "gs", "ct", "ol", "td", "pn", "pl", "bc", "oy", "wf", "vv", "ov", "dx", "df", "yo", "kc", "vj", "yh", "ss", "mn", "hy", "hm", "is", "xj", "xp", "ya", "cq", "jd", "lc", "jq", "oo", "pf", "kj", "qh", "mt", "ay", "pk", "yk", "xi", "eo", "ll", "cn", "er", "vd", "yp", "qy", "fa", "ew", "gh", "ro", "gk", "wy", "nu", "kd", "bp", "kx", "tk", "vk", "xu", "xe", "xt", "fm", "zs", "rh", "by", "tp", "ea", "tj", "ve", "ke", "bj", "pt", "iw", "th", "kb", "tv", "pj", "dg", "zk", "ix", "qv", "qa", "hr"];
var all= ["2W", "u9", "eV", "Ey", "oF", "51", "oV", "AM", "Sl", "CY", "Mv", "qM", "Am", "Ms", "Oc", "l=", "di", "Eq", "KR", "mF", "Ep", "8I", "fi", "Py", "X7", "eM", "rH", "6b", "qo", "UY", "uP", "my", "qr", "4Y", "0p", "yl", "DV", "Ax", "vq", "I5", "wy", "AS", "8g", "PF", "zW", "y2", "bP", "GA", "Ig", "FI", "Gl", "LT", "Vz", "sb", "qf", "Lm", "Zy", "TU", "ub", "Zr", "Cl", "3Y", "oD", "Sj", "0L", "76", "bm", "D8", "Fi", "mp", "Fv", "Rx", "ps", "c3", "uN", "AG", "3N", "Fh", "l0", "kT", "XC", "GE", "1M", "FM", "Ts", "Wz", "P9", "As", "D9", "66", "2f", "2c", "Hx", "eQ", "mj", "GS", "hx", "n6", "W2", "M5"];
var dup=all;
/*console.log(dup_char_up.length);
console.log(orig.length);
console.log(dup.length);*/
function enc(plain_text,cipher=dup){
   dup= cipher;
   var cipher_text="";
   for(let v of plain_text){
      for(let k=0;k<orig.length;k++){
         if(v == orig[k]){
            cipher_text+=dup[k];
         }
      }
   }
   return reverse(cipher_text);
}
function dec(cipher_text,cipher=dup){
   dup=cipher;
   var i=0;
   var tem="";
   var plain_text="";
   for(let v of reverse(cipher_text)){
      tem+=v;
      i++;
      if((i%2)==0){
         for(let k=0;k<dup.length;k++){
            if(tem == dup[k]){
               plain_text+=orig[k];
            }
         }
         tem="";
      }
   }
   return plain_text;
}


/**
 * Functions ahead
 */
function reverse(string){
   let result="";
   for(let ch of string){
      result= ch+result;
   }
   return result;
}

/*FOR GENERATING RENDOM ARRAY*/
/*ARRAY RESULT IN CONSOLE*/

/*var ch_arr= new Array("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','0',"=");
var n=100;

var arr= new Array();
var set=new Set();
for(;set.size<n;){
   let r= Math.round((Math.random())*(ch_arr.length-1));
   let c= Math.round((Math.random())*(ch_arr.length-1));
   let res=ch_arr[r]+ch_arr[c];
   set.add(res);
}
var i=0;
for(let v of set.values()){
   arr[i]=v;
   i++;
}
console.log(arr);
dup=arr;
*/