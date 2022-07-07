<template>
  <v-container>
    <v-row>
      <v-col class="text-center" >
        <h2>Users Github</h2>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="12" md="4">
        <Search/>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="12" md="4" class="text-center" >
        <v-progress-circular
          v-if="loading"
          :size="100"
          :width="10"
          color="primary"
          :indeterminate="true"
        ></v-progress-circular>
        <div v-else>
          <UsersCard v-for="user in usersResults.items" :key="user.id" :user="user" class="mb-5"/>
          <v-pagination
            v-model="page"
            :length="usersResults.total_count"
          ></v-pagination>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Search from '@/components/Search.vue'
import UsersCard from '@/components/UsersCard.vue'

  export default {
    name: 'HomeUsers',

    components: {
      Search,
      UsersCard
    },
    computed:{
      usersResults(){
        return this.$store.state.usersResults
      },
      loading(){
        return this.$store.state.loading
      }
    },
    

  }
</script>
