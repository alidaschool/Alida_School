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
                        <q-input v-model="newCourseObj.title" filled label="Title" />
                    </div>
                    <div class="col-xs-12 col-md-6">
                        <q-input v-model="newCourseObj.price" filled label="Price" prefix="$" />
                    </div>
                    <div class="col-xs-12 col-md-6">
                        <q-input v-model="newCourseObj.duration" filled label="Duration" />
                    </div>
                    <div class="col-xs-12 col-md-6">
                        <q-input v-model="newCourseObj.teachingTime" filled label="Schedule" />
                    </div>
                    <div class="col-xs-12 col-md-6">
                        <q-input filled v-model="newCourseObj.dateCreated" mask="date" :rules="['date']" label="Date Created">
                            <template v-slot:append>
                                <q-icon name="event" class="cursor-pointer">
                                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                                    <q-date v-model="newCourseObj.dateJoined">
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
      newCourseDialog: false,
      newCourseObj: {}

    }
  }
}
</script>
