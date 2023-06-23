<template>
    <form @submit.prevent="handleSubmit">
        <input
            id="search"
            type="text"
            name="search"
            placeholder="Введите ID или имя"
            v-model="formState"
            @input="onInputChange"
        />
        <label htmlFor="search" class="hint" :class="{ active: isActive }">
            нажмите ENTER для поиска
        </label>
        <svg
            class="close"
            :class="{ active: isActive }"
            @click="handleReset"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="50px"
            height="50px"
        >
            <path
                d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"
            />
        </svg>
    </form>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { ref } from "vue";

const store = useStore();

const initialFormState = "";

const formState = ref(initialFormState);
const isActive = ref(false);

const handleReset = () => {
    formState.value = initialFormState;
    isActive.value = false;
};

const onInputChange = () => {
    isActive.value = formState.value !== "" ? true : false;
};

const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (formState.value !== "") {
        const sendData = {
            search: formState.value,
        };
        store.dispatch("USER_REQUEST", sendData);
        handleReset();
    }
};
</script>

<style lang="scss" scoped>
form {
    position: relative;
    margin: 12px 0 22px;
}
input {
    width: 240px;
    height: 46px;
    background-color: var(--white);
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: var(--text);
    padding: 0 36px 0 16px;
    border-radius: var(--border-radius);
    border: 1.5px solid var(--bg-dark);
}
.hint {
    position: absolute;
    bottom: -15px;
    left: 0;
    right: 0;
    text-align: center;
    color: var(--text);
    font-size: 10px;
    opacity: 0;
    transform: translateY(-10px);
    transition: opacity 0.2s, transform 0.3s;

    &.active {
        opacity: 1;
        transform: translateY(0);
    }
}

.close {
    position: absolute;
    top: 13px;
    right: 20px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    opacity: 0;
    pointer-events: none;
    transition: trnsform 0.1s, opacity 0.3s;

    path {
        fill: var(--title);
    }

    &.active {
        opacity: 1;
        pointer-events: all;
    }

    &:active {
        transform: scale(0.9);
    }
}
</style>
