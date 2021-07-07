<template>
  <div class="q-pa-md">
    <q-table title="Supervisors" :data="data" :columns="columns" row-key="name" :filter="filter" >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="name" :props="props">
            {{ props.row.name }}
          </q-td>
          <q-td key="phoneNumber" :props="props">
            {{ props.row.phoneNumber }}
          </q-td>
          <q-td key="address" :props="props">
            {{ props.row.address }}
          </q-td>
          <q-td key="totalAgents" :props="props">
            {{ props.row.totalAgents.toLocaleString() }}
          </q-td>
          <q-td key="totalCustomers" :props="props">
            {{ props.row.totalCustomers.toLocaleString() }}
          </q-td>
          <q-td key="id" :props="props">
            <!-- {{ props.row.id }} -->
            <q-btn icon="mdi-eye" color="primary" flat round />
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
export default {
  data () {
    return {
      filter: '',
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Name',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'phoneNumber', align: 'center', label: 'Phone Number', field: 'phoneNumber', sortable: true },
        { name: 'address', label: 'Address', field: 'address', sortable: true },
        { name: 'totalAgents', label: 'Total Agents', field: 'totalAgents', sortable: true },
        { name: 'totalCustomers', label: 'Total Customers', field: 'totalCustomers' },
        { name: 'id', label: 'View', field: 'id' }
      ],
      data: [
        {
          name: 'Eze Amadi',
          phoneNumber: 2347034100946,
          address: 'N0. 25 Okwuleghi Layout',
          totalAgents: 98,
          totalCustomers: 5453434,
          id: 6
        }
      ]
    }
  }
}
</script>
