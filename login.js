function login() {
    let uname = document.form1.uname.value;
    let pass = document.form1.upass.value;

    if (uname == "") {
        document.getElementById("uname").innerHTML = "Please Enter User Name";

        // document.getElementById("u_name").innerHTML = "<style>#u_name{border:3px solid red; border-radius:10px;}</style>";
        return false;
    }
    if (pass == "") {
        document.getElementById("upass").innerHTML = "Please Enter Password";
        // document.getElementById("pwd").innerHTML = "<style>#pwd{border:3px solid red; border-radius:10px;}</style>";
        return false;
    }
    if (pass == "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$") {
        document.getElementById("upass").innerHTML = "Please enter valid password";
        // alert("Please enter valid password");
        return false;
    }
}