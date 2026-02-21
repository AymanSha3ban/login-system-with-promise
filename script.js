function login(username , password) {
    
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (username.toLowerCase() === "admin" && password === "1234") {
                res("Login Successfully");
            }
            else {
                rej("Login Faild !");
                }
        }, 3000);
    });
}

let user = document.getElementById("username");
let pass = document.getElementById("password");
let logbtn = document.getElementById("btn");
let load = document.getElementById("loading");
logbtn.addEventListener("click", async (e) => {
    e.preventDefault();
    if (user.value === "" || pass.value === "") {
        alert("PLease Enter Info!!");
    }
    else {
        load.style.display = "block";
        load.innerText = "Loading......";
        try {

            let res = await login(user.value, pass.value);

            alert(res);

        } catch (err) {

            alert(err);

        } finally {

            load.style.display = "none";

        }
    }
})