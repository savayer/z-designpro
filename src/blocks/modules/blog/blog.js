const calcHeight = () => {
    if (document.documentElement.clientWidth <= 768) {
        return
    }
    const blog = document.querySelector('.blog__wrapper')
    const blogPostsCount = blog.childElementCount
    const maxPostsInColumn = Math.ceil(blogPostsCount / 2)    
    let postsOfTheColumn
    let finalHeight = 0

    postsOfTheColumn = maxPostsInColumn % 2 === 0
        ? document.querySelectorAll('.blog__post--column1')
        : postsOfTheColumn = document.querySelectorAll('.blog__post--column2')    
    
    postsOfTheColumn.forEach(post => {
        const heightPostWrapper = post.querySelector('.post__wrapper').clientHeight
        const marginPost = parseInt(getComputedStyle(post).marginBottom)
                
        finalHeight = finalHeight + heightPostWrapper + marginPost
    })

    blog.style.height = finalHeight + 50 + 'px'
}

window.addEventListener('load', e => {
    calcHeight()
})

window.addEventListener('resize', e => {
    calcHeight()
})