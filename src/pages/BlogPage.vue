<template>
    <q-page>
        <div class="hero">
            <!-- <div class="flex flex-center" style="position: absolute; top: 60%; left: 10%; transform: translate(-10%, -60%); "> -->
            <div class="row" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); ">
                <div class="col-12">
                     <vue-typer :text='["Welcome to Alida School Blog Section","Get to read so much articles","and gain varieties of knowledge"]' :repeat='Infinity' :shuffle='false' initial-action='erasing' :pre-type-delay='70' :type-delay='70' :pre-erase-delay='1500' :erase-delay='50' erase-style='backspace' :erase-on-complete='false' caret-animation='expand' ></vue-typer>
                </div>
            </div>
        </div>
        <!-- Main blog container -->
          <div class="q-mt-lg" id="main-blog-section">
            <div class="text-h2 text-center text-secondary q-mb-lg">
              Blog Posts
            </div>
            <div class="row q-col-gutter-md">
              <div class="col-md-3 q-ml-md" v-if="scrolled > heroHeight_PLUS_sideNavHeight"></div>
              <div class="col-md-3 q-ml-md" v-if="!$q.screen.lt.md" :class="scrolled > heroHeight_PLUS_sideNavHeight ? 'category-sidebar' : ''">
                <q-card>
                  <SideNav />
                </q-card>
              </div>
              <div class="col-md-8 main-blog">
                  <BlogPost />
                <!-- <div class="row q-col-gutter-md q-mb-lg">
                  <div class="col-sm-6" >
                  </div>
                </div> -->
              </div>
          </div>
        </div>

        <!-- Dialog for Blog Categories -->
        <q-dialog v-model="categoryDialog" position="right">
          <q-card style="width: 70vw">
            <q-linear-progress :value="0.6" color="pink" />
           <SideNav />
          </q-card>
        </q-dialog>
        <q-page-sticky v-if="$q.screen.lt.md" position="bottom-left" :offset="[18, 18]">
            <q-btn fab icon="mdi-filter-variant" color="secondary" @click="categoryDialog = !categoryDialog" />
            <!-- <q-btn outline fab icon="mdi-shape" color="accent" /> -->
        </q-page-sticky>
        <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-btn outline flat fab icon="mdi-chevron-up" color="secondary" @click="scrollToTop('main-blog-section')"/>
        </q-page-sticky>
        <q-resize-observer @resize="onResize" />

    </q-page>
</template>

<style scoped>
    .hero{
        margin-top: -82px;
        height: 60vh;
        position: relative;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-blend-mode:  darken;
        background-color: rgba(0, 0, 0, 0.461);
        background-image: url('../assets/img/blogBG.jpg');
    }
    .category-sidebar{
      position: fixed !important;
      top: 80px;
      z-index: 500;
    }
</style>
<style>
    @keyframes rocking {
      0%,100% {transform: rotateZ(-10deg);}
      50%     {transform: rotateZ(10deg);}
    }

    .vue-typer {
      font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
    }
    .vue-typer .custom.char.typed {
      color: #fff;
      font-size: 40px;
    }
    .vue-typer .custom.char.selected {
      color: #E91E63;
    }

    .vue-typer .custom.caret {
      animation: rocking 1s ease-in-out 0s infinite;
    }
    .vue-typer .custom.caret.typing {
      background-color: #fff;
      font-size: 30px;
    }
    .vue-typer .custom.caret.selecting {
      display: inline-block;
      background-color: #E91E63;
    }
</style>

<script>
import SideNav from 'components/LandingPage/BlogSideNav.vue'
import BlogPost from 'components/LandingPage/BlogPost.vue'
import { scroll } from 'quasar'
const { getScrollTarget, setScrollPosition } = scroll
export default {
  name: 'Blog_Page',
  components: {
    SideNav,
    BlogPost
  },
  data () {
    return {
      categoryDialog: false,
      screenDetails: {
        width: 0,
        height: 0
      },
      scrolled: 0,
      heroHeight: 0,
      sideNavHeight: 0,
      heroHeight_PLUS_sideNavHeight: 0
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    onResize (size) {
      this.screenDetails.height = size.height
      this.screenDetails.width = size.width
    },
    scrollToTop (id) {
      const ele = document.getElementById(id) // You need to get your element here
      const target = getScrollTarget(ele)
      const offset = ele.offsetTop - 100
      const duration = 1000
      setScrollPosition(target, offset, duration)
    },
    handleScroll () {
      this.scrolled = window.scrollY
      this.sideNavHeight = document.getElementsByClassName('category-sidebar')[0].offsetHeight
      this.heroHeight = document.getElementsByClassName('hero')[0].offsetHeight
      this.heroHeight_PLUS_sideNavHeight = this.heroHeight + 20
    }
  }
}
</script>
