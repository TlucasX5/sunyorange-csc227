function onAddStudents() {
    const sf1 = document.getElementById('fname1').value;
    const sl1 = document.getElementById('lname1').value;

    const sf2 = document.getElementById('fname2').value;
    const sl2 = document.getElementById('lname2').value;

    const sf3 = document.getElementById('fname3').value;
    const sl3 = document.getElementById('lname3').value;

    const sf4 = document.getElementById('fname4').value;
    const sl4 = document.getElementById('lname4').value;

    const sf5 = document.getElementById('fname5').value;
    const sl5 = document.getElementById('lname5').value;


    let s1 = (sl1 + ", " + sf1);
    let s2 = (sl2 + ", " + sf2);
    let s3 = (sl3 + ", " + sf3);
    let s4 = (sl4 + ", " + sf4);
    let s5 = (sl5 + ", " + sf5);

    let result = ("Last Name, First Name\n----------------------\n" + s1 + "\n" + s2 + "\n" + s3 + "\n" + s4 + "\n" + s5);

    const res = (result);
    document.getElementById('res').value = res;
}