<template>
    <section class="profile">
        <img src="../assets/images/user-img.png" alt="img" class="img" />
        <div class="content">
            <h2 class="title">{{ user?.name }}</h2>
            <span>
                <span class="subtitle">username: </span>
                <span class="text">{{ user?.username }}</span>
            </span>
            <span>
                <span class="subtitle">email: </span>
                <span class="text">{{ user?.email }}</span>
            </span>
            <span class="mb">
                <span class="subtitle">phone: </span>
                <span class="text">{{ user?.phone }}</span>
            </span>
            <h2 class="title">О себе:</h2>
            <span class="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>
        </div>
    </section>
    <!-- {{ !user && router.push("/") }} -->
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import router from "@/router";
import { computed, watchEffect } from "vue";

const store = useStore();
const id = computed(() => router.currentRoute.value.params.id);
const user = computed(() => store.getters.getUserById(Number(id.value)));
watchEffect(() => !user.value && router.push("/"));
</script>

<style lang="scss" scoped>
.profile {
    display: flex;
    width: 100%;
    padding: 20px;
    gap: 60px;
}

.img {
    display: block;
    width: 45%;
    height: fit-content;
}
.content {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.title {
    margin-bottom: 0;
}
.mb {
    margin-bottom: 20px;
}
</style>
