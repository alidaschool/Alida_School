<template>
    <q-page padding>
        <div class="q-ma-lg">
          <q-btn no-caps color="accent" class="q-pl-md q-pr-md q-pt-xs q-pd-sm" label="Add New" icon-right="mdi-plus" @click="newCourseDialog = !newCourseDialog" />
        </div>

        <CourseTable />

        <q-dialog v-model="newCourseDialog">
            <q-card class="q-pa-lg" style="max-width: 800px; width: 100%;">
                <div class="row q-col-gutter-md">
                    <div class="col-12">
                        <div class="text-h5 text-grey"> New Course </div>
                    </div>
                    <div class="col-xs-12">
                        <q-input v-model="newCourseObj.title" filled label="Title *" />
                    </div>
                    <div class="col-xs-12 col-md-6">
                        <q-input v-model="newCourseObj.price" filled label="Price *" prefix="$" />
                    </div>
                    <div class="col-xs-12 col-md-6">
                        <q-input v-model="newCourseObj.duration" filled label="Duration *" />
                    </div>
                    <div class="col-xs-12 col-md-6">
                        <q-input v-model="newCourseObj.teachingTime" filled label="Schedule *" />
                    </div>
                    <div class="col-xs-12 col-md-6">
                      <q-input filled v-model="newCourseObj.dateCreated" mask="date" :rules="['date']" label="Date Joined *">
                          <template v-slot:append>
                              <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                                  <q-date v-model="newCourseObj.dateCreated">
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
                        <q-btn no-caps color="secondary" label="Add" style="width: 80%;" @click="addCourse" :loading="serverBtn">
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
import CourseTable from 'components/Dashboard/CourseTable.vue'
export default {
  name: 'Courses',
  components: {
    CourseTable
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
      serverBtn: false,
      newCourseDialog: false,
      newCourseObj: {
        title: '',
        price: '',
        duration: '',
        teachingTime: '',
        dateCreated: ''
      }

    }
  },
  methods: {
    addCourse () {
      const _ = this
      //   Loop through the obj, check if any key is missing, then flag it
      const { title, price, duration, teachingTime, dateCreated } = _.newCourseObj
      if (!title.trim().length || !price.trim().length || !duration.trim().length || !teachingTime.trim().length || !dateCreated.length) {
        _.notifyAlert('info', 'mdi-information', 'Please provide values for Fields with * ', 'bottom')
        return
      }
      _.serverBtn = true
      // Add a new document with a generated id.
      db.collection('courses').add(_.newCourseObj)
        .then((docRef) => {
          _.serverBtn = false
          _.newCourseDialog = false
          //   console.log('Document written with ID: ', docRef.id)
          _.notifyAlert('positive', 'mdi-information', 'Course Added', 'bottom')
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
