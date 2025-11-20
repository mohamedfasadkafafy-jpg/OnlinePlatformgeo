document.getElementById('loginForm').addEventListener('submit', function(e){
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMsg = document.getElementById('errorMsg');

    // ALL USERS IN ONE ARRAY
    const users = [
        {username: "Aya Medhat", password: "Am54", link: "https://mohamedfasadkafafy-jpg.github.io/OnlinePlatformayam/"},
        {username: "Awad", password: "As32", link: "https://mohamedfasadkafafy-jpg.github.io/OnlinePlatformawa/"}
    ];

    // FIND USER
    const validUser = users.find(user =>
        user.username.toLowerCase() === username.toLowerCase() &&
        user.password === password
    );

    if(validUser){
        window.location.href = validUser.link;
    } else {
        errorMsg.textContent = "Could not find your account";
    }
});



