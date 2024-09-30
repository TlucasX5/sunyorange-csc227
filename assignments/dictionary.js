const index = {};

function onAddEmail() {
  const nametxt = document.getElementById('name').value;
  const emailtxt = document.getElementById('email').value;

  index[nametxt] = emailtxt;
  //return(console.log(index));
  document.getElementById('name').value = " ";
  document.getElementById('email').value = " ";
  }

function findEmail(index, nametxt) {
  if (nametxt in index) {
    return index[nametxt];
  } else {
    return("This name is not found.");
  }
}

function onShowEmail() {
  const nametxt = document.getElementById('findname').value;
  const res = findEmail(index, nametxt);
  document.getElementById('res').value = res;
}