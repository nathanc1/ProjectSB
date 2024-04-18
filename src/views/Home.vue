<template>
  <div>
    <v-data-table :headers="headers" :items="employees" item-key="Id" @click:row="goToEmployeeInfo"></v-data-table>
  </div>
</template>

<script>
import axios from "axios" // Use axios for fetching data, if not available install it using npm or yarn

export default {
  data() {
    return {
      employees: [],
      headers: [
        { text: "First Name", value: "FirstName", align: "start", sortable: true },
        { text: "Last Name", value: "LastName", align: "start", sortable: true },
        { text: "Occupation", value: "Occupation", align: "start", sortable: true },
      ],
    }
  },
  created() {
    this.loadEmployees()
  },
  methods: {
    loadEmployees() {
      axios
        .get("/employees.json")
        .then((response) => {
          this.employees = response.data.Employees
        })
        .catch((error) => {
          console.error("Error loading the data:", error)
        })
    },
    goToEmployeeInfo(item) {
      console.log("Item clicked:", item)
      this.$router.push({ name: "EmployeeInfo", params: { id: item.Id } })
    },
  },
}
</script>

<style>
/* Add your styles here */
</style>
