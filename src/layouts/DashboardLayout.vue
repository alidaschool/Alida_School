<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated class="bg-secondary">
      <q-toolbar>
        <q-btn v-if="getPageTitle === 'Dashboard'" flat dense round icon="menu" aria-label="Menu" @click="leftDrawerOpen = !leftDrawerOpen" />
        <q-btn v-else flat dense rounded icon="mdi-chevron-left" aria-label="Back Button" @click="$router.go(-1)" />

        <q-toolbar-title class="logo-font">
          {{ getPageTitle }}
        </q-toolbar-title>
        <q-btn   no-caps flat round :icon="$q.dark.isActive ? 'mdi-lightbulb-outline' : 'mdi-lightbulb-on-outline'" :color="$q.dark.isActive ? 'grey' : 'yellow'" @click="toggle_DayNight()" />
        <q-btn rounded flat class="q-mr-md" no-caps label="Visit Site" target="_blank" :to="{ name: 'Landing_Page' }" />

        <q-btn flat round :to="{ name: 'Profile' }">
          <q-avatar class="q-mr-xs">
            <img src="~assets/img/dauda.png">
          </q-avatar>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-abov :mini="miniState" @mouseover="miniState = false" @mouseout="miniState = true" mini-to-overlay :width="250" :breakpoint="500" bordered :content-class="$q.dark.isActive ? '' : 'bg-grey-3'" >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <!-- General Link -->
            <div>
              <q-item-label header>General</q-item-label>
              <q-separator  inset class="q-mx-lg" />

              <q-item clickable v-ripple v-close-popup :to="{name: 'Dashboard'}">
              <!-- <q-item  clickable v-ripple @click="leftDrawerOpen = !leftDrawerOpen" > -->
                <q-item-section avatar>
                  <q-icon name="mdi-monitor-dashboard" />
                </q-item-section>

                <q-item-section>
                  Dashboard
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple v-close-popup :to="{name: 'Admin_Blog'}">
                <q-item-section avatar>
                  <q-icon name="mdi-head-flash-outline" />
                </q-item-section>

                <q-item-section>
                  Blogs
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple v-close-popup :to="{name: 'Students'}">
                <q-item-section avatar>
                  <q-icon name="mdi-account-group-outline" />
                </q-item-section>

                <q-item-section>
                  Students
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple v-close-popup :to="{name: 'Instructors'}">
                <q-item-section avatar>
                  <q-icon name="mdi-account-check-outline" />
                </q-item-section>

                <q-item-section>
                  Instructors
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple v-close-popup :to="{name: 'Courses'}">
                <q-item-section avatar>
                  <q-icon name="mdi-file-pdf-outline" />
                </q-item-section>

                <q-item-section>
                  Courses
                </q-item-section>
              </q-item>
            </div>

            <!-- Settings -->
            <div>
              <q-item-label header>Settings</q-item-label>
              <q-separator  inset class="q-mx-lg" />

              <q-item  clickable v-ripple v-close-popup :to="{name: 'Profile'}">
                <q-item-section avatar>
                  <q-icon name="mdi-account-arrow-left-outline" />
                </q-item-section>

                <q-item-section>
                  Profile
                </q-item-section>
              </q-item>

              <q-separator  />

              <q-item clickable v-ripple @click="signOut()">
                <q-item-section avatar>
                  <q-icon color="red" name="mdi-location-exit" />
                </q-item-section>

                <q-item-section >
                  Logout
                </q-item-section>
              </q-item>
            </div>
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="~assets/img/alida-badge.jpg" style="height: 150px">
          <div class="absolute-full">
            <q-avatar size="56px" class="q-mb-sm">
            </q-avatar>
            <div class="text-weight-bold"> {{ getUser.displayName }} </div>
            <div> {{ getUser.email }} </div>
          </div>
        </q-img>
      </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
    <q-page-sticky v-if="getPageTitle !== 'Dashboard'" position="bottom-left" :offset="[18, 18]">
        <q-btn outline fab rounded icon="menu" aria-label="Menu" @click="leftDrawerOpen = !leftDrawerOpen"/>
    </q-page-sticky>
  </q-layout>
</template>

<script>
import db from 'src/boot/firebase'
import firebase from 'firebase/app'
import 'firebase/auth'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'DashboardLayout',
  computed: {
    ...mapGetters('alida', ['getUser']),
    getPageTitle () {
      const _ = this
      const pageName = _.$route.name.split('_').join(' ')
      return pageName
    }
  },
  data () {
    return {
      leftDrawerOpen: false,
      miniState: true
    }
  },
  mounted () {
    const _ = this
    _.db_instructors_listener()
    _.db_students_listener()
    _.db_courses_listener()
    _.db_published_blog_listener()
    _.db_saved_blog_listener()
  },
  methods: {
    ...mapActions('alida', ['TOGGLE_MODE']),
    ...mapActions('alida', ['LOAD_INSTRUCTORS']),
    ...mapActions('alida', ['LOAD_STUDENTS']),
    ...mapActions('alida', ['LOAD_COURSES']),
    ...mapActions('alida', ['LOAD_BLOG_POST']),
    ...mapActions('alida', ['LOAD_SAVED_BLOG_POST']),
    toggle_DayNight () {
      const _ = this
      _.$q.dark.toggle()
      var status = _.$q.dark.isActive
      _.TOGGLE_MODE(status)
    },
    db_instructors_listener () {
      const _ = this
      db.collection('instructors')
        .onSnapshot((snapshot) => {
          snapshot.docChanges().forEach((change) => {
            const data = change.doc.data()
            data.id = change.doc.id
            data.dateJoined = new Date(data.dateJoined).toDateString()
            var obj = {
              data: data,
              changeType: change.type
            }
            _.LOAD_INSTRUCTORS(obj)
          })
        })
    },
    db_students_listener () {
      const _ = this
      db.collection('students')
        .onSnapshot((snapshot) => {
          snapshot.docChanges().forEach((change) => {
            const data = change.doc.data()
            data.id = change.doc.id
            data.dateJoined = new Date(data.dateJoined).toDateString()
            var obj = {
              data: data,
              changeType: change.type
            }
            _.LOAD_STUDENTS(obj)
          })
        })
    },
    db_courses_listener () {
      const _ = this
      db.collection('courses')
        .onSnapshot((snapshot) => {
          snapshot.docChanges().forEach((change) => {
            const data = change.doc.data()
            data.id = change.doc.id
            data.dateCreated = new Date(data.dateCreated).toDateString()
            var obj = {
              data: data,
              changeType: change.type
            }
            _.LOAD_COURSES(obj)
          })
        })
    },
    db_published_blog_listener () {
      const _ = this
      db.collection('blogs')
        .onSnapshot((snapshot) => {
          snapshot.docChanges().forEach((change) => {
            const data = change.doc.data()
            data.id = change.doc.id
            data.time = data.time.toDate().toDateString()
            var obj = {
              data: data,
              changeType: change.type
            }
            _.LOAD_BLOG_POST(obj)
          })
        })
    },
    db_saved_blog_listener () {
      const _ = this
      db.collection('savedBlogs')
        .onSnapshot((snapshot) => {
          snapshot.docChanges().forEach((change) => {
            const data = change.doc.data()
            data.id = change.doc.id
            data.time = data.time.toDate().toDateString()
            var obj = {
              data: data,
              changeType: change.type
            }
            _.LOAD_SAVED_BLOG_POST(obj)
          })
        })
    },
    signOut () {
      const _ = this
      // [START auth_sign_out]
      firebase.auth().signOut().then(() => {
        // Sign-out successful.
        localStorage.clear()
        _.$router.replace({
          name: 'Login'
        })
      }).catch((error) => {
        // An error happened.
        console.log(error)
        // Deletes everything from the localStorage
      })
      // [END auth_sign_out]
    }
  }
}
</script>
