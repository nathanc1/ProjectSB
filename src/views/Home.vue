<template>
  <v-data-table :headers="headers" :items="employees" item-key="Id" @click:row="goToEmployeeInfo"> </v-data-table>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { useRouter } from "vue-router"

const employees = ref([])
const headers = ref([
  { text: "First Name", value: "FirstName" },
  { text: "Last Name", value: "LastName" },
  { text: "Occupation", value: "Occupation" },
])

const router = useRouter()

onMounted(() => {
  fetch("/employees.json")
    .then((response) => response.json())
    .then((data) => {
      employees.value = data.Employees
      console.log("Employees loaded:", employees.value)
    })
    .catch((error) => console.error("Error loading the data:", error))
})

function goToEmployeeInfo(employeeId) {
  const employee = employees.value.find((emp) => emp.Id === employeeId)

  console.log(employee)
  if (employee) {
    router.push({ name: "EmployeeInfo", params: { id: employeeId } })
  } else {
    alert("Invalid or missing employee ID")
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>
