<template>
    <div class="row q-col-gutter-md">
        <div class="col-xs-12 col-sm-6 col-md-3 text-center">
            <q-card class="bg-secondary text-white">
                <q-card-section>
                    <div class="text-h2"> First </div>
                </q-card-section>
                <q-card-section>
                    <div class="text-h4"> Current Cohort </div>
                </q-card-section>
            </q-card>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-3 text-center">
            <q-card>
                <q-card-section>
                    <div class="text-h2"> {{ getFemaleStudents.length }} </div>
                </q-card-section>
                <q-card-section>
                    <div class="text-h4 text-grey"> Total Female </div>
                </q-card-section>
            </q-card>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-3 text-center">
            <q-card>
                <q-card-section>
                    <div class="text-h2"> {{ getMaleStudents.length }} </div>
                </q-card-section>
                <q-card-section>
                    <div class="text-h4 text-grey"> Total Male </div>
                </q-card-section>
            </q-card>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-3 text-center">
            <q-card>
                <q-card-section>
                    <div class="text-h2"> {{ getStudents.length }} </div>
                </q-card-section>
                <q-card-section>
                    <div class="text-h4 text-grey"> Total Student </div>
                </q-card-section>
            </q-card>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-3 text-center">
            <q-card>
                <q-card-section>
                    <div class="text-h2"> {{ getCourses.length }} </div>
                </q-card-section>
                <q-card-section>
                    <div class="text-h4 text-grey"> Courses Offered </div>
                </q-card-section>
            </q-card>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-3 text-center">
            <q-card>
                <q-card-section>
                    <div class="text-h2"> {{ getInstructors.length }} </div>
                </q-card-section>
                <q-card-section>
                    <div class="text-h4 text-grey"> Instructors </div>
                </q-card-section>
            </q-card>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-3 text-center">
            <q-card>
                <q-card-section>
                    <div class="text-h2"> {{ getBlogPosts.length }} </div>
                </q-card-section>
                <q-card-section>
                    <div class="text-h4 text-grey"> Blog Posts </div>
                </q-card-section>
            </q-card>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Admin-Statistics-Modal-Component',
  computed: {
    ...mapGetters('alida', ['getCourses']),
    ...mapGetters('alida', ['getBlogPosts']),
    ...mapGetters('alida', ['getInstructors']),
    ...mapGetters('alida', ['getStudents']),
    ...mapGetters('alida', ['getMaleStudents']),
    ...mapGetters('alida', ['getFemaleStudents'])
  }
}
</script>
