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
  name: 'courses-Table-Component',
  computed: {
    ...mapGetters('alida', ['getCourses'])
  },
  data () {
    return {
      filter: '',
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
      viewCourseDialog: false,
      courseObj: {}
    }
  },
  methods: {
    viewCourse (id) {
      const _ = this
      // eslint-disable-next-line eqeqeq
      _.courseObj = _.getCourses.filter(course => course.id == id)[0]
      _.viewCourseDialog = true
    },
    editCourse (id) {
      // const _ = this
    }
  }
}
</script>
