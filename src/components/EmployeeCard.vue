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
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
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
                </div>
              </div>
              <div class="flip-card-back">
                <p><strong>Address:</strong></p>
                <br>
                <p>{{ employee.street_address }} {{ employee.city }}, {{ employee.state }}</p>
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


.flip-card {
  text-align: center;
  background-color: rgb(204 251 241);
  width: auto;
  height: 280px;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;

  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;

  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {

  color: black;
}

/* Style the back side */
.flip-card-back {
  color: black;
  transform: rotateY(180deg);
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  background-color: rgb(204 251 241);
}
</style>
