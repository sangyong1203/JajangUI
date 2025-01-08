<template>
    <div class="configProvider" style="height: inherit; width:inherit;">
        <slot></slot>
    </div>
</template>
<script lang="ts" setup>
import { provide, toRefs } from 'vue'

export interface Props {
    local:any
    globalData?: any
}
const props =  defineProps<Props>()
const { local, globalData } = toRefs(props)
provide('localLang', local)
provide('globalData', globalData)
</script>