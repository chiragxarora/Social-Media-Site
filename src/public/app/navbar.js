let navLinks = $('.navbar-nav .nav-link')
navLinks.push($('.navbar-brand')[0])
navLinks.push($('#searchQueryButton')[0])
$(navLinks[0]).addClass('active')
navLinks.click((ev) => {
    for(n of navLinks){
        if (n!=ev.target) {
            $(n).removeClass('active')
        }else {
            $(n).addClass('active')
        }
    }
    $(ev.target).addClass('active')
    let componentUrl = `/components/${$(ev.target).attr('data-component')}.html`
    $('#content').load(componentUrl)
})