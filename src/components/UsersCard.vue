<template>
    <v-card>
        <v-row>
            <v-col cols="3">
                <v-avatar>
                    <img
                        :src="user.avatar_url"
                        alt="imagem do usuario"
                    >
                </v-avatar>
            </v-col>
            <v-col class="text-left">
                <h3>{{ user.login }}</h3>
                <a :href="user.html_url" target="_blank">Ver Perfil</a>
                <!-- <p>{{ user.html_url }}</p> -->
            </v-col>
        </v-row>
    </v-card>
</template>
<script>

export default {
    name: 'SearchComponent',
    props: {
        user: {
            type: Object,
            required: true
        }
    },
}
</script>