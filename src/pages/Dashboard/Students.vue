<template>
    <q-page padding>
        <div class="q-ma-lg">
          <q-btn no-caps color="accent" class="q-pl-md q-pr-md q-pt-xs q-pd-sm" label="Add New" icon-right="mdi-plus" @click="newStudenteDialog = !newStudenteDialog" />
        </div>

        <StudentTable />

        <q-dialog v-model="newStudenteDialog">
            <q-card class="q-pa-lg" style="max-width: 800px; width: 100%;">
                <div class="row q-col-gutter-md">
                    <div class="col-12">
                        <div class="text-h5 text-grey"> New Student </div>
                    </div>
                    <div class="col-xs-12">
                        <q-input v-model="newStudentObj.name" filled label="Full Name *" />
                    </div>
                    <div class="col-xs-12 col-md-6">
                        <q-select v-model="newStudentObj.gender" filled label="Gender *" :options="['Male', 'Female']" />
                    </div>
                    <div class="col-xs-12 col-md-6">
                        <q-input v-model="newStudentObj.email" filled label="Email *" />
                    </div>
                    <div class="col-xs-12 col-md-6">
                        <q-input v-model="newStudentObj.phone" filled label="Phone *" />
                    </div>
                    <div class="col-xs-12 col-md-6">
                        <q-select v-model="newStudentObj.country" filled label="Country *" :options="getCountries" />
                    </div>
                    <div class="col-xs-12 col-md-6">
                        <q-input v-model="newStudentObj.language" filled label="Language *" />
                    </div>
                    <div class="col-xs-12 col-md-6">
                        <q-select v-model="newStudentObj.courses" filled label="Select Course *" :options="courseOptions" multiple />
                    </div>
                    <div class="col-xs-12">
                        <q-input filled v-model="newStudentObj.dateJoined" mask="date" :rules="['date']" label="Date Joined *">
                          <template v-slot:append>
                              <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                                  <q-date v-model="newStudentObj.dateJoined">
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
                        <q-btn no-caps color="secondary" label="Add" style="width: 80%;" :loading="serverBtn" @click="addStudent()">
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
import StudentTable from 'components/Dashboard/StudentTable.vue'
export default {
  name: 'Students',
  components: {
    StudentTable
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
      newStudenteDialog: false,
      serverBtn: false,
      newStudentObj: {
        name: '',
        gender: '',
        email: '',
        phone: '',
        country: '',
        language: '',
        courses: [],
        dateJoined: 'null'
      }

    }
  },
  methods: {
    addStudent () {
      const _ = this
      //   Loop through the obj, check if any key is missing, then flag it
      const { name, gender, email, phone, country, language, courses, dateJoined } = _.newStudentObj
      if (!name.trim().length || !gender.length || !email.trim().length || !phone.trim().length || !country.trim().length || !language.trim().length || !courses.length || !dateJoined.length) {
        _.notifyAlert('info', 'mdi-information', 'Please provide values for Fields with * ', 'bottom')
        return
      }
      _.serverBtn = true
      // Add a new document with a generated id.
      db.collection('students').add(_.newStudentObj)
        .then((docRef) => {
        //   console.log('Document written with ID: ', docRef.id)
          _.serverBtn = false
          _.newStudentObj = {}
          _.newStudenteDialog = false
          _.notifyAlert('positive', 'mdi-information', 'Student Added', 'bottom')
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
