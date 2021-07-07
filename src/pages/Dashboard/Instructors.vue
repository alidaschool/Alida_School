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
                      <q-input v-model="newInstructorObj.name" filled label="Full Name" />
                  </div>
                  <div class="col-xs-12 col-md-6">
                      <q-select v-model="newInstructorObj.gender" filled label="Gender" :options="['Male', 'Female']" />
                  </div>
                  <div class="col-xs-12 col-md-6">
                      <q-input v-model="newInstructorObj.email" filled label="Email" />
                  </div>
                  <div class="col-xs-12 col-md-6">
                      <q-input v-model="newInstructorObj.phone" filled label="Phone" />
                  </div>
                  <div class="col-xs-12 col-md-6">
                      <q-input v-model="newInstructorObj.location" filled label="Location" />
                  </div>
                  <div class="col-xs-12 col-md-6">
                      <q-input v-model="newInstructorObj.country" filled label="Country" />
                  </div>
                  <div class="col-xs-12 col-md-6">
                      <q-input v-model="newInstructorObj.language" filled label="Language" />
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
                      <q-select v-model="newInstructorObj.courses" filled label="Select Course" :options="courseOptions" multiple />
                  </div>
                  <div class="col-xs-12 col-md-6">
                      <q-select v-model="newInstructorObj.editor" filled label="Editor Priviledge" :options="['true', 'false']" />
                  </div>
                  <div class="col-xs-12 col-md-6">
                      <q-input v-model="newInstructorObj.salary" filled label="Salary" />
                  </div>
                  <div class="col-xs-12">
                      <q-input filled v-model="newInstructorObj.dateJoined" mask="date" :rules="['date']" label="Date Joined">
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
                      <q-btn no-caps color="secondary" label="Add" style="width: 80%;" />
                  </div>
              </div>
          </q-card>
        </q-dialog>
    </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
import InstructorTable from 'components/Dashboard/InstructorTable.vue'
export default {
  name: 'Instructors',
  components: {
    InstructorTable
  },
  computed: {
    ...mapGetters('alida', ['getCourses']),
    courseOptions () {
      const _ = this
      var arr = []
      _.getCourses.forEach(course => {
        arr.push(course.title)
      })
      return arr
    }
  },
  data () {
    return {
      newInstructorDialog: false,
      newInstructorObj: {}

    }
  }
}
</script>
