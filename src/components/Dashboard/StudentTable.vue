<template>
  <div class="q-mt-lg q-pa-xs">
    <q-table title="Students" :data="getStudents" :columns="columns" row-key="name" :filter="filter" >
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
          <q-td key="contentWriter" :props="props">
            {{ props.row.contentWriter }}
          </q-td>
          <q-td key="dateJoined" :props="props">
            {{ new Date(props.row.dateJoined).toDateString() }}
          </q-td>
          <q-td key="id" :props="props">
            <q-btn icon="mdi-eye" color="accent" flat round @click="viewStudent(props.row.id)" />
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

    <q-dialog v-model="viewStudentDialog">
      <q-card class="q-pa-lg" style="max-width: 800px; width: 100%;">
        <div class="row q-col-gutter-md">
          <div class="col-12">
              <div class="text-h5 text-grey"> View {{ studentObj.name }} Profile </div>
          </div>
          <div class="col-xs-12">
              <q-input v-model="studentObj.name" filled label="Full Name" />
          </div>
          <div class="col-xs-12 col-md-6">
              <q-input v-model="studentObj.gender" filled label="Gender" />
          </div>
          <div class="col-xs-12 col-md-6">
              <q-input v-model="studentObj.email" filled label="Email" />
          </div>
          <div class="col-xs-12 col-md-6">
              <q-input v-model="studentObj.phone" filled label="Phone" />
          </div>
          <div class="col-xs-12 col-md-6">
              <q-input v-model="studentObj.country" filled label="Country" />
          </div>
          <div class="col-xs-12 col-md-6">
              <q-input v-model="studentObj.language" filled label="Language" />
          </div>
          <div class="col-xs-12 col-md-6">
              <q-input v-model="studentObj.courses" filled label="Course Track" />
          </div>
          <div class="col-xs-12">
              <q-input v-model="studentObj.dateJoined" filled label="Date Joined" />
          </div>
          <div class="text-center" style="width: 100%;">
              <q-btn no-caps color="secondary" label="Update" style="width: 80%;" />
          </div>
        </div>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Students-Table-Component',
  computed: {
    ...mapGetters('alida', ['getStudents'])
  },
  data () {
    return {
      filter: '',
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
        { name: 'contentWriter', label: 'Writer Status', field: 'contentWriter' },
        { name: 'dateJoined', label: 'Date Joined', field: 'dateJoined' },
        { name: 'id', label: 'View', field: 'id' }
      ],
      viewStudentDialog: false,
      studentObj: {}
    }
  },
  methods: {
    viewStudent (id) {
      const _ = this
      // eslint-disable-next-line eqeqeq
      _.studentObj = _.getStudents.filter(student => student.id == id)[0]
      _.viewStudentDialog = true
    },
    editStudent (id) {
      // const _ = this
    }
  }
}
</script>
