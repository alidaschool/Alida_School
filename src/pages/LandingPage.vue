<template>
    <q-page>
        <div class="hero">
            <div class="row" style="position: absolute; top: 60%; left: 10%; transform: translate(-10%, -60%); ">
                <div class="col-12">
                    <div :class="screenDetails.height < 4917 || screenDetails.width < 6498 ? 'text-h3' : 'text-h2' " class="text-white q-mb-md" style="max-width: 700px; ">Alida School - Online Coding School</div>
                    <div :class="screenDetails.height < 4917  || screenDetails.width < 6498 ? 'text-h5' : 'text-h4' " class="text-secondary text-bold q-mb-md">Training the next generation of tech talent in Africa</div>
                    <a href="https://forms.gle/y5cdos5y91xUsChD9" target="_blank" style="text-decoration: none;">
                      <q-btn no-caps color="primary" icon-right="mdi-arrow-right" class="q-pt-sm q-pb-sm q-pl-md q-pr-md" label="Apply Now" />
                    </a>
                </div>
            </div>
        </div>
        <div class="admission_process">
            <AdmissionProcess />
        </div>
        <div class="courses" id="courseID">
            <Courses />
        </div>
        <div class="banner q-pa-lg text-center bg-dark text-white">
            <div class="text-h2 q-pa-lg">
              <a href="https://forms.gle/y5cdos5y91xUsChD9" target="_blank" style="text-decoration: none;">
                <q-btn no-caps outline color="white" icon-right="mdi-arrow-right" class="q-pt-sm q-pb-sm q-pl-md q-pr-md" label="Apply Now" />
              </a>
                <!-- <q-btn no-caps outline color="primary" label="Apply Now" class="q-pt-md q-pb-md q-pl-lg q-pr-lg" /> -->
            </div>
        </div>
        <div class="payment_plan">
            <PaymentPlan />
        </div>
        <div class="partners">
            <Partners />
        </div>
        <div class="contactus">
            <ContactUs />
        </div>
        <q-resize-observer @resize="onResize" />

    </q-page>
</template>

<style scoped>
    .hero{
        margin-top: -82px;
        height: 80vh;
        position: relative;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-blend-mode:  darken;
        background-color: rgba(0, 0, 0, 0.281);
        background-image: url('../assets/img/hero.png');
    }
</style>

<script>
import { mapGetters, mapActions } from 'vuex'
import { scroll } from 'quasar'
const { getScrollTarget, setScrollPosition } = scroll
import AdmissionProcess from 'components/LandingPage/AdmissionProcess.vue'
import Courses from 'components/LandingPage/Courses.vue'
import PaymentPlan from 'components/LandingPage/PaymentPlans.vue'
import Partners from 'components/LandingPage/Partners.vue'
import ContactUs from 'components/LandingPage/ContactUs.vue'
export default {
  name: 'Landing_Page',
  props: ['scrollAction'],
  components: {
    AdmissionProcess,
    Courses,
    PaymentPlan,
    Partners,
    ContactUs
  },
  computed: {
    ...mapGetters('alida', ['getScrollToCourses'])
  },
  data () {
    return {
      screenDetails: {
        width: 0,
        height: 0
      }
    }
  },
  methods: {
    ...mapActions('alida', ['scrollToCourses']),
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
      this.scrollToCourses()
    }
  },
  watch: {
    getScrollToCourses (val) {
      console.log(val)
      if (val) {
        this.scrollToTop('courseID')
      }
    }
  }
}
</script>
