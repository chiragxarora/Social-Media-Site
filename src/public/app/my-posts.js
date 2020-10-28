function myPosts () {
    let currentUser = JSON.parse(window.localStorage.user)
    let id
    $.get(`/api/users/${currentUser.username}`, (user) => {
        id = user.id
        $.get(`/api/posts/searchUser/${id}`, (posts) => {
            console.log(posts)
        })
    })
    $('#my-posts-heading').text(`Posts by u/${currentUser.username}`)

}

myPosts()