<template>
    <div class="q-pt-lg q-pa-lg">
      <div class="text-h5 text-secondary text-bold text-center q-mb-sm">CONTACT US </div>
      <div class="text-h4 text-bold  text-center">Have a question? fill the form below, to reach out to us</div>

       <!-- <div style="max-width: 50% ;width: 100%; margin: 50px auto; "> -->
       <div :style="screenDetails.width > 1000 ? 'max-width: 60%' : 'max-width: 90%' " style="width: 100%; margin: 50px auto; ">
            <div class="row q-col-gutter-md q-mt-lg">
                <div class="col-xs-12">
                    <q-card>
                        <q-card-section class="text-center">
                            <div class="text-h4"> Provide Following Details </div>
                        </q-card-section>
                        <q-card-section>
                            <q-input outlined v-model="contactus_Details.email" type="email" label="Email" :disable="server_submitBtn" />
                        </q-card-section>
                        <q-card-section>
                            <q-input outlined v-model="contactus_Details.message"  type="textarea" label="Message" :disable="server_submitBtn" />
                        </q-card-section>
                        <q-card-section class="text-center">
                            <q-btn no-caps color="primary" label="Submit" :loading="server_submitBtn" @click="submit_form()" style="width: 70%;">
                                <template #loading>
                                    <q-spinner-audio />
                                </template>
                            </q-btn>
                        </q-card-section>
                        <q-card-section class="text-center q-gutter-md">
                            <q-btn no-caps round text-color="green" icon="mdi-whatsapp" size="20px" />
                            <q-btn no-caps round text-color="blue" icon="mdi-facebook" size="20px" />
                            <q-btn no-caps round text-color="green" icon="mdi-linkedin" size="20px" />
                            <q-btn no-caps round text-color="blue" icon="mdi-twitter" size="20px" />
                        </q-card-section>
                    </q-card>
                </div>
            </div>
        </div>
        <q-resize-observer @resize="onResize" />
    </div>
</template>

<script>
export default {
  name: 'ContactUs_Component',
  data () {
    return {
      screenDetails: {
        width: 0,
        height: 0
      },
      contactus_Details: {
        email: '',
        message: ''
      },
      server_submitBtn: false
    }
  },
  methods: {
    submit_form () {
      const _ = this
      const { email, message } = _.contactus_Details
      if (!email.trim().length) {
        _.notifyAlert('negative', 'mdi-alert', 'Email Field is required', 'center')
        return
      }
      if (!message.trim().length) {
        _.notifyAlert('negative', 'mdi-alert', 'Message Field is required', 'center')
        return
      }
      _.server_submitBtn = true
      setTimeout(() => {
        _.server_submitBtn = false
        _.notifyAlert('info', 'mdi-information', 'Message Sent Successfully', 'center')
      }, 5000)
    },
    onResize (size) {
      console.log(size)
      this.screenDetails.height = size.height
      this.screenDetails.width = size.width
    },
    notifyAlert (type, icon, message, position) {
      const _ = this
      _.$q.notify({ type, icon, message, position, timeout: 1000 })
    }
  }
}
</script>
