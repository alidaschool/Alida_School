<template>
    <q-page padding class="flex flex-center">
        <q-card class="q-ma-lg" style="max-width: 800px; width: 100%;">
          <q-card-section class="text-center">
            <q-avatar sizes="50px">
              <q-img src="~assets/img/dauda.png"  />
            </q-avatar>
          </q-card-section>
          <q-card-section>
            <q-list separator>

              <q-item clickable>
                <q-item-section>
                  <q-item-label overline>Name</q-item-label>
                  <q-item-label> Dauda Barry </q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>
                  <q-item-label overline> Designation </q-item-label>
                  <q-item-label> Founder </q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>
                  <q-item-label overline> Priviledges </q-item-label>
                  <q-item-label> Content Creator, Editor </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
          <q-card-section>
            <q-btn no-caps outline color="secondary" label="Update Profile" @click="updateProfileDialog = !updateProfileDialog" />
          </q-card-section>
        </q-card>

        <q-dialog v-model="updateProfileDialog" position="bottom">
          <q-card class="q-pa-lg" style="max-width: 800px; width: 100%;">
            <div class="q-gutter-md">
              <div class="text-h5 text-grey"> Update Profile </div>
              <q-input filled label="First name" />
              <q-input filled label="Last name" />
              <q-input filled label="Password" type="password" />
              <div class="text-center" style="width: 100%;">
                <q-btn no-caps color="secondary" label="Update" style="width: 80%;" />
              </div>
            </div>
          </q-card>
        </q-dialog>
    </q-page>
</template>

<script>
export default {
  name: 'Admin-Profile',
  data () {
    return {
      updateProfileDialog: false
    }
  }
}
</script>
