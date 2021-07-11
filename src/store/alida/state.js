import countries from '../../data/countries'
export default function () {
  return {
    countries: countries,
    isDark: false,
    pwd: '',
    user: {},
    token: '',
    scrollToCourses: false,
    blogs: [],
    saved_blogs: [],
    personal_blog_categories: [],
    // personal_blog_categories: ['all', 'food', 'life', 'tech', 'sports', 'software', 'hardware'],
    blog_categories: ['all', 'food', 'life', 'tech', 'sports', 'software', 'hardware'],
    instructors: [],
    students: [],
    courses: []
  }
}
