function myPosts () {
    let currentUser = JSON.parse(window.localStorage.user)
    $('#my-posts-heading').text(`Posts by u/${currentUser.username}`)
    let id
    $.get(`/api/users/${currentUser.username}`, (user) => {
        id = user.id
        $.get(`/api/posts/searchUser/${id}`, (posts) => {
            $('#my-posts-list').empty()
            for(let p of posts) {
                let time = calculateTime(p)
                console.log(time)
                $('#my-posts-list').append(`
                    <a href="#" class="list-group-item list-group-item-action">
                        <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">${p.title}</h5>
                        <small>${time}</small>
                        </div>
                        <p class="mb-1">${p.body.substring(0,100)}</p>
                    </a>
                `)
            }
        })
    })

}

function calculateTime (p) {
    let d = new Date()
    let date = d.getUTCDate()
    let time
    if(date-p.createdAt.substring(8,10)==0){
        time = 'today'
    } else if (date-p.createdAt.substring(8,10)==1) {
        time = `${date-p.createdAt.substring(8,10)} day ago`
    }
    else {
        time = `${date-p.createdAt.substring(8,10)} days ago`
    }
    return time
}

myPosts()