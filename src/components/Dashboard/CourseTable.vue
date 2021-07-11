<template>
  <div class="q-mt-lg q-pa-xs">
    <q-table title="Courses" :data="getCourses" :columns="columns" row-key="name" :filter="filter" >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="title" :props="props">
            {{ props.row.title }}
          </q-td>
          <q-td key="duration" :props="props">
            {{ props.row.duration }}
          </q-td>
          <q-td key="teachingTime" :props="props">
            {{ props.row.teachingTime }}
          </q-td>
          <q-td key="price" :props="props">
            <!-- {{ props.row.price }} -->
            ${{ parseInt(props.row.price).toLocaleString() }}
          </q-td>
          <q-td key="id" :props="props">
            <q-btn icon="mdi-eye" color="accent" flat round @click="viewCourse(props.row.id)" />
          </q-td>
        </q-tr>
      </template>
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>

    <q-dialog v-model="viewCourseDialog">
      <q-card class="q-pa-lg" style="max-width: 800px; width: 100%;">
          <div class="row q-col-gutter-md">
              <div class="col-12">
                  <div class="text-h5 text-grey"> View {{ courseObj.title }} </div>
              </div>
              <div class="col-xs-12">
                  <q-input v-model="courseObj.title" filled label="Title" />
              </div>
              <div class="col-xs-12 col-md-6">
                  <q-input v-model="courseObj.price" filled label="Price" prefix="$" />
              </div>
              <div class="col-xs-12 col-md-6">
                  <q-input v-model="courseObj.duration" filled label="Duration" />
              </div>
              <div class="col-xs-12 col-md-6">
                  <q-input v-model="courseObj.teachingTime" filled label="Schedule" />
              </div>
              <div class="col-xs-12 col-md-6">
                <q-input v-model="courseObj.dateCreated" filled label="Date Created" />
              </div>
              <div class="text-center" style="width: 100%;">
                  <q-btn no-caps color="secondary" label="Update" style="width: 80%;" @click="updateCourseDialog = !updateCourseDialog" />
              </div>
          </div>
      </q-card>
  </q-dialog>
  <q-dialog v-model="updateCourseDialog">
      <q-card style="max-width: 500px; width: 90%;">
        <q-card-section>
          <div class="text-h5">Confirm Update </div>
        </q-card-section>
        <q-card-section>
          <q-input filled v-model="adminPassword" type="password" label="Password" />
        </q-card-section>
        <q-card-section class="text-center">
          <q-btn no-caps color="secondary" label="Continue" :disable="!adminPassword.trim().length" :loading="updateServerBtn" @click="editCourse(courseObj.id)">
            <template #loading>
              <q-spinner-ball />
            </template>
          </q-btn>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import db from 'src/boot/firebase'
import { mapGetters } from 'vuex'
export default {
  name: 'courses-Table-Component',
  computed: {
    ...mapGetters('alida', ['getCourses']),
    ...mapGetters('alida', ['getPwd'])
  },
  data () {
    return {
      filter: '',
      adminPassword: '',
      columns: [
        {
          name: 'title',
          required: true,
          label: 'Title',
          align: 'left',
          field: row => row.title,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'duration', align: 'left', label: 'Duration', field: 'duration' },
        { name: 'teachingTime', align: 'center', label: 'Schedule', field: 'teachingTime' },
        { name: 'price', label: 'Price Tag', field: 'price', sortable: true },
        { name: 'id', label: 'View', field: 'id' }
      ],
      updateServerBtn: false,
      updateCourseDialog: false,
      viewCourseDialog: false,
      courseObj: {}
    }
  },
  methods: {
    viewCourse (id) {
      const _ = this
      // eslint-disable-next-line eqeqeq
      localStorage.setItem('currentCourse', JSON.stringify(_.getCourses.filter(course => course.id == id)[0]))
      _.courseObj = JSON.parse(localStorage.getItem('currentCourse'))
      _.viewCourseDialog = true
    },
    editCourse (id) {
      const _ = this
      if (_.getPwd !== _.adminPassword) {
        _.notifyAlert('negative', 'mdi-alert', 'Wrong Password', 'bottom')
        return
      }
      _.updateServerBtn = true
      var washingtonRef = db.collection('courses').doc(id)

      return washingtonRef.update(_.courseObj)
        .then(() => {
          _.updateServerBtn = false
          _.viewCourseDialog = false
          _.updateCourseDialog = false
          _.adminPassword = ''
        })
        .catch((error) => {
          // The document probably doesn't exist.
          console.error('Error updating document: ', error)
          _.updateServerBtn = false
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
  },
  watch: {
    viewCourseDialog (val) {
      if (val) { localStorage.removeItem('currentCourse') } /* Used to clear the save data */
    }
  }
}
</script>
