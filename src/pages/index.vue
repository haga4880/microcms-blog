<script setup lang="ts">

const { data: posts } = await useFetch('/api/postList')

</script>

<template>
    
    <Home :page="1" />

</template>

<style scoped>
.article {
    margin-top: 1rem;
    margin-bottom: 6rem;
    width: 100%;
    align-items: center;
}

.published {
    font-size: 1.4rem;
    color: #888;
    margin-right: 20px;
}

.title {
    margin-top: 6px;
    font-size: 2.8rem;
    color: #0d1a3c;
    line-height: 1.6;
    font-weight: bold;
}

.title:hover {
    opacity: .5;
}

.tag {
    font-size: 1.4rem;
    color: 888;
    opacity: 0.7;
    letter-spacing: 1px;
    margin-right: 1rem;
}

@media (min-width: 1160px) {
    .divider {
        display: flex;
        justify-content: space-between;
        width: 1080px;
        margin: 20px auto 0;
        padding-top: 84px;
    }
    .container {
        width: 600px;
    }
    .aside {
        width: 300px;
    }
}

@media (min-width: 820px) and (max-width: 1160px) {
    .divider {
        margin: 20px auto 0;
        width: 740px;
        padding-top: 112px;
    }
    .aside {
        margin-top: 60px;
    }
}

@media (max-width: 820px) {
    .divider {
        margin: 20px 0 0;
        padding: 0 20px;
        padding-top: 112px;
    }
    .aside {
        margin-top: 60px;
        width: 100%;
    }
}
</style>