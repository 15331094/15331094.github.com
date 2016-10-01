      function calc(event){ 

        var val = new String(event.value); 
        // clear space 
        val = val.trim(); 
        var res = document.getElementById("res"); 
        if (val != "=") {
        	res.value += val;
        }
        if (val == "←") {
        	res.value = res.value.substring(0, res.value.length-2); 
        }
        if (val == "CE") {
        	res.value = "";
        }
        if (val == "=") {
        	try {
        		res.value = eval(res.value);
        	}
        	catch(SyntaxError) {
        		res.value = "";
        		alert("Input error");
        	}
        }
      } 


