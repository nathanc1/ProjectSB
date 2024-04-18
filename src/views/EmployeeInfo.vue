<template>
  <v-container>
    <v-row>
      <v-col cols="4" offset="4">
        <v-card class="max-w-sm" max-width="2000px" style="margin-bottom: 20px">
          <v-card-title class="text-h4" style="justify-content: center"
            >{{ employee.FirstName }} {{ employee.LastName }}</v-card-title
          >

          <v-card-title style="justify-content: center">
            <strong>Occupation:&nbsp;</strong>
            <span>{{ employee.Occupation }}</span>
          </v-card-title>
        </v-card></v-col
      >
    </v-row>

    <v-row>
      <v-col cols="2"></v-col>
      <v-col cols="4">
        <!-- Container for employee details -->
        <!-- Row to contain employment date text field, date picker, and message -->
        <v-row class="d-flex justify-center align-center">
          <!-- Apply justify-center class to center the content -->
          <v-col cols="12">
            <v-card style="padding: 20px">
              <v-text-field
                label="Employment Date"
                v-model="employmentDate"
                prepend-icon="mdi-calendar"
                readonly
              ></v-text-field>
              <div class="text-center">
                <v-date-picker v-model="employmentDate" @input="checkEmploymentDate"></v-date-picker>
              </div>
              <!-- Date picker component for selecting employment date -->
              <p class="font-weight-black text-h4 text-center fon" v-if="employmentDateMessage">
                {{ employmentDateMessage }}
              </p>
            </v-card>
            <!-- Text field to display employment date -->
          </v-col>
        </v-row>

        <!-- Row to contain termination date text field, date picker, and message -->
      </v-col>
      <v-col cols="4">
        <v-row class="d-flex justify-center align-center">
          <v-col cols="12">
            <v-card style="padding: 20px">
              <!-- Column for termination date text field -->
              <v-text-field
                label="Termination Date"
                v-model="terminationDate"
                prepend-icon="mdi-calendar"
                readonly
              ></v-text-field>
              <div class="text-center">
                <!-- Date picker component for selecting termination date -->
                <v-date-picker v-model="terminationDate" @input="checkTerminationDate"></v-date-picker>
              </div>
              <p class="font-weight-black text-h4 text-center fon" v-if="terminationDateMessage">
                {{ terminationDateMessage }}
              </p>
            </v-card>
          </v-col>
        </v-row></v-col
      >
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
      dateMessage: "",
      employmentDateMessage: "",
      terminationDateMessage: "",
    }
  },
  methods: {
    // Method to load employee details
    loadEmployeeDetails() {
      const id = this.$route.params.id // Get employee id from route params
      axios
        .get(`/employees.json`)
        .then((response) => {
          this.employee = response.data.Employees.find((emp) => emp.Id === id) // Find employee by id
        })
        .catch((error) => {
          console.error("Error loading the employee details:", error)
        })
    },

    checkEmploymentDate() {
      const now = new Date()
      const employment = new Date(this.employmentDate)

      if (employment > now) {
        this.employmentDateMessage = "Employed soon"
      } else {
        this.employmentDateMessage = "Currently employed"
      }
    },

    checkTerminationDate() {
      const now = new Date()
      const termination = new Date(this.terminationDate)

      if (termination > now) {
        this.terminationDateMessage = "To be terminated"
      } else if (this.terminationDate) {
        this.terminationDateMessage = "Terminated"
      }
    },
  },
  created() {
    // Lifecycle hook: called when component is created
    this.loadEmployeeDetails()
  },
}

//TODO: CENTERALIZE THE API CALL TO AVOID CALLING THE API TWICE
</script>
