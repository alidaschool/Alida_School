// import { Store } from '../store/index.js'

const routes = [
  {
    path: '/',
    component: () => import('layouts/PreloaderLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/en',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LandingPage.vue'), name: 'Landing_Page' },
      { path: '/blog', component: () => import('pages/BlogPage.vue'), name: 'Blog_page' },
      { path: '/blog details/:id', component: () => import('pages/_id/SingleBlogPost.vue'), name: 'Single_Blog_Post' }
    ]
  },
  {
    path: '/as',
    component: () => import('layouts/DashboardLayout.vue'),
    // beforeEnter: (to, from, next) => {
    //   // console.log(Store.state.userAccount.token)
    //   if (Store.state.userAccount.token) {
    //     next()
    //   } else {
    //     next({name: 'Signup'})
    //   }
    // },
    children: [
      { path: 'Dashboard', component: () => import('pages/Dashboard/Index.vue'), name: 'Dashboard' },
      { path: 'Admin Blog', component: () => import('pages/Dashboard/Blogs.vue'), name: 'Admin_Blog' },
      { path: 'Students', component: () => import('pages/Dashboard/Students.vue'), name: 'Students' },
      { path: 'Instructors', component: () => import('pages/Dashboard/Instructors.vue'), name: 'Instructors' },
      { path: 'Courses', component: () => import('pages/Dashboard/Courses.vue'), name: 'Courses' },
      { path: 'Admin Profile', component: () => import('pages/Dashboard/Profile.vue'), name: 'Profile' },
      { path: 'Add New Blog/', component: () => import('pages/Dashboard/_id/AddNewBlog.vue'), name: 'New_Blog' },
      { path: 'Edit Blog/Blog Post:id', component: () => import('pages/Dashboard/_id/EditBlog.vue'), name: 'Edit_Blog' }
    ]
  },
  {
    path: '/seniorman',
    component: () => import('src/layouts/AuthLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Dashboard/auth/Login.vue'), name: 'Login' }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
