function changeName() {
    var src = document.getElementById("nameSourceTextField");
    var dest = document.getElementById("nameDestinationTextField");
    dest.value = src.value;
}

function changeAddress() {
    var src = document.getElementById("addresssSurceTextField");
    var dest = document.getElementById("addressDestinationTextField");
    dest.value = src.value;
}

function changeState() {
    var src = document.getElementById("stateSourceTextField");
    var dest = document.getElementById("stateDestinationTextField");
    dest.value = src.value;
}

function changeGSTN() {
    var src = document.getElementById("gstnSourceTextField");
    var dest = document.getElementById("gstnDestinationTextField");
    dest.value = src.value;
}

function changePO() {
    var src = document.getElementById("poSourceTextField");
    var dest = document.getElementById("poDestinationTextField");
    dest.value = src.value;
}

var textarea = null;
window.addEventListener("load", function() {
    textarea = window.document.querySelector("textarea");
    textarea.addEventListener("keypress", function() {
        if (textarea.scrollTop != 0) {
            textarea.style.height = textarea.scrollHeight + "px";
        }
    }, false);
}, false);

function convertNumberToWords(amount) {
    var words = new Array();
    words[0] = '';
    words[1] = 'One';
    words[2] = 'Two';
    words[3] = 'Three';
    words[4] = 'Four';
    words[5] = 'Five';
    words[6] = 'Six';
    words[7] = 'Seven';
    words[8] = 'Eight';
    words[9] = 'Nine';
    words[10] = 'Ten';
    words[11] = 'Eleven';
    words[12] = 'Twelve';
    words[13] = 'Thirteen';
    words[14] = 'Fourteen';
    words[15] = 'Fifteen';
    words[16] = 'Sixteen';
    words[17] = 'Seventeen';
    words[18] = 'Eighteen';
    words[19] = 'Nineteen';
    words[20] = 'Twenty';
    words[30] = 'Thirty';
    words[40] = 'Forty';
    words[50] = 'Fifty';
    words[60] = 'Sixty';
    words[70] = 'Seventy';
    words[80] = 'Eighty';
    words[90] = 'Ninety';
    amount = amount.toString();
    var atemp = amount.split(".");
    var number = atemp[0].split(",").join("");
    var n_length = number.length;
    var words_string = "";
    if (n_length <= 9) {
        var n_array = new Array(0,0,0,0,0,0,0,0,0);
        var received_n_array = new Array();
        for (var i = 0; i < n_length; i++) {
            received_n_array[i] = number.substr(i, 1);
        }
        for (var i = 9 - n_length, j = 0; i < 9; i++,
        j++) {
            n_array[i] = received_n_array[j];
        }
        for (var i = 0, j = 1; i < 9; i++,
        j++) {
            if (i == 0 || i == 2 || i == 4 || i == 7) {
                if (n_array[i] == 1) {
                    n_array[j] = 10 + parseInt(n_array[j]);
                    n_array[i] = 0;
                }
            }
        }
        value = "";
        for (var i = 0; i < 9; i++) {
            if (i == 0 || i == 2 || i == 4 || i == 7) {
                value = n_array[i] * 10;
            } else {
                value = n_array[i];
            }
            if (value != 0) {
                words_string += words[value] + " ";
            }
            if ((i == 1 && value != 0) || (i == 0 && value != 0 && n_array[i + 1] == 0)) {
                words_string += "Crores ";
            }
            if ((i == 3 && value != 0) || (i == 2 && value != 0 && n_array[i + 1] == 0)) {
                words_string += "Lakhs ";
            }
            if ((i == 5 && value != 0) || (i == 4 && value != 0 && n_array[i + 1] == 0)) {
                words_string += "Thousand ";
            }
            if (i == 6 && value != 0 && (n_array[i + 1] != 0 && n_array[i + 2] != 0)) {
                words_string += "Hundred and ";
            } else if (i == 6 && value != 0) {
                words_string += "Hundred ";
            }
        }
        words_string = words_string.split("  ").join(" ") + "Rupees Only";
    }
    return words_string;
}

function precisionRound(number, precision) {

    var factor = Math.pow(10, precision);

    return Math.round(number * factor) / factor;

}

function amount1() {
    var a = document.getElementById("quant1").value;
    var b = document.getElementById("rate1").value;
    document.getElementById("amount1").innerHTML = precisionRound((a * b).toFixed(2), 0);

}

function amount2() {
    var a = document.getElementById("quant2").value;
    var b = document.getElementById("rate2").value;
    document.getElementById("amount2").innerHTML = precisionRound((a * b).toFixed(2), 0);
}

function amount3() {
    var a = document.getElementById("quant3").value;
    var b = document.getElementById("rate3").value;
    document.getElementById("amount3").innerHTML = precisionRound((a * b).toFixed(2), 0);
}
function amount4() {
    var a = document.getElementById("quant4").value;
    var b = document.getElementById("rate4").value;
    document.getElementById("amount4").innerHTML = precisionRound((a * b).toFixed(2), 0);
}

function amount5() {
    var a = document.getElementById("quant5").value;
    var b = document.getElementById("rate5").value;
    document.getElementById("amount5").innerHTML = precisionRound((a * b).toFixed(2), 0);
}

function amount6() {
    var a = document.getElementById("quant6").value;
    var b = document.getElementById("rate6").value;
    document.getElementById("amount6").innerHTML = precisionRound((a * b).toFixed(2), 0);
}

function amount7() {
    var a = document.getElementById("quant7").value;
    var b = document.getElementById("rate7").value;
    document.getElementById("amount7").innerHTML = precisionRound((a * b).toFixed(2), 0);
}

function amount8() {
    var a = document.getElementById("quant8").value;
    var b = document.getElementById("rate8").value;
    document.getElementById("amount8").innerHTML = precisionRound((a * b).toFixed(2), 0);
}

function totalAmountbTax() {
    var a = document.getElementById("amount1").innerHTML;
    var b = document.getElementById("amount2").innerHTML;
    var c = document.getElementById("amount3").innerHTML;
    var d = document.getElementById("amount4").innerHTML;
    var e = document.getElementById("amount5").innerHTML;
    var f = document.getElementById("amount6").innerHTML;
    var g = document.getElementById("amount7").innerHTML;
    var h = document.getElementById("amount8").innerHTML;
    document.getElementById("totalAmountbTax").innerHTML = parseFloat(a) + parseFloat(b) + parseFloat(c) + parseFloat(d) + parseFloat(e) + parseFloat(f) + parseFloat(g) + parseFloat(h);
}

function ctaxfunc() {
    var a = document.getElementById("totalAmountbTax").innerHTML;
    var b = precisionRound(document.getElementById("cper").innerHTML, 0);
    document.getElementById("ctax").innerHTML = precisionRound((a * (b / 100)).toFixed(2), 0);
}

function staxfunc() {
    var a = document.getElementById("totalAmountbTax").innerHTML;
    var b = precisionRound(document.getElementById("sper").innerHTML, 0);
    document.getElementById("stax").innerHTML = precisionRound((a * (b / 100)).toFixed(2), 0);
}

function itaxfunc() {
    var a = document.getElementById("totalAmountbTax").innerHTML;
    var b = precisionRound(document.getElementById("iper").innerHTML, 0);
    document.getElementById("itax").innerHTML = precisionRound((a * (b / 100)).toFixed(2), 0);
}

function totalTax() {
    var a = document.getElementById("ctax").innerHTML;
    var b = document.getElementById("stax").innerHTML;
    var c = document.getElementById("itax").innerHTML;
    document.getElementById("totalTax").innerHTML = parseFloat(a) + parseFloat(b) + parseFloat(c);
}

function invoice() {
    var a = document.getElementById("totalAmountbTax").innerHTML;
    var b = document.getElementById("totalTax").innerHTML;
    document.getElementById("invoice").innerHTML = parseFloat(a) + parseFloat(b);
}

function updateInvoiceAmount() {
    if (document.getElementById('invoice').innerHTML != 0) {
        word.innerHTML = convertNumberToWords(document.getElementById('invoice').innerHTML);
    }
}

function refreshValues() {
    totalAmountbTax();
    totalTax();
    invoice();
    updateInvoiceAmount();
}

window.onkeyup = function() {
    refreshValues();
}

window.onclick = function() {
    refreshValues();
}