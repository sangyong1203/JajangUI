import 'element-plus/dist/index.css'
import elementPlus from 'element-plus'
import * as ElIconModules from '@element-plus/icons-vue' // ElementPlus 아이콘
import VueKonva from 'vue-konva';
import print from 'vue3-print-nb' // 프린트기능
import TuiGrid from 'vue3-tui-grid'
import 'tui-date-picker/dist/tui-date-picker.css' // use datepicker
import { createApp } from 'vue'
import App from './views/App.vue'
import { createPinia } from 'pinia'
import router from './views/router'
import 'jajang-ui/dist/style.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(elementPlus)
app.use(print)
app.use(TuiGrid)
app.use(VueKonva)

// ElementPlus 아이콘 등록
for (const [key, component] of Object.entries(ElIconModules)) {
    app.component(key, component)
}
app.mount('#app')
