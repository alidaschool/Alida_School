<template>
  <div class="q-mt-lg q-pa-xs">
    <q-table title="Saved Blog Table" :data="getSavedBlogPosts" :columns="columns" row-key="name" :filter="filter" >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="category" :props="props">
            {{ props.row.category }}
          </q-td>
          <q-td key="title" :props="props">
            {{ props.row.title }}
          </q-td>
          <q-td key="author" :props="props">
            {{ props.row.author }}
          </q-td>
          <q-td key="date" :props="props">
            {{ new Date(props.row.time).toDateString() }}
          </q-td>
          <q-td key="destination" :props="props">
            {{ props.row.destination }}
          </q-td>
          <q-td key="edit" :props="props">
            <q-btn icon="mdi-clipboard-edit-outline" color="grey" flat round @click="editBlog(props.row.id)" />
          </q-td>
          <q-td key="id" :props="props">
            <q-btn icon="mdi-eye" color="accent" flat round @click="viewBlog(props.row.id)" />
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Saved-Blog-Table-Component',
  computed: {
    ...mapGetters('alida', ['getSavedBlogPosts'])
  },
  data () {
    return {
      filter: '',
      columns: [
        {
          name: 'category',
          required: true,
          label: 'Category',
          align: 'left',
          field: row => row.category,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'title', align: 'left', label: 'Title', field: 'title' },
        { name: 'author', align: 'center', label: 'Author', field: 'description' },
        { name: 'date', label: 'Date', field: 'time', sortable: true },
        { name: 'edit', label: 'Edit', field: 'id' },
        { name: 'id', label: 'View', field: 'id' }
      ]
    }
  },
  methods: {
    viewBlog (id) {
      const _ = this
      _.$router.push({
        name: 'Single_Blog_Post',
        params: { id: id }
      })
    },
    editBlog (id) {
      const _ = this
      _.$router.push({
        name: 'Edit_Blog',
        params: { id: id, blogType: 'saved' }
      })
    }
  }
}
</script>
