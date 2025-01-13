<template>
    
        <MainLayout :footerLogoUrl="logoFooter" copyright="---" :menu="[]">
            <template #main-header>
                <MainHeader systemName="UI Libarary Documents" logoUrl=""> </MainHeader>
            </template>
            <template #side-menu>
                <LeftMenu :menu="state.menu" defaultActivate="">
                    <template #header>
                        <div style="font-size:24px">UI Components</div>
                    </template>
                </LeftMenu>
            </template>
            <RouterView v-slot="{ Component }">
                <component :is="Component"></component>
            </RouterView>
        </MainLayout>
</template>

<script setup lang="ts">
import logo from '../assets/images/default_image.svg'
import logoFooter from '../assets/images/default_image.svg'
import { useMenuStore } from './MenuStore'
import { computed, onMounted, reactive } from 'vue'
import MainLayout from '@/components/layouts/MainLayout.vue'
import MainHeader from '@/components/layouts/MainHeader.vue'
import LeftMenu from '@/components/widget/LeftMenu.vue'


// import {MainLayout} from '../components/index.ts'

const menuStore = useMenuStore()
onMounted(() => {
    menuStore.setTempMenu()
})
const state: any = reactive({
    menu: computed(() => menuStore.getMenu()),
})
</script>

<style lang="scss" scoped></style>
