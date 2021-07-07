<template>
  <q-page class="flex flex-center">
    <div>
      <q-img src="~assets/img/logo.png" style="width: 350px; " />
    </div>
    <div style="position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%);">
      <q-spinner-clock size="30px" color="" />
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Preloader-Page',
  mounted () {
    const _ = this
    setTimeout(() => {
      _.$router.push({ name: 'Landing_Page' })
    }, 2000)
  }
}
</script>
