function writePost () {
    let currentUser = JSON.parse(window.localStorage.user)
    let id
    $.get(`/api/users/${currentUser.username}`, (user) => {
        id = user.id
    })
    
    $('#btnPost').click(() => {
        let title = $('#title').val()
        let body = $('#body').val()
        if(title && body ) {
            console.log('hereee')
            $.post('/api/posts',
            {
                userId : id,
                title : title,
                body : body
            }, (post) => {
                window.alert(`Hey u/${window.localStorage.user.username}, you've successfully made a post!`)
                $('#content').load('/components/all-posts.html')
            })
        }else {
            window.alert('Could not post it due to insufficient data provided')
        }
    })
    
}

writePost()
