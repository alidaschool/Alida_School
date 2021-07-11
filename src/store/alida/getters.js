export function getMode (state) {
  return state.isDark
}
export function getCountries (state) {
  return state.countries.map(country => country.name)
}
export function getPwd (state) {
  return state.pwd
}
export function getUser (state) {
  return state.user
}
export function getScrollToCourses (state) {
  return state.scrollToCourses
}

export function getFilteredBlogPosts (state) {
  // Sort by date here, or do that with firebase
  // i will do the filtering here, using the user's custom category picks

  //   1. Searching through the blog post, to filter ones with same category
  //   This will essentially, loop through the personal_blog_categories, which is an array
  // Then check if the current blog's category in the loop, is found within the array, then return blog

  const filteredBlogArr = state.blogs.filter(blog => state.personal_blog_categories.includes(blog.category.toLowerCase()))
  return filteredBlogArr.length ? filteredBlogArr : state.blogs
}
export function getBlogPosts (state) {
  return state.blogs
}
export function getSavedBlogPosts (state) {
  return state.saved_blogs
}
export function getInstructors (state) {
  return state.instructors
}
export function getStudents (state) {
  return state.students
}
export function getMaleStudents (state) {
  return state.students.filter(student => student.gender.toLowerCase() === 'male')
}
export function getFemaleStudents (state) {
  return state.students.filter(student => student.gender.toLowerCase() === 'female')
}
export function getCourses (state) {
  return state.courses
}
export function getBlogCategories (state) {
  return state.blog_categories
}
export function getPersonalBlogCategories (state) {
  return state.personal_blog_categories
}
