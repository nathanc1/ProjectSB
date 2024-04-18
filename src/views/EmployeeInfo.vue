<template>
  <v-container>
    <v-row>
      <v-col cols="4" offset="4">
        <v-card class="max-w-sm" max-width="2000px" style="margin-bottom: 20px">
          <v-card-title class="text-h4" style="justify-content: center">
            {{ employee.FirstName }} {{ employee.LastName }}
          </v-card-title>
          <v-card-title style="justify-content: center">
            <strong>Occupation:&nbsp;</strong>
            <span>{{ employee.Occupation }}</span>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="2"></v-col>
      <v-col cols="4">
        <v-row class="d-flex justify-center align-center">
          <v-col cols="12">
            <v-card style="padding: 20px">
              <v-text-field
                label="Employment Date"
                v-model="pickedEmploymentDate"
                prepend-icon="mdi-calendar"
                readonly
              ></v-text-field>
              <div class="text-center">
                <v-date-picker v-model="pickedEmploymentDate" @input="checkEmploymentDate"></v-date-picker>
              </div>
              <p class="font-weight-black text-h4 text-center" v-if="employmentDateMessage">
                {{ employmentDateMessage }}
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4">
        <v-row class="d-flex justify-center align-center">
          <v-col cols="12">
            <v-card style="padding: 20px">
              <v-text-field
                label="Pick Termination Date"
                v-model="pickedTerminationDate"
                prepend-icon="mdi-calendar"
                readonly
              ></v-text-field>
              <div class="text-center">
                <v-date-picker v-model="pickedTerminationDate" @input="checkTerminationDate"></v-date-picker>
              </div>
              <p class="font-weight-black text-h4 text-center" v-if="terminationDateMessage">
                {{ terminationDateMessage }}
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      employee: {},
      employmentDate: "",
      terminationDate: "",
      pickedEmploymentDate: "",
      pickedTerminationDate: "",
      employmentDateMessage: "",
      terminationDateMessage: "",
    }
  },
  methods: {
    loadEmployeeDetails() {
      const id = this.$route.params.id
      axios
        .get(`/employees.json`)
        .then((response) => {
          const emp = response.data.Employees.find((emp) => emp.Id === id)
          this.employee = emp
          this.employmentDate = emp.EmploymentDate
          this.terminationDate = emp.TerminationDate || "" // Handle cases where there is no termination date
          this.pickedEmploymentDate = emp.EmploymentDate
          this.pickedTerminationDate = emp.TerminationDate || ""
        })
        .catch((error) => {
          console.error("Error loading the employee details:", error)
        })
    },

    checkEmploymentDate() {
      // Adding null checking using ternary operator for both dates
      const pickedEmployment = this.pickedEmploymentDate ? new Date(this.pickedEmploymentDate) : null
      const actualEmployment = this.employmentDate ? new Date(this.employmentDate) : null

      if (pickedEmployment && actualEmployment) {
        if (pickedEmployment > actualEmployment) {
          this.employmentDateMessage = "currently employed"
        } else if (pickedEmployment < actualEmployment) {
          this.employmentDateMessage = "employed soon"
        }
      } else if (pickedEmployment && !actualEmployment) {
        this.employmentDateMessage = "There is information about this peron's start date"
      }
    },

    checkTerminationDate() {
      const pickedTermination = this.pickedTerminationDate ? new Date(this.pickedTerminationDate) : null
      const actualTermination = this.terminationDate ? new Date(this.terminationDate) : null
      if (pickedTermination && actualTermination) {
        if (pickedTermination > actualTermination) {
          this.terminationDateMessage = "terminated"
        } else if (pickedTermination < actualTermination) {
          this.terminationDateMessage = "to be terminated"
        }
      } else if (pickedTermination) {
        this.terminationDateMessage = "This person has not been terminated"
      }
    },
  },
  created() {
    this.loadEmployeeDetails()
  },
}
</script>
