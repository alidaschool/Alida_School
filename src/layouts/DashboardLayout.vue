<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated class="bg-secondary">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

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

    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above

        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
        mini-to-overlay
        :width="250"
        :breakpoint="500"
        bordered
        :content-class="$q.dark.isActive ? '' : 'bg-grey-3'"
      >
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

              <q-item clickable v-ripple @click="$router.replace({ name: 'Login' })">
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
            <div class="text-weight-bold"> Dauda Barry </div>
            <div> alidaschoolcode@gmail.com </div>
          </div>
        </q-img>
      </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'DashboardLayout',
  computed: {
    dashboardBanner () {
      const _ = this
      return _
      // return _.$q.dark.isActive ? require('../assets/img/dashNight.jpg') : require('../assets/img/dashDay.jpg')
    },
    getPageTitle () {
      const _ = this
      var lastIndex = _.$route.path.lastIndexOf('/')
      const pageName = _.$route.path.split('').splice(lastIndex + 1).join('')
      return pageName.length ? pageName : 'Admin Dashboard'
    }
  },
  data () {
    return {
      leftDrawerOpen: false,
      miniState: true
    }
  },
  methods: {
    ...mapActions('alida', ['TOGGLE_MODE']),
    toggle_DayNight () {
      const _ = this
      _.$q.dark.toggle()
      var status = _.$q.dark.isActive
      _.TOGGLE_MODE(status)
    }
  }
}
</script>
