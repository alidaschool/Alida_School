<template>
  <div class="q-mt-lg q-pa-xs">
    <q-table title="Instructors" :data="getInstructors" :columns="columns" row-key="name" :filter="filter" >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="name" :props="props">
            {{ props.row.name }}
          </q-td>
          <q-td key="gender" :props="props">
            {{ props.row.gender }}
          </q-td>
          <q-td key="phone" :props="props">
            {{ props.row.phone }}
          </q-td>
          <q-td key="email" :props="props">
            {{ props.row.email }}
          </q-td>
          <q-td key="country" :props="props">
            {{ props.row.country }}
          </q-td>
          <q-td key="language" :props="props">
            {{ props.row.language }}
          </q-td>
          <q-td key="editor" :props="props">
            {{ props.row.editor }}
          </q-td>
          <q-td key="salary" :props="props">
            {{ parseInt(props.row.salary).toLocaleString() }}
          </q-td>
          <q-td key="dateJoined" :props="props">
            {{ props.row.dateJoined }}
          </q-td>
          <q-td key="id" :props="props">
            <q-btn icon="mdi-eye" color="accent" flat round @click="viewInstructor(props.row.id)" />
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

    <q-dialog v-model="viewInstructorDialog">
      <q-card class="q-pa-lg" style="max-width: 800px; width: 100%;">
          <div class="row q-col-gutter-md">
              <div class="col-12">
                  <div class="text-h5 text-grey"> View {{ instructorObj.name }} Profile </div>
              </div>
              <div class="col-xs-12">
                  <q-input v-model="instructorObj.name" filled label="Full Name" />
              </div>
              <div class="col-xs-12 col-md-6">
                  <q-select v-model="instructorObj.gender" filled label="Gender" :options="['Male', 'Female']" />
              </div>
              <div class="col-xs-12 col-md-6">
                  <q-input v-model="instructorObj.email" filled label="Email" />
              </div>
              <div class="col-xs-12 col-md-6">
                  <q-input v-model="instructorObj.phone" filled label="Phone" />
              </div>
              <div class="col-xs-12 col-md-6">
                  <q-input v-model="instructorObj.location" filled label="Location" />
              </div>
              <div class="col-xs-12 col-md-6">
                  <q-select v-model="instructorObj.country" filled label="Country" :options="getCountries" />
              </div>
              <div class="col-xs-12 col-md-6">
                  <q-input v-model="instructorObj.language" filled label="Language" />
              </div>
              <div class="col-xs-12 col-md-6">
                  <q-input v-model="instructorObj.bankName" filled label="Bank Name" />
              </div>
              <div class="col-xs-12 col-md-6">
                  <q-input v-model="instructorObj.accountName" filled label="Account Name" />
              </div>
              <div class="col-xs-12 col-md-6">
                  <q-input v-model="instructorObj.accountNumber" filled label="Account Number" />
              </div>
              <div class="col-xs-12 col-md-6">
                  <q-input v-model="instructorObj.twitter" filled label="Twitter handle" />
              </div>
              <div class="col-xs-12 col-md-6">
                  <q-input v-model="instructorObj.linkedIn" filled label="linkedIn handle" />
              </div>
              <div class="col-xs-12 col-md-6">
                  <q-select v-model="instructorObj.courses" filled label="Select Course" :options="courseOptions" multiple />
              </div>
              <div class="col-xs-12 col-md-6">
                  <q-select v-model="instructorObj.editor" filled label="Editor Priviledge" :options="['true', 'false']" />
              </div>
              <div class="col-xs-12 col-md-6">
                  <q-input v-model="instructorObj.salary" filled label="Salary" />
              </div>
              <div class="col-xs-12">
                <q-input v-model="instructorObj.dateJoined" filled label="Date Joined" disable />
              </div>
              <div class="text-center" style="width: 100%;">
                  <q-btn no-caps color="secondary" label="Update" style="width: 80%;" @click="updateUserDialog = !updateUserDialog" />
              </div>
          </div>
      </q-card>
    </q-dialog>
    <q-dialog v-model="updateUserDialog">
      <q-card style="max-width: 500px; width: 90%;">
        <q-card-section>
          <div class="text-h5">Confirm Update </div>
        </q-card-section>
        <q-card-section>
          <q-input filled v-model="adminPassword" type="password" label="Password" />
        </q-card-section>
        <q-card-section class="text-center">
          <q-btn no-caps color="secondary" label="Continue" :disable="!adminPassword.trim().length" :loading="updateServerBtn" @click="editInstructor(instructorObj.id)">
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
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Instructor-Table-Component',
  computed: {
    ...mapGetters('alida', ['getInstructors']),
    ...mapGetters('alida', ['getCourses']),
    ...mapGetters('alida', ['getCountries']),
    ...mapGetters('alida', ['getPwd']),
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
      filter: '',
      adminPassword: '',
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Name',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'gender', align: 'left', label: 'Gender', field: 'gender' },
        { name: 'phone', align: 'center', label: 'Phone', field: 'phone' },
        { name: 'email', label: 'Email', field: 'email', sortable: true },
        { name: 'country', label: 'Country', field: 'country' },
        { name: 'language', label: 'Language', field: 'language' },
        { name: 'editor', label: 'Editor Status', field: 'editor' },
        { name: 'salary', label: 'Salary', field: 'salary' },
        { name: 'dateJoined', label: 'Date Joined', field: 'dateJoined' },
        { name: 'id', label: 'View', field: 'id' }
      ],
      updateServerBtn: false,
      updateUserDialog: false,
      viewInstructorDialog: false,
      instructorObj: {}
    }
  },
  mounted () {},
  methods: {
    ...mapActions('alida', ['LOAD_INSTRUCTORS']),
    viewInstructor (id) {
      const _ = this
      // eslint-disable-next-line eqeqeq
      localStorage.setItem('currentInstructor', JSON.stringify(_.getInstructors.filter(instructor => instructor.id == id)[0]))
      _.instructorObj = JSON.parse(localStorage.getItem('currentInstructor'))
      _.viewInstructorDialog = true
    },
    editInstructor (id) {
      const _ = this
      if (_.getPwd !== _.adminPassword) {
        _.notifyAlert('negative', 'mdi-alert', 'Wrong Password', 'bottom')
        return
      }
      _.updateServerBtn = true
      var washingtonRef = db.collection('instructors').doc(id)

      return washingtonRef.update(_.instructorObj)
        .then(() => {
          _.updateServerBtn = false
          _.viewInstructorDialog = false
          _.updateUserDialog = false
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
    viewInstructorDialog (val) {
      if (val) { localStorage.removeItem('currentInstructor') } /* Used to clear the save data */
    }
  }
}
</script>
