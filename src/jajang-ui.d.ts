
// import Feedback  from './feedback/index.ts';
// import  Utils from './utils/index.ts';
// import  Excel from './xlsx/index.ts';
// import   Progress  from './stores/Progress.ts';
// import  Navigation from './stores/NavStore.ts';
// import  RequestDefence  from './stores/RequestDefence.ts';

import  type { Props } from './layouts/MainLayout.vue';
import  type { Props }  from './layouts/PageHeader.vue';
import  type { Props }  from './layouts/PageBody.vue';
import  type { Props }  from './dialog/BasicDialog.vue';
import  type { Props }  from './widget/LeftMenu.vue';
import  type { Props }  from './widget/SearchBox.vue';
import  type { Props } from './widget/OperationBox.vue';
import  type { Props } from './widget/OperationButton.vue';
import  type { Props } from './widget/Pagination.vue';
import  type { Props } from './widget/DoubleDatePicker.vue';
import  type { Props } from './widget/SingleDatePicker.vue';
import  type { Props } from './widget/StatsDatePicker.vue';
import  type { Props } from './widget/DropdownList.vue';
import  type { Props } from './widget/DropdownTreeList.vue';
import  type { Props } from './widget/FileUpload.vue';
import  type { Props } from './widget/FileDragUpload.vue';
import  type { Props } from './widget/TitleDivider.vue';
import  type { Props } from './widget/UserInfo.vue';
import  type { Props } from './widget/SearchText.vue';
import  type { Props } from './widget/Map.vue';
import  type { Props } from './widget/LineBarChart.vue';
import  type { Props } from './widget/LineChart.vue';
import  type { Props } from './widget/PieChart.vue';
import  type { Props } from './widget/GridTable.vue';
import  type { Props } from './widget/Editor.vue';
import  type { Props } from './widget/FullscreenProgress.vue';

declare module 'jajang-ui' {
  // export const Feedback: any;
  // export const Utils: any;
  // export const Excel: any;
  // export const useProgress: any;
  // export const useNavigation: any;
  // export const useRequestDefence: any;
  // export const MainLayout: DefineComponent<Props, any, any>;
  // export const PageHeader: DefineComponent<Props, any, any>;
  // export const PageBody: DefineComponent<Props, any, any>;
  export const BasicDialog: DefineComponent<Props, any, any>;
  export const LeftMenu: DefineComponent<Props, any, any>;
  export const SearchBox: DefineComponent<Props, any, any>;
  export const OperationBox: DefineComponent<Props, any, any>;
  export const OperationButton: DefineComponent<Props, any, any>;
  export const Pagination: DefineComponent<Props, any, any>;
  export const DoubleDatePicker: DefineComponent<Props, any, any>;
  export const SingleDatePicker: DefineComponent<Props, any, any>;
  export const StatsDatePicker: DefineComponent<Props, any, any>;
  export const DropdownList: DefineComponent<Props, any, any>;
  export const DropdownTreeList: DefineComponent<Props, any, any>;
  export const FileUpload: DefineComponent<Props, any, any>;
  export const FileDragUpload: DefineComponent<Props, any, any>;
  export const TitleDivider: DefineComponent<Props, any, any>;
  export const UserInfo: DefineComponent<Props, any, any>;
  export const SearchText: DefineComponent<Props, any, any>;
  export const KMap: DefineComponent<Props, any, any>;
  export const LineChart: DefineComponent<Props, any, any>;
  export const LineBarChart: DefineComponent<Props, any, any>;
  export const PieChart:DefineComponent<Props, any, any>;
  export const GridTable: DefineComponent<Props, any, any>;
  export const Editor: DefineComponent<Props, any, any>;
  export const FullscreenProgress: DefineComponent<Props, any, any>;


}