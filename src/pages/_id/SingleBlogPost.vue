<template>
    <q-page>
        <div class="hero" :style="`background-image: url('${blog_post.imgUrl}')`">
            <div class="row" style="max-width: 800px; width: 100%; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); ">
                <div class="col-12 text-center">
                  <div class="text-white q-pl-lg q-pr-lg q-pt-md q-pb-md" style="background-color: rgba(0,0,0, 0.4); border-radius: 5px;">
                    <div class="text-h4">
                      {{ blog_post.title }}
                    </div>
                    <!-- <div class="text-subtitle2 ">by {{ blog_post.author }} | {{ blog_post.time }}</div> -->
                    <div class="text-subtitle2 ">by {{ blog_post.author }} | {{ blog_post.time }}</div>
                  </div>
                </div>
            </div>
        </div>
        <div class="q-mt-lg q-mb-lg">
          <div style="max-width: 800px; width: 100%; margin: 0 auto;">
            <div id="main-blog-section"></div>
            <q-card class="q-ml-sm q-mr-sm">
              <q-card-section class="text-h5 reading_config" v-html="blog_post.content" ></q-card-section>
            </q-card>
          </div>
        </div>
        <q-page-sticky  position="bottom-left" :offset="[18, 18]">
            <q-btn fab icon="mdi-chevron-left" color="secondary" @click="$router.go(-1)" />
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
        /* background-image: url('../../assets/img/hero.png'); */
    }
    .reading_config{
      line-height: 2em;
      word-spacing: 2px;
    }
</style>

<script>
// import AdmissionProcess from 'components/LandingPage/AdmissionProcess.vue'
import { mapGetters } from 'vuex'
import { scroll } from 'quasar'
const { getScrollTarget, setScrollPosition } = scroll
export default {
  name: 'Single_Blog_Page',
  components: {
    // AdmissionProcess
  },
  computed: {
    ...mapGetters('alida', ['getBlogPosts']),
    ...mapGetters('alida', ['getSavedBlogPosts'])
  },
  data () {
    return {
      blog_post: {},
      screenDetails: {
        width: 0,
        height: 0
      },
      scrolled: 0,
      heroHeight: 0
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  mounted () {
    const id = this.$route.params.id
    const type = this.$route.params.blogType
    this.singleBlogPost(id, type)
  },
  methods: {
    singleBlogPost (id, type) {
      const _ = this
      // eslint-disable-next-line eqeqeq
      if (type === 'saved') {
        // eslint-disable-next-line eqeqeq
        _.blog_post = _.getSavedBlogPosts.filter(blog => blog.id == id)[0]
        // console.log(_.blog_post)
      } else if (type === 'published') {
        // eslint-disable-next-line eqeqeq
        _.blog_post = _.getBlogPosts.filter(blog => blog.id == id)[0]
      }
    },
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
      this.heroHeight = document.getElementsByClassName('hero')[0].offsetHeight
      this.heroHeight_PLUS_sideNavHeight = this.heroHeight + 20
    }
  }
}
</script>
