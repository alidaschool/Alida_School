<template>
    <div class="q-pt-lg q-pa-lg bg-dark">
      <div class="text-h5 text-secondary text-bold text-center q-mb-sm">GLOBAL COMPANIES PARTNERING ALIDA </div>
      <div class="text-h4 text-bold text-white text-center">Our Hiring Partners</div>
       <div class="flex flex-center q-mt-lg partner_img">
          <div v-for="partner in partners" :key="partner.id" class="q-ma-lg">
            <q-card flat class="bg-transparent">
                <img :src="partner.imgSrc" :title="partner.name" :alt="partner.imgUrl" />
            </q-card>
          </div>
      </div>
    </div>
</template>

<style scoped>
    .partner_img div img {
        width: 200px;
        display: flex;
        justify-content: center;
    }
</style>

<script>
export default {
  name: 'Partners_Component',
  data () {
    return {
      partners: [
        { id: 0, name: 'iepme', url: 'https://www.iepandme.com/', imgSrc: require('../../assets/img/partners/iepme.png') },
        { id: 1, name: 'waladigital', url: 'https://www.waladigital.io/', imgSrc: require('../../assets/img/partners/waladigital.jpeg') },
        { id: 2, name: 'Tamborin', url: 'Tamborin.0bffcb6', imgSrc: require('../../assets/img/partners/Tamborin.0bffcb6.png') },
        { id: 3, name: 'growd', url: 'https://growd.org/', imgSrc: require('../../assets/img/partners/growd.png') },
        { id: 4, name: 'zazuu', url: 'https://zazuu.co/', imgSrc: require('../../assets/img/partners/zazuu.jpeg') },
        { id: 5, name: 'turnup travel', url: 'https://turnup.travel/', imgSrc: require('../../assets/img/partners/turnup-travel.jpeg') },
        { id: 6, name: 'sellox', url: 'https://sellox.io/', imgSrc: require('../../assets/img/partners/sellox.jpeg') },
        { id: 7, name: 'enye', url: 'https://www.enye.tech/', imgSrc: require('../../assets/img/partners/enye.jpeg') }
      ]
    }
  }
}
</script>
