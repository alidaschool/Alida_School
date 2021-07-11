
export function TOGGLE_MODE ({ commit }, payload) {
  commit('TOGGLE_MODE', payload)
}
export function pwd ({ commit }, payload) {
  commit('pwd', payload)
}
export function LOAD_FIREBASE_USER ({ commit }, payload) {
  commit('LOAD_FIREBASE_USER', payload)
}
export function ADD_NEW_BLOG_POST ({ commit }, payload) {
  commit('ADD_NEW_BLOG_POST', payload)
}
export function LOAD_BLOG_POST ({ commit }, payload) {
  commit('LOAD_BLOG_POST', payload)
}
export function LOAD_INSTRUCTORS ({ commit }, payload) {
  commit('LOAD_INSTRUCTORS', payload)
}
export function LOAD_STUDENTS ({ commit }, payload) {
  commit('LOAD_STUDENTS', payload)
}
export function LOAD_COURSES ({ commit }, payload) {
  commit('LOAD_COURSES', payload)
}
export function LOAD_SAVED_BLOG_POST ({ commit }, payload) {
  commit('LOAD_SAVED_BLOG_POST', payload)
}
export function EDIT_BLOG_POST ({ commit }, payload) {
  commit('EDIT_BLOG_POST', payload)
}
export function CUSTOM_BLOG_CATEGORY ({ commit }, payload) {
  commit('CUSTOM_BLOG_CATEGORY', payload)
}
export function scrollToCourses ({ commit }) {
  commit('scrollToCourses')
}
