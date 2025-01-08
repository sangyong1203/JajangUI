<template>
    <el-container style="height: 100%">
        <slot name="main-header"></slot>
        <el-main>
            <div class="contents-wrapper">
                <div class="left-wrapper">
                    <!-- 메뉴 slot -->
                    <slot name="side-menu"></slot>
                </div>
                <div class="contents">
                    <!-- 바디 slot  -->
                    <slot />
                    <div class="page-footer">
                        <div class="footer-logo">
                            <img style="height: 75%" :src="footerLogoUrl" />
                        </div>
                        <div class="copy-right">{{ copyright }}</div>
                    </div>
                </div>
            </div>
        </el-main>
    </el-container>
</template>

<script lang="ts" setup>

export interface Props {
    footerLogoUrl: string
    copyright: string
}
const { copyright, footerLogoUrl} = defineProps<Props>()

</script>

<style scoped>
/* header  */
.el-header {
    height: 50px;
    background-color: var(--color-black);
    width: 100%;
    align-items: center;
    padding-left: 8px;
}
.el-row,
.el-col,
.header-left,
.header-right {
    height: 100%;
}

/* header left ------------ */
.header-left {
    display: flex;
    align-items: center;
    margin-left: 8px;
}
.header-left .colapse-btn {
    border: none;
    background-color: transparent;
    color: #dddddd;
    padding: 0 !important;
}
:deep(.colapse-btn .el-icon),
:deep(.colapse-btn .el-icon svg) {
    height: 24px;
    width: 24px;
}
.header-left .title {
    color: #fff;
    font-size: 20px;
    margin-left: 20px;
    text-decoration-line: none;
    text-decoration: none;
    display: flex;
    align-items: center;
}
.header-left .title-logo{
    height: 22px;
    margin-right: 12px;
    margin-top: -3px;
}
.header-left .title-text{
    font-size: 20px;
    display: block;
    font-family: 'SK_namuhx_B';
    margin-top: 2px;
}


/* header right ------------ */
.header-right {
    text-align: right;
    color: #fff;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.header-right .time {
    padding: 0 20px;
    font-weight: 500;
}
.header-right .time .time-lable{
    font-size: 17px;
}
.header-right .time .time-value{
    font-size: 18px;
}
.header-right .logout {
    margin-right: 4px;
    border: none;
    background-color: var(--primary-color);
}
.header-right .logout:hover {
    text-decoration: underline;
    cursor: pointer;
}
.header-right .logout .el-icon  {
    width: 18px;
    height: 18px;
    transform: rotate(90deg);
}
.header-right .logout .el-icon svg {
    width: 18px;
    height: 18px;
}
.header-right .refresh {
    background: var(--color-orange);
    border: none;
    margin-right: 8px;
}
.header-right .refresh .el-icon {
    width: 18px;
    height: 18px;
}
.header-right .refresh .el-icon svg {
    width: 18px;
    height: 18px;
}

/* 메인 */
.el-main {
    --el-main-padding: 0px;
    color: var(--primary-text-color);
    overflow: hidden;
}
.contents-wrapper {
    display: flex;
    flex-direction: row;
    height: 100%;
    background: var(--main-page-bg-color);
}
.contents-wrapper .contents {
    padding: 32px 32px 0px 32px;
    width: 100%;
}

/* 컨텐츠 본문 내용 */
.contents {
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.page-footer {
    display: flex;
    justify-content: flex-end;
    gap: 16px;
    align-items: center;
    padding: 12px 0px;
    height: 60px;
}
.footer-logo {
    height: 100%;
}
.copy-right {
    font-size: 0.75rem;
    color: var(--primary-text-color);
    text-align: right;
}
</style>
