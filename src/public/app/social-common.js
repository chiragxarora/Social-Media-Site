$(() => {
    $('#navbar').load('/components/navbar.html', loginIfNeeded)
    $('#footer').load('/components/footer.html')
})

function loginIfNeeded () {
    let currentUser = window.localStorage.user ? JSON.parse(window.localStorage.user) : null
    if(currentUser === null){
        $.post('/api/users', {}, (user) => {
            if (user) {
                window.alert(`Registered current user as : ${user.username}`)
                console.log(`Registered current user as : ${user.username}`)
                window.localStorage.user = JSON.stringify(user)
                $('#nav-username').text(user.username)
            }
        })
    }else{
        console.log(`Resuming session as ${currentUser.username}`)
        $('#nav-username').text(currentUser.username)
    }
}