<script setup>
import EmployeeCard from '@/components/EmployeeCard.vue'
import TheFooter from '@/components/TheFooter.vue'
import { ref, onMounted} from 'vue'
import axios from 'axios'

const employees = ref(null)


onMounted(() => {
  axios
  .get('https://1611developer.github.io/employees/db.json')
  .then((response) => {
    // console.log('events:', response.data)
    employees.value = response.data
  })
  .catch((error) => {
    console.log(error)
  })
})

</script>

<template>
  <div class="employees">
    <h1 class="font-mono">API Employee Info. Cards</h1>
    <!-- :event is the prop and "event" is the object we are iterating over -->
    <div class="container mt-4 mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <EmployeeCard v-for="employee in employees" :key="employee.id" :employee="employee" />
      </div>
    </div>
  </div>
  <div>
    <TheFooter></TheFooter>
  </div>


  
</template>

<style scoped>
.employees {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-size: 30px;
}
</style>
