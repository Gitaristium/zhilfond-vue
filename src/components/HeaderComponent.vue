<template>
    <header>
        <div className="container">
            <nav className="nav">
                <router-link to="/" class="logo">Жилфонд</router-link>
                <span className="link">Пользователь</span>
            </nav>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.logo {
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: var(--logo);
}

.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 130px;
}

.link {
    position: relative;
    color: var(--text);
    font-size: 16px;
    line-height: 20px;
    cursor: pointer;

    &::after {
        position: absolute;
        content: "";
        display: block;
        height: 1px;
        width: 0%;
        left: 0;
        right: 0;
        margin: 0 auto;
        background-color: var(--text);
        transition: width 0.1s;
    }

    @media (hover: hover) {
        &:hover::after {
            width: 100%;
        }
    }
}
</style>
