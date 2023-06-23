<template>
    <aside>
        <h3 className="title">Поиск сотрудников</h3>
        <InputComponent />
        <h3 className="title">Результаты</h3>

        <span v-if="requstStatus === RequestStatus.SUCCESS && users.length">
            <UserplateComponent
                v-for="user in users"
                v-bind:key="user.id"
                :id="user.id"
                :username="user.username"
                :email="user.email"
            />
        </span>

        <span class="text" v-if="requstStatus === ''">начните поиск</span>
        <span class="text" v-if="requstStatus === RequestStatus.LOADING"
            ><SpinerComponent /> ищем пользователей</span
        >
        <span class="text" v-if="requstStatus === RequestStatus.ERROR"
            >ничего не найдено</span
        >
        <span
            class="text"
            v-if="requstStatus === RequestStatus.SUCCESS && !users.length"
            >ничего не найдено</span
        >
    </aside>
</template>

<script setup lang="ts">
// import store from "@/store";
import { RequestStatus } from "@/utils/vars";
import InputComponent from "@/components/InputComponent.vue";
import SpinerComponent from "@/components/SpinerComponent.vue";
import UserplateComponent from "@/components/UserplateComponent.vue";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const requstStatus = computed(() => store.getters.getRequestStatus);
const users = computed(() => store.getters.getUsers);
</script>

<style lang="scss" scoped>
aside {
    width: 290px;
    border-right: 1px solid var(--bg-dark);
    padding: 20px;
}
</style>
