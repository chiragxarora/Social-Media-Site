function myPosts () {
    let ps = []
    let count = 0
    let currentUser = JSON.parse(window.localStorage.user)
    $('#my-posts-heading').text(`Posts by u/${currentUser.username}`)
    let id
    $.get(`/api/users/${currentUser.username}`, (user) => {
        id = user.id
        $.get(`/api/posts/searchUser/${id}`, (posts) => {
            console.log(posts)
            $('#my-posts-list').empty()
            for(let p of posts) {
                ps.push(count)
                let time = calculateTime(p)
                $('#my-posts-list').append(`
                    <a href="#" class="list-group-item list-group-item-action" id="${count}">
                        <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">${p.title}</h5>
                        <small>${time}</small>
                        </div>
                        <p class="mb-1">${p.body.substring(0,100)}</p>
                    </a>
                `)
                count++
            }
            for(let p of ps) {
                $('#'+p).click(() => {
                    console.log(posts[p])
                    $('#content').load('/components/current-post.html', () => {    
                        $('#post-title').text(`${posts[p].title}`)
                        $('#post-author').text(`- u/${posts[p].user.username}`)
                        $('#post-body').text(`${posts[p].body}`)
                    })
                })
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