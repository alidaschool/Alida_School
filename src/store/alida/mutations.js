
export function TOGGLE_MODE (state, payload) {
  state.isDark = payload
}
export function ADD_NEW_BLOG_POST (state, payload) {
  // this will first send it to firebase firestore from the other side, then when successfull, it'll be stored in the state
  state.blogs.push(payload)
}
export function EDIT_BLOG_POST (state, payload) {
  // this will first send it to firebase firestore from the other side, then when successfull, it'll be stored in the state
  const { blogObj, blogType } = payload
  const id = blogObj.id
  if (blogType === 'saved') {
    state.saved_blogs.filter(blog => {
      // eslint-disable-next-line eqeqeq
      if (blog.id == id) {
        for (var key in blogObj) {
          blog[key] = blogObj[key]
        }
      }
    })
  } else if (blogType === 'published') {
    state.blogs.filter(blog => {
      // eslint-disable-next-line eqeqeq
      if (blog.id == id) {
        for (var key in blogObj) {
          blog[key] = blogObj[key]
        }
      }
    })
  }
}
export function CUSTOM_BLOG_CATEGORY (state, payload) {
  // This will be an array, to check if the user wants to be seeing
  // multiply categories at once, so, use new Set, or filter method, to remove
  // duplicate elements
  if (payload === 'all') {
    state.personal_blog_categories = []
    state.personal_blog_categories.push('all')
  } else if (state.personal_blog_categories.includes(payload)) {
    //   Meaning the user has selected it before, hence we will remove it...
    var index = state.personal_blog_categories.findIndex(blogCat => blogCat === payload)
    state.personal_blog_categories.splice(index, 1)
    if (state.personal_blog_categories.length === 0) {
      state.personal_blog_categories.push('all')
      console.log('Built with love & Passion by George Ikwegbu \n g.ikwegbu@gmail.com 🥰')
    }
  } else {
    // Pushes the new tab in the array
    state.personal_blog_categories.push(payload)
    // This will remove the 'all' tab that was already there...
    var indexForAll = state.personal_blog_categories.findIndex(blogCat => blogCat === 'all')
    if (indexForAll !== -1) {
      // Coincidentally, the index of 'all' in the array is 0, hence the why i used the '-1'
      state.personal_blog_categories.splice(indexForAll, 1)
    }
  }
}
