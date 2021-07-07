<template>
    <div>
        <q-list bordered>
            <q-item header class="flex justify-between q-pl-lg q-pt-lg q-pr-lg">
                <div class="text-h4 text-bold text-grey">Notifications</div>
                <q-btn no-caps outline rounded icon-right="mdi-chevron-right" color="grey" label="view more" :to="{ name: 'Notifications' }" />
            </q-item>
            <q-separator spaced inset />
            <div class="text-center q-ma-lg">
                No new notification 😅
            </div>
            <q-item clickable v-ripple>
                <q-item-section avatar>
                    <q-avatar>
                        <img src="https://cdn.quasar.dev/img/avatar2.jpg">
                    </q-avatar>
                </q-item-section>

                <q-item-section>
                    <q-item-label lines="1">Brunch this weekend?</q-item-label>
                    <q-item-label caption lines="2">
                        <span class="text-weight-bold">Janet</span>
                        -- I'll be in your neighborhood doing errands this
                        weekend. Do you want to grab brunch?
                    </q-item-label>
                </q-item-section>

                <q-item-section side top>
                     1 min ago
                </q-item-section>
            </q-item>
        </q-list>
    </div>
</template>

<script>
export default {
  data () {
    return {
      //
    }
  }
}
</script>
