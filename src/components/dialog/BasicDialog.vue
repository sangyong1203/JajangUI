<template>
        
    <el-dialog
        :model-value="modelValue"
        :width="width"
        style="overflow: hidden; "
        :style="{overflow: 'hidden', height: height, maxHeight: '95vh'}"
        :before-close="handleClose"
        :center="footerCenter"
        :close-on-click-modal="false"
        :draggable="true"
        :align-center="true"
        :destroy-on-close="true"
        @close="onClose"
    >
        <template #header>
            <span style="font-size: 20px">{{ title }}</span>
            <span style="font-size: 12px; margin-left: 16px; margin-bottom: 2px; color: gray" v-show="description">
                {{ '* ' + description }}</span
            >
        </template>
        <slot />

        <template #footer>
            <div class="dialog-footer">
                <!-- '저장' | '취소' | '확인' | '닫기' 버튼 사용시 -->
                <div class="delete-btn">
                    <OperationButton
                        v-if="buttonTypes?.includes('삭제')"
                        type="삭제"
                        @click="onDelete"
                        :auth="auth"
                    />
                </div>
                <OperationButton v-if="buttonTypes?.includes('취소')" type="취소" @click="onCancel" />
                <OperationButton
                    v-if="buttonTypes?.includes('저장') && (isEdit || !buttonTypes?.includes('수정'))"
                    type="저장"
                    @click="onSave"
                />
                <OperationButton
                    v-if="buttonTypes?.includes('수정') && !isEdit"
                    type="수정"
                    @click="onEdit"
                    :auth="auth"
                />
                <OperationButton v-if="buttonTypes?.includes('닫기')" type="닫기" @click="onClose" />
                <OperationButton v-if="buttonTypes?.includes('확인')" type="확인" @click="onConfirm" />
                <OperationButton v-if="buttonTypes?.includes('선택')" type="선택" @click="onSelect" />

                <slot name="footer"></slot>
            </div>
        </template>
    </el-dialog>
</template>

<script lang="ts" setup>
import { onMounted, toRefs } from 'vue'
import { OperationButton } from '@/components'

type AuthType = 'GET' | 'POST' | 'PUT' | 'DELETE'
export interface Props {
    title: string // 다이얼로그 헤더 타이틀
    description?: string
    height?: string
    width?: string | number // 다이얼로그 너비
    buttonTypes?: ButtonType[] // 다이얼로그 아래위치에 사용되는 버튼 지정.  예: ['저장', '취소']
    footerCenter?: boolean // 아래 버튼의 위치 센터로 설정
    modelValue: boolean // 다이얼로그 열기 닫는 값
    isEdit?: boolean // 수정 등록 할수 있는 페이지 판단
    auth: AuthType[]
}
type ButtonType = '저장' | '취소' | '수정' | '삭제' | '확인' | '닫기' | '선택'


const props = defineProps<Props>()
const { title, description, width, height, buttonTypes, modelValue, isEdit, auth } = toRefs(props)
const emits = defineEmits(['update:modelValue', 'onSave', 'onEdit', 'onDelete', 'onCancel', 'onConfirm', 'onSelect', 'onClose'])

const onSave = () => {
    emits('onSave')
}
const onEdit = () => {
    emits('onEdit')
}
const onConfirm = () => {
    emits('onConfirm')
    onClose()
}
const onSelect = () => {
    emits('onSelect')
    onClose()
}
const onCancel = () => {
    emits('onCancel')
    onClose()
}
const onDelete = () => {
    emits('onDelete')
}
const onClose = () => {
    emits('update:modelValue', false)
    emits('onClose')
}
const handleClose = (done: () => void) => {
    done()
}
onMounted(() => {
    console.log('value', modelValue.value)
})
</script>
<style lang="scss" scoped>
.dialog-footer {
    display: flex;
    justify-content: center;
    position: relative;
}
.delete-btn {
    position: absolute;
    left: 20px;
}
</style>
