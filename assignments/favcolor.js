function favColor(c1, c2, c3) {
    const arrColor = [];
    let first = '';
    let second = '';
    let third = '';

    c1 = c1.trim().charAt(0).toUppercase() + c1.slice(1);
    c2 = c2.trim().charAt(0).toUppercase() + c2.slice(1);
    c3 = c3.trim().charAt(0).toUppercase() + c3.slice(1);

    arrColor.push(c1, c2, c3);
    arrColor.sort();

    first = arrColor[0];
    second = arrColor[1];
    third = arrColor[2];

    let result = ("The colors ${first}, ${second} and ${third} are my favorites too!");
    return(result);
}


function favColorClickHandler() {
  const c1 = document.getElementById('color1').value;
  const c2 = document.getElementById('color2').value;
  const c3 = document.getElementById('color3').value;

  const res = favColor(c1, c2, c3);
  document.getElementById('res').value = res;
  }