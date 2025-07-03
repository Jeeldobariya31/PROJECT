
    let  display = document.getElementById('display');

    function append(value) {
      display.innerText += value;
    }

    function clearDisplay() {
      display.innerText = '';
    }

    function calculate() {
      let a =display.innerText;
      console.log(typeof(a))
      for(let i=0;i<a.length;i++){
        if(a.charAt(i)=="+"){
          let e=a.split("+")
          let m=parseFloat(e[0]);
          let n=parseFloat(e[1]);
           console.log(e)
          
          display.innerText=m+n;
        }
        else if(a.charAt(i)=="-"){
          let e=a.split("-")
          let m=parseFloat(e[0]);
          let n=parseFloat(e[1]);
         display.innerText= (m-n);
        }
         else if(a.charAt(i)=="*"){
          let e=a.split("*")
          let m=parseFloat(e[0]);
          let n=parseFloat(e[1]);
         display.innerText=m*n;
        }
         else if(a.charAt(i)=="/"){
          let e=a.split("/")
          let m=parseFloat(e[0]);
          let n=parseFloat(e[1]);
          display.innerText=m/n;
        }
      }

      // try {
      //   display.innerText = eval(display.innerText);
      // } catch {
      //   display.innerText = 'Error';
      // }
    }
    function backs(){
       let b=display.innerText;
        display.innerText=b.substring(0,b.length-1);
    }