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
                        <q-input v-model="newStudentObj.name" filled label="Full Name" />
                    </div>
                    <div class="col-xs-12 col-md-6">
                        <q-select v-model="newStudentObj.gender" filled label="Gender" :options="['Male', 'Female']" />
                    </div>
                    <div class="col-xs-12 col-md-6">
                        <q-input v-model="newStudentObj.email" filled label="Email" />
                    </div>
                    <div class="col-xs-12 col-md-6">
                        <q-input v-model="newStudentObj.phone" filled label="Phone" />
                    </div>
                    <div class="col-xs-12 col-md-6">
                        <q-input v-model="newStudentObj.country" filled label="Country" />
                    </div>
                    <div class="col-xs-12 col-md-6">
                        <q-input v-model="newStudentObj.language" filled label="Language" />
                    </div>
                    <div class="col-xs-12 col-md-6">
                        <q-select v-model="newStudentObj.courses" filled label="Select Course" :options="courseOptions" multiple />
                    </div>
                    <div class="col-xs-12">
                        <q-input filled v-model="newStudentObj.dateJoined" mask="date" :rules="['date']" label="Date Joined">
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
                        <q-btn no-caps color="secondary" label="Add" style="width: 80%;" />
                    </div>
                </div>
            </q-card>
        </q-dialog>
    </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
import StudentTable from 'components/Dashboard/StudentTable.vue'
export default {
  name: 'Students',
  components: {
    StudentTable
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
      newStudenteDialog: false,
      newStudentObj: {}

    }
  }
}
</script>
