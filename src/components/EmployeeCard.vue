<script setup>
defineProps({
  employee: {
    type: Object,
    required: true,
  },
});
</script>

<template>

  <!-- Display employee data (received from employee definedProps)-->
      <div class="card m-2 cursor-pointer border border-gray-400 bg-teal-100 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
        <div class="m-3">
          <h2 class="text-lg mb-2 bg-teal-100">Name: <strong>{{ employee.first_name }} {{ employee.last_name }}</strong>
         <!-- <span class="text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top float-right animate-pulse">Tag</span></h2> -->
         </h2>
        <div class="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">
          <br>
          <p><strong>Employee ID: </strong>{{ employee.employee_id }}</p>
          <br>
          <p><strong>Department: </strong>{{ employee.department }}</p>
          <br>
          <p><strong>Job Title: </strong>{{ employee.job_title }}</p>
          <br>
          <p><strong>Previous Company: </strong>{{ employee.previous_company }}</p>
          <br>
          <p><strong>Address:</strong></p>
          <br>
          <p>{{ employee.street_address }}</p>
          <br>
          <p>{{ employee.city }}, {{ employee.state }}</p>
          <br>
          <p><strong>Phone: </strong>{{ employee.phone }}</p>
          <br>
          <p><strong>Email: </strong>{{ employee.email}}</p>
          <br>
          <p><strong>Emergency Contact: </strong>{{ employee.emergency_contact }}</p>
          <br>
          <p><strong>Emergency Contact #: </strong>{{ employee.emergency_contact_number }}</p>
        </div>
        </div>
      </div>

</template>

<style scoped>
.employee-card {
  padding: 20px;
  width: 300px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.employee-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}

</style>
