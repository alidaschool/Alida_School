<template>
    <div class="q-pt-lg q-pa-lg">
      <div class="text-h5 text-secondary text-bold text-center q-mb-sm">PAYMENT PLANS </div>
      <div class="text-h4 text-bold text-center">Choose a payment plan</div>

      <!-- <div style="max-width: 70% ;width: 100%; margin: 50px auto; "> -->
      <div :style="screenDetails.width < 1374 ? 'max-width: 95%' : 'max-width: 80%' " style="width: 100%; margin: 50px auto; ">
        <div class="row q-col-gutter-md q-mt-lg">
          <div class="col-sm-12 col-md-6">
            <q-card>
              <q-card-section class="text-center text-bold text-secondary text-h4"> FrontEnd Web Development </q-card-section>
              <q-card-section class="text-center text-bold text-grey"> Make one-time payment of $180 for your FrontEnd Web Course </q-card-section>
            </q-card>
          </div>
          <div class="col-sm-12 col-md-6">
            <q-card>
              <q-card-section class="text-center text-bold text-secondary text-h4"> BackEnd Web Development </q-card-section>
              <q-card-section class="text-center text-bold text-grey"> Make one-time payment of $180 for your BackEnd Web Course </q-card-section>
            </q-card>
          </div>
          <div class="col-sm-12 col-md-6">
            <q-card>
              <q-card-section class="text-center text-bold text-secondary text-h4"> Full-Stack Developer </q-card-section>
              <q-card-section class="text-center text-bold text-grey"> Make one-time payment of $500 for your Data Science Course </q-card-section>
            </q-card>
          </div>
          <div class="col-sm-12 col-md-6">
            <q-card>
              <q-card-section class="text-center text-bold text-secondary text-h4"> App Development (iOS and Android) </q-card-section>
              <q-card-section class="text-center text-bold text-grey"> Make one-time payment of $500 for your Mobile App Course </q-card-section>
            </q-card>
          </div>
          <div class="col-sm-12 col-md-6">
            <q-card>
              <q-card-section class="text-center text-bold text-secondary text-h4"> Data Science </q-card-section>
              <q-card-section class="text-center text-bold text-grey"> Make one-time payment of $500 for your Data Science Course </q-card-section>
            </q-card>
          </div>
          <div class="col-sm-12 col-md-6">
            <q-card>
              <q-card-section class="text-center text-bold text-secondary text-h4"> Advanced Data Science </q-card-section>
              <q-card-section class="text-center text-bold text-grey"> Make one-time payment of $500 for your Advanced DS Course </q-card-section>
            </q-card>
          </div>
          <div class="col-sm-12 col-md-12">
            <q-card>
              <q-card-section class="text-center text-bold text-secondary text-h4"> Income share agreement (ISA) </q-card-section>
              <q-card-section class="text-center text-bold text-grey"> 10% of your salary when you get hired, Every month for 1 year. </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
        <q-resize-observer @resize="onResize" />
    </div>
</template>

<script>
export default {
  name: 'PaymentPlan_Component',

  data () {
    return {
      screenDetails: {
        width: 0,
        height: 0
      }
    }
  },
  methods: {
    onResize (size) {
      this.screenDetails.height = size.height
      this.screenDetails.width = size.width
    }
  }
}
</script>
