<template>
    <span className="spiner"></span>
</template>

<style lang="scss" scoped>
.spiner {
    position: relative;
    display: inline-block;
    width: 14px;
    height: 14px;
    top: 3px;
    border-left: 2px solid var(--title);
    border-bottom: 2px solid var(--title);
    border-right: 2px solid var(--title);
    border-top: 2px solid transparent;
    border-radius: 50%;
    animation: spinner 1s linear infinite;
}

@keyframes spinner {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>
