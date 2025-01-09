<template>
    <div class="configProvider" style="height: inherit; width:inherit;">
        <slot></slot>
    </div>
</template>
<script lang="ts" setup>
import { provide, toRefs } from 'vue'

export interface ConfigProviderProps {
    local?:any
    globalData?: any
}
const props =  defineProps<ConfigProviderProps>()
const { local, globalData } = toRefs(props)
provide('localLang', local.value??{})
provide('globalData', globalData.value??{})
</script>