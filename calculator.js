      function calc(event){ 

        var val = new String(event.value); 
        // clear space 
        val = val.trim(); 
        var res = document.getElementById("res"); 
        if (res.value == "0" && val != "CE" && val != "←" && val != ".") res.value = "";

        if (val != "=") res.value += val;

        if (val == "←" && res.value != "Infinity←" && res.value != "undefined←") {
            res.value = res.value.substring(0, res.value.length-2); 
            if (!res.value.length) res.value = "0";

        }
        if (val == "CE" || ((val == "←") && (res.value == "undefined←" || res.value == "Infinity←"))) res.value = "0";

        if (val == "=") {
            try {
                if (eval(res.value) == undefined) {
                    throw SyntaxError;
                }
                res.value = eval(res.value);
            }
            catch(SyntaxError) {
                res.value = "0";
                alert("Input error");
            }
        }
      } 


