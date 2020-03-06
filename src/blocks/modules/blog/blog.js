const defineHeightOfPosts = (posts) => {
    let finalHeight = 0
    posts.forEach(post => {
        const heightPostWrapper = post.querySelector('.post__wrapper').clientHeight
        const marginPost = parseInt(getComputedStyle(post).marginBottom)
        const paddingPost = parseInt(getComputedStyle(post).paddingTop)
                
        finalHeight = finalHeight + heightPostWrapper + marginPost + paddingPost +10
    })

    return finalHeight
}

const calcHeight = () => {
    if (document.documentElement.clientWidth <= 768) {
        return
    }
    const blog = document.querySelector('.blog__wrapper')
    if (!blog) {
        return;
    }

    const columns1Height = defineHeightOfPosts(document.querySelectorAll('.blog__post--column1'))
    const columns2Height = defineHeightOfPosts(document.querySelectorAll('.blog__post--column2'))

    if (columns1Height > columns2Height) {
        blog.style.height = columns1Height + 'px'
    } else {
        blog.style.height = columns2Height + 'px'
    }
}

window.addEventListener('load', e => {
    calcHeight()
})

window.addEventListener('resize', e => {
    calcHeight()
})