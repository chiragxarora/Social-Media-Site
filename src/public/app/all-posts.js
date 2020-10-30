function loadPosts () {
    let ps = []
    let count = 0
    $.get('/api/posts', (posts) => {
        $('#postList').empty()
        for(let p of posts){
            ps.push(count)
            $('#postList').append(`
            <div class="col-4">
                <div class="card mb-5" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title">${p.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${p.user.username}</h6>
                    <p class="card-text">${p.body.substring(0,100)}....</p>
                    <a href="#" class="card-link" id="${count}">Read More</a>
                    <a href="#" class="card-link">Like</a>
                    </div>
                </div>
            </div>
        `)
        count++
        }
        for(let p of ps) {
            $('#'+p).click(() => {
                $('#content').load('/components/current-post.html', () => {    
                    $('#post-title').text(`${posts[p].title}`)
                    $('#post-author').text(`- u/${posts[p].user.username}`)
                    $('#post-body').text(`${posts[p].body}`)
                })
            })
        }
    })
}

loadPosts()