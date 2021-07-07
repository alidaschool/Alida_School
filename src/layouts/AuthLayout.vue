<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container style="background-image: url('../assets/img/auth_bg.jpg')">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'AdminLayout',
  data () {
    return {
    //
    }
  }
}
</script>
