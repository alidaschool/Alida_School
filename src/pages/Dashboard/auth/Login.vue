<template>
    <q-page class="flex flex-center">
        <q-card flat class="q-ma-sm q-pa-lg">
            <div class="text-center text-h3 q-mb-lg">Login Mr. President 🥰</div>
            <div class="row q-col-gutter-md">
                <div class="col-12">
                    <q-input filled label="Enter Email: " />
                </div>
                <div class="col-12">
                    <q-input filled label="Enter Password: " />
                </div>
                <div class="col-12 text-center" style="width: 100%;">
                    <q-btn rounded no-caps color="primary" label="Login" style="width: 70%;" :to="{ name: 'Dashboard' }" />
                </div>
            </div>
        </q-card>
    </q-page>
</template>

<script>
export default {
  name: 'Login-Page'
}
</script>
