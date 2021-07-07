<template>
  <div>
    <q-table title="Synced Devices" :data="data" :columns="columns" row-key="name" :filter="filter" >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="name" :props="props">
            {{ props.row.name }}
          </q-td>
          <q-td key="dateSynced" :props="props">
            {{ props.row.dateSynced }}
          </q-td>
          <q-td key="status" :props="props">
            <!-- {{ props.row.status }} -->
            <q-chip color="positive" :label="props.row.status" />
          </q-td>
          <q-td key="id" :props="props">
            <!-- {{ props.row.id }} -->
            <q-btn icon="mdi-eye" color="primary" flat round @click="viewTransaction(props.row.id)" />
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
    <!-- This is a dialog to view a transaction -->
    <q-dialog v-model="transactionDialog" >
      <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section>
          <div class="text-h6">Device Information</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Hello George, You can print a Device Detail from here. 😅
        </q-card-section>
        <q-separator spaced />
        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat rounded class="q-pl-lg q-pr-lg" no-caps color="grey" label="Cancel" v-close-popup />
          <q-btn flat rounded class="q-pl-lg q-pr-lg" no-caps color="positive" label="Print" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      transactionDialog: false,
      filter: '',
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Serial Number',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'dateSynced', align: 'right', label: 'Date Synced', field: 'dateSynced' },
        { name: 'status', align: 'center', label: 'Status', field: 'status', sortable: true },
        { name: 'id', label: 'View', field: 'id' }
      ],
      data: [
        {
          name: '67347HYTGS7',
          dateSynced: 16759,
          status: 'Active',
          id: 24
        }
      ]
    }
  },
  methods: {
    viewTransaction (id) {
      const _ = this
      _.transactionDialog = !_.transactionDialog
    }
  }
}
</script>
