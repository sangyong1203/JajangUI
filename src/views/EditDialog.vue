<template>
    <BasicDialog
        :model-value="isShowDialog"
        :title="title"
        width="500"
        :buttonTypes="['저장', '취소']"
        @on-save="submitForm(ruleFormRef)"
        @on-cancel="onCancel"
        @on-close="onClose"
        :auth="['GET', 'POST', 'PUT', 'DELETE']"
    >
        <el-form
            class="detail-form"
            :model="ruleForm"
            :rules="rules"
            require-asterisk-position="right"
            ref="ruleFormRef"
            label-position="left"
            size="large"
            label-width="auto"
        >
            <el-form-item prop="title" :label="'제목'">
                <el-input v-model="ruleForm.title" :placeholder="'제목을입력해주세요'" autocomplete="off" />
            </el-form-item>
            <el-form-item prop="title" :label="'작성자'">
                <template v-if="pageType === '등록'"> {{ ruleForm.createName }}</template>
            </el-form-item>
            <el-form-item prop="content" :label="'내용'" style="flex: 1">
                <el-input
                    type="textarea"
                    v-model="ruleForm.content"
                    :placeholder="'내용을입력해주세요'"
                    :autosize="{ minRows: 10, maxRows: 20 }"
                />
            </el-form-item>
        </el-form>
    </BasicDialog>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { Feedback } from 'jajang-ui'
const emits = defineEmits(['update:modelValue', 'refresh'])
const title = ref('') // 다이얼로그 타이틀
const isShowDialog: any = ref(false)
const ruleForm = ref({
    id: 0,
    title: '',
    createId: '',
    createName: '',
    content: '',
    createDate: '',
})
const pageType = ref('') // 등록 | 수정
const isEditPage = ref(false)
const ruleFormRef: any = ref(null)

// 입력 값 인증 룰
const rules = reactive<FormRules>({
    title: { required: true, message: '제목을입력해주세요', trigger: ['change', 'blur'] },
    content: { required: true, message: '내용을입력해주세요', trigger: ['change', 'blur'] },
})

// 저장
const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid: any) => {
        if (valid) {
            if (isEditPage.value) {
                updateSubmit()
            } else {
                createSubmit()
            }
        }
    })
}
// 등록 저장
const createSubmit = () => {}
// 수정 저장
const updateSubmit = () => {
    Feedback.useGlobalDialog('수정하시겠습니까', '확인', 'YN')
        .onConfirm(() => {})
        .onCancel(() => {})
}
const onCancel = () => {
    onClose()
}

// 상새내역 갱신 후 창 닫김
const refreshData = () => {
    if (pageType.value === '등록') {
        emits('refresh')
    } else {
        emits('refresh', ruleForm.value.id)
    }
    onClose()
}
const onClose = () => {
    isShowDialog.value = false
}
// 창 열기
const openDialog = async (type: '등록' | '수정', row?: any) => {
    isShowDialog.value = true
    pageType.value = type
    if (type == '수정') {
        title.value = '공지사항수정'
        ruleForm.value = { ...row }
        isEditPage.value = true
    } else {
        title.value = '공지사항작성'
        isEditPage.value = false
    }
}

defineExpose({ openDialog })
</script>
<style lang="scss" scoped>
.description {
    font-size: 12px;
    padding: 12px 0;
}

.detail {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
    // border: 1px solid #eeeeee;
    background-color: #ffffff;
    padding: 0 20px;
    // border-radius: 4px;
}
.detail-title {
    display: flex;
    align-items: flex-end;
    padding: 12px 4px;
    font-size: 18px;
    div {
        font-size: 18px;
    }
    .detail-description {
        font-size: 11px;
        margin-left: 16px;
        margin-bottom: 2px;
        color: gray;
    }
}
.detail-info {
    display: flex;
    height: 220px;
    gap: 20px;
    margin-bottom: 16px;
}
.detail-info-image {
    width: 220px;
    height: 220px;
}
.detail-info-text {
    flex: 1;
    border: 1px solid #dddddd;
    border-radius: 4px;
    padding: 20px;
}
.detail-form {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
}
:deep(.el-form-item) {
    margin-bottom: 0;
}
:deep(.el-descriptions__label) {
    width: 360px;
}
.detail-table {
    height: 300px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}
:deep(.el-table__row) {
    height: 44px;
}
</style>
