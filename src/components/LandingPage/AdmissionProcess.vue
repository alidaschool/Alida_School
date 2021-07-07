<template>
  <div class="q-px-lg q-pb-md q-pt-lg bg-dark text-white">
    <div class="text-h5 text-secondary text-bold text-center q-mb-sm">AFRICA'S LEADING SCHOOL OF NEW TECHNOLOGIES </div>
    <div class="text-h4 text-bold text-center q-mb-lg">Learn the skills that matter for a fast moving world </div>
    <q-timeline :layout="layout" color="secondary">
      <q-timeline-entry side="left" icon="mdi-numeric-1-box-multiple-outline" >
            <template v-slot:title>
            <div class="text-h4"> Application Process </div>
            </template>
            <template v-slot:subtitle>
                Our admissions process is selective and it has 3 steps:
            <ol>
                <li>Online application </li>
                <li>Applicant screening </li>
                <li>Interview </li>
            </ol>
            </template>
            <div>
            <q-img class="imgHover" src="~assets/img/accept.jpeg" style="width: 100%; max-width: 500px;" />
            </div>
        </q-timeline-entry>

        <q-timeline-entry side="right" icon="mdi-numeric-2-box-multiple-outline" >
            <template v-slot:title>
            <div class="text-h4"> Learning, Code Jams and Assignments </div>
            </template>
            <template v-slot:subtitle >
                You will be exposed to our professional teacher, <br> who will carry you along while learning, <br> with hands-on code-along classes.
            </template>
            <div>
                <q-img class="imgHover" src="~assets/img/code.jpeg" style="width: 100%; max-width: 500px;" />
            </div>
        </q-timeline-entry>
        <q-timeline-entry side="left" icon="mdi-numeric-3-box-multiple-outline" >
                <template v-slot:title>
                    <div class="text-h4"> Build your Portfolio and Land a Job with our help </div>
                </template>
                <template v-slot:subtitle>
                    You will be taught how to sell yourself, <br> through your Portfolio and Land awesome Jobs.
                </template>
                <div>
                    <q-img class="imgHover" src="~assets/img/build.jpeg" style="width: 100%; max-width: 500px;" />
                </div>
            </q-timeline-entry>

            <q-timeline-entry side="right" icon="mdi-numeric-4-box-multiple-outline" >
                <template v-slot:title>
                <div class="text-h4"> Upfront payment or ISA Package </div>
                </template>
                <template v-slot:subtitle >
                For the first cohort, a fee of $180 will be charged. <br> Pay upfront, or pay 10% of your monthly salaray <br> once you're hired for 1 year.
                </template>
                <div>
                    <q-img class="imgHover" src="~assets/img/pay.jpeg" style="width: 100%; max-width: 500px;" />
                </div>
            </q-timeline-entry>

    </q-timeline>
  </div>
</template>

<style scoped>
    .imgHover{
        transform: scale(1);
        border-radius: 5px;
        transition: 0.3s all ease-in-out;
        box-shadow: 0px 0px 0px 0px transparent;
    }
    .imgHover:hover{
        transform: scale(1.05);
        transition: 0.3s all ease-in-out;
        box-shadow: 5px 5px 5px 2px rgba(220, 216, 216, 0.407);
    }
</style>

<script>
export default {
  name: 'Admission_Process_Component',
  computed: {
    layout () {
      return this.$q.screen.lt.sm ? 'dense' : (this.$q.screen.lt.md ? 'comfortable' : 'loose')
    //   return this.$q.screen.lt.md ? 'dense' : (this.$q.screen.lt.md ? 'comfortable' : 'loose')
    }
  }
}
</script>
