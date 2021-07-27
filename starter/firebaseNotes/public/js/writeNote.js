window.onload = (event) => {
    console.log("window log");
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log(user)
        } else {
            window.location = "index.html"
        }
    })

}
