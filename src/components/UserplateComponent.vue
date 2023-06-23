<template>
    <router-link :to="link" class="link">
        <article class="article">
            <img
                src="../assets/images/user-img-small.png"
                alt="img"
                class="img"
            />
            <span class="desc">
                <h6 class="title name">
                    {{ user.username }}
                </h6>
                <p class="text email">{{ user.email }}</p>
            </span>
        </article>
    </router-link>
</template>

<script setup lang="ts">
// eslint-disable-next-line no-undef
const user = defineProps<{
    id: number;
    username: string;
    email: string;
}>();
const link = "/user/" + user.id.toString();
</script>

<style lang="scss" scoped>
.link {
    display: block;
    margin-bottom: 20px;
}

.article {
    display: flex;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    width: 240px;
    height: 70px;
    overflow: hidden;
    opacity: 0;
    transform: scale(0.8);
    animation: incoming 0.3s forwards;
}

.img {
    display: block;
    width: 68px;
    height: 70px;
    object-fit: cover;
    border-top-left-radius: var(--border-radius);
    border-bottom-left-radius: var(--border-radius);
    border: 1px solid transparent;
    transition: border 0.3s;
}
.desc {
    display: flex;
    flex-direction: column;
    gap: 5px;
    border-left: 1px solid var(--bg-dark);
    padding: 15px;
    width: 100%;
    background-color: var(--white);
    transition: background-color 0.3s;
}

.router-link-active {
    & .img {
        border: 1px solid var(--bg-dark);
    }
    & .desc {
        background-color: var(--bg-dark);
    }
}

.name {
    font-size: 14px;
    margin: 0;
}

.email {
    font-size: 10px;
    margin: 0;
}

@keyframes incoming {
    0% {
        opacity: 0;
        transform: scale(0.8);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}
</style>
