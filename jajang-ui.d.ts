
declare module 'jajang-ui' {

//   export const PageHeader: typeof import('./dist/src/components/layouts/PageHeader.vue').default
//   export const PageBody: typeof import('./dist/src/components/layouts/PageBody.vue').default
//   export const BasicDialog: typeof import('./dist/src/components/dialog/BasicDialog.vue').default
//   export const LeftMenu: typeof import('./dist/src/components/widget/LeftMenu.vue').default
//   export const SearchBox: typeof import('./dist/src/components/widget/SearchBox.vue').default
//   export const OperationBox: typeof import('./dist/src/components/widget/OperationBox.vue').default
//   export const OperationButton: typeof import('./dist/src/components/widget/OperationButton.vue').default
//   export const Pagination: typeof import('./dist/src/components/widget/Pagination.vue').default
//   export const DoubleDatePicker: typeof import('./dist/src/components/widget/DoubleDatePicker.vue').default
//   export const SingleDatePicker: typeof import('./dist/src/components/widget/SingleDatePicker.vue').default
//   export const StatsDatePicker: typeof import('./dist/src/components/widget/StatsDatePicker.vue').default
//   export const DropdownList: typeof import('./dist/src/components/widget/DropdownList.vue').default
//   export const DropdownTreeList: typeof import('./dist/src/components/widget/DropdownTreeList.vue').default
//   export const FileUpload: typeof import('./dist/src/components/widget/FileUpload.vue').default
//   export const FileDragUpload: typeof import('./dist/src/components/widget/FileDragUpload.vue').default
//   export const TitleDivider: typeof import('./dist/src/components/widget/TitleDivider.vue').default
//   export const UserInfo: typeof import('./dist/src/components/widget/UserInfo.vue').default
//   export const SearchText: typeof import('./dist/src/components/widget/SearchText.vue').default
//   export const KMap: typeof import('./dist/src/components/widget/KMap.vue').default
//   export const LineChart: typeof import('./dist/src/components/widget/LineChart.vue').default
//   export const LineBarChart: typeof import('./dist/src/components/widget/LineBarChart.vue').default
//   export const PieChart:typeof import('./dist/src/components/widget/PieChart.vue').default
//   export const GridTable: typeof import('./dist/src/components/widget/GridTable.vue').default
//   export const Editor: typeof import('./dist/src/components/widget/Editor.vue').default
//   export const FullscreenProgress: typeof import('./dist/src/components/widget/FullscreenProgress.vue').default

    export interface GlobalComponents {
      BasicDialog: typeof import('./src/components/dialog/BasicDialog.vue')['default']
      ConfigProvider: typeof import('./src/components/widget/ConfigProvider.vue')['default']
      DoubleDatePicker: typeof import('./src/components/widget/DoubleDatePicker.vue')['default']
      DropdownList: typeof import('./src/components/widget/DropdownList.vue')['default']
      DropdownTreeList: typeof import('./src/components/widget/DropdownTreeList.vue')['default']
      Editor: typeof import('./src/components/widget/Editor.vue')['default']
      ElBreadcrumb: typeof import('element-plus/es')['ElBreadcrumb']
      ElBreadcrumbItem: typeof import('element-plus/es')['ElBreadcrumbItem']
      ElButton: typeof import('element-plus/es')['ElButton']
      ElCol: typeof import('element-plus/es')['ElCol']
      ElCollapse: typeof import('element-plus/es')['ElCollapse']
      ElCollapseItem: typeof import('element-plus/es')['ElCollapseItem']
      ElDatePicker: typeof import('element-plus/es')['ElDatePicker']
      ElDialog: typeof import('element-plus/es')['ElDialog']
      ElDivider: typeof import('element-plus/es')['ElDivider']
      ElIcon: typeof import('element-plus/es')['ElIcon']
      ElInput: typeof import('element-plus/es')['ElInput']
      ElMenu: typeof import('element-plus/es')['ElMenu']
      ElMenuItem: typeof import('element-plus/es')['ElMenuItem']
      ElOption: typeof import('element-plus/es')['ElOption']
      ElPageHeader: typeof import('element-plus/es')['ElPageHeader']
      ElProgress: typeof import('element-plus/es')['ElProgress']
      ElRow: typeof import('element-plus/es')['ElRow']
      ElSelect: typeof import('element-plus/es')['ElSelect']
      ElSubMenu: typeof import('element-plus/es')['ElSubMenu']
      ElSwitch: typeof import('element-plus/es')['ElSwitch']
      ElTreeSelect: typeof import('element-plus/es')['ElTreeSelect']
      ElUpload: typeof import('element-plus/es')['ElUpload']
      FileDragUpload: typeof import('./src/components/widget/FileDragUpload.vue')['default']
      FileUpload: typeof import('./src/components/widget/FileUpload.vue')['default']
      FullscreenProgress: typeof import('./src/components/widget/FullscreenProgress.vue')['default']
      GridTable: typeof import('./src/components/widget/GridTable.vue')['default']
      LeftMenu: typeof import('./src/components/widget/LeftMenu.vue')['default']
      LineBarChart: typeof import('./src/components/widget/LineBarChart.vue')['default']
      LineChart: typeof import('./src/components/widget/LineChart.vue')['default']
      MainHeader: typeof import('./src/components/layouts/MainHeader.vue')['default']
      MainLayout: typeof import('./src/components/layouts/MainLayout.vue')['default']
      Map: typeof import('./src/components/widget/Map.vue')['default']
      OperationBox: typeof import('./src/components/widget/OperationBox.vue')['default']
      OperationButton: typeof import('./src/components/widget/OperationButton.vue')['default']
      PageBody: typeof import('./src/components/layouts/PageBody.vue')['default']
      PageHeader: typeof import('./src/components/layouts/PageHeader.vue')['default']
      Pagination: typeof import('./src/components/widget/Pagination.vue')['default']
      PieChart: typeof import('./src/components/widget/PieChart.vue')['default']
      PrintDialog: typeof import('./src/components/dialog/PrintDialog.vue')['default']
      RouterLink: typeof import('vue-router')['RouterLink']
      RouterView: typeof import('vue-router')['RouterView']
      SearchBox: typeof import('./src/components/widget/SearchBox.vue')['default']
      SearchText: typeof import('./src/components/widget/SearchText.vue')['default']
      SingleDatePicker: typeof import('./src/components/widget/SingleDatePicker.vue')['default']
      StatsDatePicker: typeof import('./src/components/widget/StatsDatePicker.vue')['default']
      TitleDivider: typeof import('./src/components/widget/TitleDivider.vue')['default']
      UserInfo: typeof import('./src/components/widget/UserInfo.vue')['default']
    }
    export interface ComponentCustomProperties {
      vLoading: typeof import('element-plus/es')['ElLoadingDirective']
    }

}