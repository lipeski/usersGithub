<template>
    <v-container>
        <v-row>
            <v-col class="text-center px-0" >
                <v-text-field
                    label="Pesquise por usuários do github"
                    solo
                    v-model="search"
                ></v-text-field>
                <v-btn
                    @click="searchUsers()"
                    color="primary"
                    elevation="2"
                    small
                >Pesquisar</v-btn>
            </v-col>
        </v-row>
        
    </v-container>
</template>
<script>

export default {
    name: 'SearchComponent',
    data() {
        return {
            search: '',
        }
    },
    methods: {
        searchUsers() {
            let params = {
                q: this.search,
                per_page: 20,
                page: 1
            }
            this.$store.dispatch('getUsersSearch', params).then(() => {
                this.loading = false;
            }).catch(()=>{
                this.loading = false;
            })
            
        }
    }
    
}
</script>