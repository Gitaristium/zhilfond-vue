<template>
    <HeaderComponent />
    <main>
        <div className="container">
            <div className="inner">
                <SidebarComponent />
                <RouterView />
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import HeaderComponent from "@/components/HeaderComponent.vue";
import SidebarComponent from "@/components/SidebarComponent.vue";
</script>

<style lang="scss">
:root {
    --white: #fff;
    --bg-light: #fdfdfd;
    --bg-dark: #dededd;
    --logo: #e31f24;
    --title: #333333;
    --text: #76787d;
    --box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    --border-radius: 10px;
}

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    user-select: none;
}

a,
.link {
    text-decoration: none;
    color: inherit;
    transition: transform 0.1s;

    &:active {
        transform: scale(0.95);
    }
}

.container {
    width: 100%;
    max-width: 1306px;
    padding: 0 20px;
    margin: 0 auto;
}

.title {
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    color: var(--title);
    margin: 0;
    margin-bottom: 10px;
}

.subtitle {
    font-weight: 600;
    font-size: 14px;
    line-height: 140%;
    color: var(--title);
    margin: 0;
    margin-bottom: 10px;
}

.text {
    font-size: 14px;
    line-height: 17px;
    color: var(--text);
}
</style>

<style lang="scss" scoped>
.inner {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 500px;
    box-shadow: var(--box-shadow);
    border-radius: var(--border-radius);
    background-color: var(--bg-light);
    overflow: hidden;
}
</style>
