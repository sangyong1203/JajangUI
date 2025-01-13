import type { App } from 'vue'
import '@/assets/css/main.scss'
import 'tui-date-picker/dist/tui-date-picker.css' // use datepicker
import 'element-plus/dist/index.css'
// import print from 'vue3-print-nb' // 프린트기능
import TuiGrid from 'vue3-tui-grid'
import VueKonva from 'vue-konva'
import * as ElIconModules from '@element-plus/icons-vue' // ElementPlus 아이콘
import * as JajangUI from '@/components/index'
import { createPinia } from 'pinia'

import { useProgress } from '@/stores/Progress'
import { useNavigation } from '@/stores/Navigation'
import { useRequestDefence } from '@/stores/RequestDefence'

const pinia = createPinia()
const {
    Feedback,
    Utils,
    Excel,
    MainHeader,
    MainLayout,
    PageHeader,
    PageBody,
    BasicDialog,
    LeftMenu,
    SearchBox,
    OperationBox,
    OperationButton,
    Pagination,
    DoubleDatePicker,
    SingleDatePicker,
    StatsDatePicker,
    DropdownList,
    DropdownTreeList,
    FileUpload,
    FileDragUpload,
    TitleDivider,
    LeftMenuHeader,
    SearchText,
    KMap,
    LineBarChart,
    LineChart,
    PieChart,
    GridTable,
    Editor,
    FullscreenProgress,
    ConfigProvider
} = JajangUI
export {
    Feedback,
    Utils,
    Excel,
    useProgress,
    useNavigation, 
    useRequestDefence,
    MainHeader,
    MainLayout,
    PageHeader,
    PageBody,
    BasicDialog,
    LeftMenu,
    SearchBox,
    OperationBox,
    OperationButton,
    Pagination,
    DoubleDatePicker,
    SingleDatePicker,
    StatsDatePicker,
    DropdownList,
    DropdownTreeList,
    FileUpload,
    FileDragUpload,
    TitleDivider,
    LeftMenuHeader,
    SearchText,
    KMap,
    LineBarChart,
    LineChart,
    PieChart,
    GridTable,
    Editor,
    FullscreenProgress,
    ConfigProvider
}



export default {
    install(app: App) {
        // app.use(print)
        app.use(pinia)
        app.use(TuiGrid)
        app.use(VueKonva)
        app.component('MainHeader', MainHeader)
        app.component('MainLayout', MainLayout)
        app.component('PageHeader', PageHeader)
        app.component('PageBody', PageBody)
        app.component('BasicDialog', BasicDialog)
        app.component('LeftMenu', LeftMenu)
        app.component('SearchBox', SearchBox)
        app.component('OperationBox', OperationBox)
        app.component('OperationButton', OperationButton)
        app.component('Pagination', Pagination)
        app.component('DoubleDatePicker', DoubleDatePicker)
        app.component('SingleDatePicker', SingleDatePicker)
        app.component('StatsDatePicker', StatsDatePicker)
        app.component('DropdownList', DropdownList)
        app.component('DropdownTreeList', DropdownTreeList)
        app.component('FileUpload', FileUpload)
        app.component('FileDragUpload', FileDragUpload)
        app.component('TitleDivider', TitleDivider)
        app.component('LeftMenuHeader', LeftMenuHeader)
        app.component('SearchText', SearchText)
        app.component('KonvaMap', KMap)
        app.component('LineBarChart', LineBarChart)
        app.component('LineChart', LineChart)
        app.component('GridTable', GridTable)
        app.component('Editor', Editor)
        app.component('FullscreenProgress', FullscreenProgress)
        app.component('ConfigProvider', ConfigProvider)

        // ElementPlus 아이콘 등록
        for (const [key, component] of Object.entries(ElIconModules)) {
            app.component(key, component)
        }
        console.log('JajangUI installed!')
    },
}