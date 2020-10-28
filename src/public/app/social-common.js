$(() => {
    $('#navbar').load('/components/navbar.html')
    $('#content').load('/components/all-posts.html')
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
                $('#nav-username').text('u/' + user.username)
            }
        })
    }else{
        console.log(`Resuming session as ${currentUser.username}`)
        $('#nav-username').text('u/' + currentUser.username)
    }
}

