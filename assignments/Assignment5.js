// Use nested loops to create diamond pattern

function diamondPattern(centerWidth) {
    //let centerWidth = 5;
    let s = "";

    // Build top of diamond
    for (i=1; i<=centerWidth; i+=2) {
      
      for (j=centerWidth; j>i; j-=2) {
          s += " ";
      }

      for (k=0; k<i*2-1; k+=2) {
          s += "*";
      }

      s += "\n";

    }

    
    // Build bottom of diamond
    for (i=1; i<=centerWidth; i+=2) {

      for (j=0; j<i; j+=2) {
          s += " ";
      }

      for (k=(centerWidth-i)*2-1; k>1; k-=2) {
          s += "*";
      }

      s+= "\n";

    }

    console.log(s);

}


function diamondPatternOnClickHandler() {
  const centerWidthText = document.getElementById('centerWidth').value;
  const centerWidth = Number(centerWidthText);
  const res = diamondPattern(centerWidth);
  document.getElementById('res').value = res;
  }


 //function main() {
 //   diamondPattern(centerWidth);
 //}