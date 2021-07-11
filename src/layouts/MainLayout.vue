<template>
  <q-layout view="lHh Lpr lff">

    <q-header class="q-pa-md" :class="scrolled > 100 ? `${$q.dark.isActive ? 'bg-dark text-white' : 'bg-white text-dark'}` : 'bg-transparent text-white'" height-hint="98">
      <q-toolbar>
        <!-- <div  class="row" style="width: 100%; justify-content: space-around; "> -->
        <div  class="row" style="width: 100%; justify-content: space-between; ">
          <div @click="$router.push({ name: 'Landing_Page' })">
            <q-img src="~assets/img/logo.png" style="width: 50px;" />
          </div>
          <div class="q-gutter-md">
            <!-- <q-btn v-if="!$q.screen.lt.md" no-caps flat rounded label="Courses" @click="$router.push({ name: 'Courses' })" /> -->
            <q-btn   no-caps flat round :icon="$q.dark.isActive ? 'mdi-lightbulb-outline' : 'mdi-lightbulb-on-outline'" :color="$q.dark.isActive ? 'grey' : 'yellow'" @click="toggle_DayNight()" />
            <q-btn v-if="!$q.screen.lt.md" no-caps flat rounded label="Courses" @click="scrollToCourses_Btn()" />
            <q-btn v-if="!$q.screen.lt.md" no-caps flat rounded label="Our Blog" :to="{ name: 'Blog_page' }" />
            <a href="https://forms.gle/y5cdos5y91xUsChD9" target="_blank" style="text-decoration: none;">
              <q-btn v-if="!$q.screen.lt.md" no-caps outline icon-right="mdi-arrow-right" :color="scrolled > 100 ? 'primary': 'white'" class="arrow_animation q-mt-md" label="Apply Now" />
            </a>
            <q-btn v-if="$q.screen.lt.md"  flat round icon="menu" @click="leftDrawerOpen = !leftDrawerOpen" />
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer  v-model="leftDrawerOpen" side="left" bordered>
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <div>

              <q-item clickable v-ripple @click="scrollToCourses_Btn()">
              <!-- <q-item clickable v-ripple :to="{ name: 'Courses' }"> -->
                <q-item-section >
                  Courses
                </q-item-section>
                <q-item-section avatar>
                  <q-icon color="grey" name="mdi-folder-multiple-outline" />
                </q-item-section>
              </q-item>
              <q-separator  />
              <q-item clickable v-ripple :to="{ name: 'Blog_page' }">
                <q-item-section >
                  Blog
                </q-item-section>
                <q-item-section avatar>
                  <q-icon color="grey" name="mdi-file-edit-outline" />
                </q-item-section>
              </q-item>
              <q-separator  />
            </div>
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="~assets/img/alida-badge.jpg" style="height: 150px">
          <!-- <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="~assets/img/user.png">
            </q-avatar>
            <div class="text-weight-bold"> {{getUser.first_name}} </div>
            <div> {{getUser.phone}} </div>
          </div> -->
        </q-img>
    </q-drawer>

    <q-page-container>
      <!-- <transition enter-active-class="animated slideInRight" leave-active-class="animated slideInLeft" appear :duration="300" > -->
      <transition>
        <router-view class="layout-view"></router-view>
      </transition>
    </q-page-container>

    <q-footer elevated class="bg-dark text-center q-pa-md">
      <div>
        © {{ new Date().getFullYear() }} Alida School - Online Coding School
      </div>
    </q-footer>
    <q-resize-observer @resize="onResize" />
  </q-layout>
</template>

<style scoped>
  .arrow_animation{
    animation-name: shake-arrow 0.2s ease-in-out 0s infinity;
    /* animation: shake-arrow duration timing-function delay iteration-count direction fill-mode; */
  }
  @keyframes shake-arrow {
    0%{
      transform: translateX(0);
    }
    100%{
      transform: translateX(5px);
    }
  }
</style>

<script>
import db from 'src/boot/firebase'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'MainLayout',
  computed: {
    ...mapGetters('alida', ['getMode'])
  },
  data () {
    return {
      leftDrawerOpen: false,
      scrolled: 0,
      screenDetails: {
        width: 0,
        height: 0
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  mounted () {
    const _ = this
    _.$q.dark.set(_.getMode)
    _.db_published_blog_listener()
  },
  methods: {
    ...mapActions('alida', ['TOGGLE_MODE']),
    ...mapActions('alida', ['scrollToCourses']),
    ...mapActions('alida', ['LOAD_BLOG_POST']),
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
    onResize (size) {
      this.screenDetails.height = size.height
      this.screenDetails.width = size.width
      if (size.width > 1024) {
        // This closes the leftDrawer if it's open, once the screen size is above 1024
        this.leftDrawerOpen = false
      }
    },
    scrollToCourses_Btn () {
      const _ = this
      if (_.$route.name === 'Landing_Page') {
        this.scrollToCourses()
      } else {
        _.$router.push({ name: 'Landing_Page' })
        setTimeout(() => {
          this.scrollToCourses()
        }, 500)
      }
    },
    handleScroll () {
      this.scrolled = window.scrollY
    },
    toggle_DayNight () {
      const _ = this
      _.$q.dark.toggle()
      var status = _.$q.dark.isActive
      _.TOGGLE_MODE(status)
    }
  }
}
</script>
