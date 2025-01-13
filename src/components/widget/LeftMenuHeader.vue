<template>
    <div class="left-menu-header" :class="collapse?'collapse':'not-collapse'">
        <el-collapse v-model="activeNames">
            <el-collapse-item name="1">
                <template #title>
                    <slot name="title"></slot>
                </template>
            </el-collapse-item>

        </el-collapse>
    </div>
</template>
<script lang="ts" setup>
import { ref, toRefs, watch } from 'vue';
export interface LeftMenuHeaderProps{
    collapse: boolean
}
const prop= defineProps<LeftMenuHeaderProps>()
const { collapse} = toRefs(prop)

const activeNames = ref('')
watch(collapse, ()=>{
    activeNames.value = collapse.value ? '' : ''
})

</script>
<style scoped>

.left-menu-header{
    display: flex;
    align-items: center;
    padding-left: 12px;
    padding-right: 12px;
    overflow: hidden;
    width: 100%;

}

.el-collapse{
    --el-collapse-header-bg-color: transparent;
    --el-collapse-header-text-color: #dddddd;
    --el-collapse-border-color: none;
    --el-collapse-content-bg-color: transparent;
    --el-collapse-content-text-color: #dddddd;
}
:deep(.el-collapse-item__header){
    display: flex;
    flex-direction: column;
    height: 100%;
    
}
:deep(.el-collapse-item__content){
    padding: 12px 0;
}
:deep(.el-collapse-item__arrow){
    display: none;
}

.collapse{
    animation-duration: 0.5s;
    animation-name: collapse;
    opacity: 0;
    height: 0;
}
.not-collapse{
    animation-duration: 0.5s;
    animation-name: notCollapse;
    opacity: 1;
    height: 100%;
}
@keyframes collapse {
    from {
        opacity: 1;
        height: 100px;
    }
    to {
        opacity: 0;
        height: 0;

    }
}
@keyframes notCollapse {
    from {
        opacity: 0;
        height: 0;
    }
    to {
        opacity: 1;
        height: 100%;

    }
}

</style>