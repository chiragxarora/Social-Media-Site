function searchedPosts () {
    let val = $('#searchQueryInput').val()
    if (val==='') {
        $('#searched-posts-heading').text('You must enter something to search!')
        return
    }
    $('#searched-posts-heading').text(`You searched for "${val}" : `)
    $.get(`/api/posts/searchText/${val}`, (posts) => {
        $('#my-posts-list').empty()
        if (posts.length===0) {
            $('#results').text('Sorry! No results found :(')
        } else {
            $('#results').text(`${posts.length} results found!`)
        }
        for(let p of posts) {
            let time = calculateTime(p)
            $('#searched-posts-list').append(`
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


searchedPosts()