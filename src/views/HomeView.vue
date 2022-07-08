<template>
  <v-container>
    <v-row>
      <v-col class="text-center" >
        <img src="@/assets/github-logo.png" class="logo" alt="logo github"/>
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
          :size="60"
          :width="10"
          color="primary"
          :indeterminate="true"
        ></v-progress-circular>
        
        <div v-if="usersResults.total_count === 0">
          <span class="text-danger red--text text--lighten-1">
            Nenhum usuário encontrado
          </span>
        </div>
        <div v-if="usersResults.total_count">
          <div class="text-left">
            <span >Total de resultados: {{usersResults.total_count}}</span>
          </div>
          <div class="mt-10">
            <UsersCard v-for="user in usersResults.items" :key="user.id" :user="user" class="mb-5"/>
            <v-pagination
              v-if="usersResults.total_count>20"
              v-model="page"
              :length="Math.ceil(usersResults.total_count/20)"
            ></v-pagination>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-snackbar
      v-model="error"
    >
      Houve um erro ao buscar os usuários.

      <template v-slot:action="{ attrs }">
        <v-btn
          color="red"
          text
          v-bind="attrs"
          @click="setError(false)"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
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
    data() {
        return {
          page: 1,
        }
    },
    watch: {
      page(newPage) {
        this.searchUsers(newPage)
      } 
    },
    computed:{
      usersResults(){
        return this.$store.state.usersResults
      },
      loading(){
        return this.$store.state.loading
      },
      error(){
        return this.$store.state.error
      },
      search(){
        return this.$store.state.search
      }
    },
    methods:{
      setError(error){
        this.$store.commit('setErro', error)
      },
      searchUsers(newPage) {
        let params = {
          q: this.search,
          page: newPage,
        }
        this.$store.dispatch('getUsersSearch', params)
      }
    }
    

  }
</script>
<style lang="scss">
  .logo {
    width: 320px;
    margin: 0 auto;
  }
</style>
