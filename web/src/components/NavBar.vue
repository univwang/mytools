<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="#">我的工具</a><!--  -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link :class="route_name=='my_tool1' ? 'nav-link active' :'nav-link' "
                            :to="{name: 'my_tool1'}">工具1</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :class="route_name=='my_tool2' ? 'nav-link active' :'nav-link' "
                            :to="{name: 'my_tool2'}">工具2</router-link>

                    </li>
                    <li class="nav-item">
                        <router-link :class="route_name=='my_tool3' ? 'nav-link active' :'nav-link' "
                            :to="{name: 'my_tool3'}">工具3</router-link>

                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
    setup() {
        const route = useRoute();
        let route_name = computed(() => route.name)
        return {
            route_name,
        }

    }
}
</script>

<style scoped>

</style>