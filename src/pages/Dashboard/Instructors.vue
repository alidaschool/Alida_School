<template>
    <q-page padding>
        <div class="q-ma-lg">
          <q-btn no-caps color="accent" class="q-pl-md q-pr-md q-pt-xs q-pd-sm" label="Add New" icon-right="mdi-plus" @click="newInstructorDialog = !newInstructorDialog" />
        </div>

        <InstructorTable />

        <q-dialog v-model="newInstructorDialog">
          <q-card class="q-pa-lg" style="max-width: 800px; width: 100%;">
              <div class="row q-col-gutter-md">
                  <div class="col-12">
                      <div class="text-h5 text-grey"> New Instructor </div>
                  </div>
                  <div class="col-xs-12">
                      <q-input v-model="newInstructorObj.name" filled label="Full Name *" />
                  </div>
                  <div class="col-xs-12 col-md-6">
                      <q-select v-model="newInstructorObj.gender" filled label="Gender *" :options="['Male', 'Female']" />
                  </div>
                  <div class="col-xs-12 col-md-6">
                      <q-input v-model="newInstructorObj.email" filled label="Email *" />
                  </div>
                  <div class="col-xs-12 col-md-6">
                      <q-input v-model="newInstructorObj.phone" filled label="Phone *" />
                  </div>
                  <div class="col-xs-12 col-md-6">
                      <q-input v-model="newInstructorObj.location" filled label="Location" />
                  </div>
                  <div class="col-xs-12 col-md-6">
                      <q-select v-model="newInstructorObj.country" filled label="Country *" :options="getCountries" />
                  </div>
                  <div class="col-xs-12 col-md-6">
                      <q-input v-model="newInstructorObj.language" filled label="Language *" />
                  </div>
                  <div class="col-xs-12 col-md-6">
                      <q-input v-model="newInstructorObj.bankName" filled label="Bank Name" />
                  </div>
                  <div class="col-xs-12 col-md-6">
                      <q-input v-model="newInstructorObj.accountName" filled label="Account Name" />
                  </div>
                  <div class="col-xs-12 col-md-6">
                      <q-input v-model="newInstructorObj.accountNumber" filled label="Account Number" />
                  </div>
                  <div class="col-xs-12 col-md-6">
                      <q-input v-model="newInstructorObj.twitter" filled label="Twitter handle" />
                  </div>
                  <div class="col-xs-12 col-md-6">
                      <q-input v-model="newInstructorObj.linkedIn" filled label="linkedIn handle" />
                  </div>
                  <div class="col-xs-12 col-md-6">
                      <q-select v-model="newInstructorObj.courses" filled label="Select Course *" :options="courseOptions" multiple />
                  </div>
                  <div class="col-xs-12 col-md-6">
                      <q-select v-model="newInstructorObj.editor" filled label="Editor Priviledge" :options="['true', 'false']" />
                  </div>
                  <div class="col-xs-12 col-md-6">
                      <q-input v-model="newInstructorObj.salary" type="number" filled label="Salary *" />
                  </div>
                  <div class="col-xs-12">
                      <q-input filled v-model="newInstructorObj.dateJoined" mask="date" :rules="['date']" label="Date Joined *">
                          <template v-slot:append>
                              <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                                  <q-date v-model="newInstructorObj.dateJoined">
                                  <div class="row items-center justify-end">
                                      <q-btn v-close-popup label="Close" color="primary" flat />
                                  </div>
                                  </q-date>
                              </q-popup-proxy>
                              </q-icon>
                          </template>
                      </q-input>
                  </div>
                  <div class="text-center" style="width: 100%;">
                      <q-btn no-caps color="secondary" label="Add" style="width: 80%;" @click="addInstructor()" :loading="serverBtn">
                        <template #loading>
                            <q-spinner-ball />
                        </template>
                    </q-btn>
                  </div>
              </div>
          </q-card>
        </q-dialog>
    </q-page>
</template>

<script>
import db from 'src/boot/firebase'
import { mapGetters } from 'vuex'
import InstructorTable from 'components/Dashboard/InstructorTable.vue'
export default {
  name: 'Instructors',
  components: {
    InstructorTable
  },
  computed: {
    ...mapGetters('alida', ['getCourses']),
    ...mapGetters('alida', ['getCountries']),
    courseOptions () {
      const _ = this
      return _.getCourses.map(course => course.title)
    }
  },
  data () {
    return {
      serverBtn: false,
      newInstructorDialog: false,
      newInstructorObj: {
        name: '',
        gender: '',
        email: '',
        phone: '',
        country: '',
        language: '',
        bankName: '',
        accountName: '',
        accountNumber: '',
        twitter: '',
        linkedIn: '',
        courses: [],
        editor: '',
        salary: '',
        dateJoined: ''
      }

    }
  },
  methods: {
    addInstructor () {
      const _ = this
      //   Loop through the obj, check if any key is missing, then flag it
      const { name, gender, email, phone, country, language, courses, salary, dateJoined } = _.newInstructorObj
      if (!name.trim().length || !gender.length || !email.trim().length || !phone.trim().length || !country.trim().length || !language.trim().length || !courses.length || !salary.trim().length || !dateJoined.length) {
        _.notifyAlert('info', 'mdi-information', 'Please provide values for Fields with * ', 'bottom')
        return
      }
      _.serverBtn = true
      // Add a new document with a generated id.
      db.collection('instructors').add(_.newInstructorObj)
        .then((docRef) => {
          _.serverBtn = false
          //   console.log('Document written with ID: ', docRef.id)
          _.notifyAlert('positive', 'mdi-information', 'Instructor Added', 'bottom')
        })
        .catch((error) => {
          _.serverBtn = false
          _.notifyAlert('alert', 'mdi-alert', error, 'bottom')
          console.error('Error adding document: ', error)
        })
    },
    notifyAlert (type, icon, message, position) {
      const _ = this
      _.$q.notify({
        type: type,
        message: message,
        // color: color,
        textColor: 'white',
        icon: icon,
        position: position
      })
    }
  }
}
</script>
