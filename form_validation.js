function user_form() {
    let fname = document.form1.fname.value;
    if (fname == "" || fname == null) {
        alert("Please Enter Your First Name");
        document.form1.fname.focus();
        return false;
    }
    else if (!isNaN(fname)) {
        alert("Enter Alphabet")
    }

    let mname = document.form1.mname.value;
    if (mname == "" || mname == null) {
        alert("Please Enter Your Middle Name");
        document.form1.mname.focus();
        return false;
    }
    else if (!isNaN(mname)) {
        alert("Enter Alphabet")
    }

    let lname = document.form1.lname.value;
    if (lname == "" || lname == null) {
        alert("Please Enter Your Last Name");
        document.form1.lname.focus();
        return false;
    }
    else if (!isNaN(lname)) {
        alert("Enter Alphabet")

    }

    let birth = document.form1.dob.value;
    if (birth == false) {
        alert("select your birth date")
        return false;
    }

    let mno = document.form1.mno.value;
    if (mno == "") {
        alert("Please Enter Mobile No");
        return false;
    }
    else if (isNaN(mno)) {
        alert("Enter Only Digits");
        return false;
    }
    else if (mno.length < 10) {
        alert("Enter Only 10 Digits");
        return false;
    }
    else if (mno.length > 10) {
        alert("Enter Only 10 Digits");
        return false;
    }



    let add = document.form1.add.value;
    if (add == "") {
        alert("Please Enter Your Address");
        return false;
    }

    let city = document.form1.city.value;
    if (city == -1) {
        alert("Please Select City");
        return false;
    }

    let state = document.form1.state.value;
    if (state == -1) {
        alert("Please Select State");
        return false;
    }

    let male = document.form1.gen[0].checked;
    let female = document.form1.gen[1].checked;
    if (male == false && female == false) {
        alert("Select a Gender");
        return false;
    }

    let check1 = document.form1.c1.checked;
    let check2 = document.form1.c2.checked;
    let check3 = document.form1.c3.checked;
    let check4 = document.form1.c4.checked;
    let check5 = document.form1.c5.checked;
    if (check1 == false && check2 == false && check3 == false && check4 == false && check5 == false) {
        alert("Please Select Hobbies");
        return false;
    }
    let email = document.form1.email.value;
    if (email == "") {
        alert("Enter Your Email");
        return false;
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
    } else {
        alert("You have entered an invalid email address!");
        return false;
    }
}