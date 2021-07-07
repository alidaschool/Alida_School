<template>
    <q-page padding>
        <div>
            <div class="text-h3 text-grey q-mb-lg">Statistics</div>
            <StatisticsModal />
        </div>
        <div class="row q-col-gutter-md">
            <div class="col-12 col-md-6">
                <CourseTable />
            </div>
            <div class="col-12 col-md-6">
                <InstructorTable />
            </div>
        </div>
        <div class="row q-col-gutter-md">
            <div class="col-12 col-md-6">
                <StudentTable />
            </div>
            <div class="col-12 col-md-6">
                <BlogTable />
            </div>
        </div>
    </q-page>
</template>

<script>
import StatisticsModal from 'components/Dashboard/StatisticsBox.vue'
import CourseTable from 'components/Dashboard/CourseTable.vue'
import StudentTable from 'components/Dashboard/StudentTable.vue'
import InstructorTable from 'components/Dashboard/InstructorTable.vue'
import BlogTable from 'components/Dashboard/BlogTable.vue'
export default {
  name: 'Admin-Dashboard',
  components: {
    StatisticsModal,
    CourseTable,
    StudentTable,
    InstructorTable,
    BlogTable
  }
}
</script>
