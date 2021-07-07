<template>
    <q-page padding>
        <div class="q-ma-lg flex justify-between">
          <q-btn no-caps color="accent" class="q-pl-md q-pr-md q-pt-xs q-pd-sm" label="Add New" icon-right="mdi-plus" :to="{ name: 'New_Blog' }" />
          <q-btn v-if="filterBlogTalbe === 'published' " no-caps outline color="accent" class="q-pl-md q-pr-md q-pt-xs q-pd-sm" label="Saved Articles" icon-right="mdi-content-save-all-outline" @click="filterBlogTalbe = 'saved' " />
          <q-btn v-if="filterBlogTalbe === 'saved' " no-caps outline color="accent" class="q-pl-md q-pr-md q-pt-xs q-pd-sm" label="Published Articles" icon-right="mdi-cloud-upload-outline" @click="filterBlogTalbe = 'published' " />
        </div>

        <BlogTable v-if="filterBlogTalbe === 'published' " />
        <SavedBlogTable v-if="filterBlogTalbe === 'saved' " />
    </q-page>
</template>

<script>
import BlogTable from 'components/Dashboard/BlogTable.vue'
import SavedBlogTable from 'components/Dashboard/SavedBlogTable.vue'
export default {
  name: 'Admin-Blog',
  components: {
    BlogTable,
    SavedBlogTable
  },
  data () {
    return {
      filterBlogTalbe: 'published'
    }
  }
}
</script>
