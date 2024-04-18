<template>
  <div>
    <v-text-field v-model="occupationFilter" label="Filter By Occupation"></v-text-field>
    <v-data-table
      :custom-filter="filterEmployee"
      :headers="headers"
      :items="employees"
      :search="occupationFilter"
      item-key="Id"
      @click:row="goToEmployeeInfo"
      :customFilter="filterEmployee"
    ></v-data-table>
  </div>
</template>

<script>
import axios from "axios" // Use axios for fetching data, if not available install it using npm or yarn

export default {
  data() {
    return {
      occupationFilter: "",
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
    filterEmployee(value, query, item) {
      const filteredEmployee = item.Occupation.toLowerCase().includes(query.toLowerCase())
      console.log(filteredEmployee)
      return filteredEmployee
    },
  },
}
</script>

<style>
/* Add your styles here */
</style>
