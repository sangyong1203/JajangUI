<template>
    <el-button v-if="type=='목록'" :type="buttonType??''" @click="onClick" :disabled="disabled">{{ label??L.목록??'목록' }}</el-button>
    <el-button v-if="type=='취소'" :type="buttonType??'info'" @click="onClick" :disabled="disabled">{{ label??L.취소??'취소' }}</el-button>
    <el-button v-if="type=='삭제'" :type="buttonType??''" @click="onClick" :disabled="disabled">{{ label??L.삭제??'삭제' }}</el-button>
    <el-button v-if="type=='등록'" :type="buttonType??'primary'"  @click="onClick" :disabled="disabled">{{ label??L.등록??'등록' }}</el-button>
    <el-button v-if="type=='개별등록'" :type="buttonType??'primary'"  @click="onClick" :disabled="disabled">{{ label??L.개별등록??'개별등록' }}</el-button>
    <el-button v-if="type=='수정'" :type="buttonType??'primary'" @click="onClick" :disabled="disabled">{{ label??L.수정??'수정' }}</el-button>
    <el-button v-if="type=='변경'" :type="buttonType??'primary'" @click="onClick" :disabled="disabled">{{ label??L.변경??'변경' }}</el-button>
    <el-button v-if="type=='저장'" :type="buttonType??'primary'" @click="onClick" :disabled="disabled">{{ label??L.저장??'저장' }}</el-button>
    <el-button v-if="type=='추가'" :type="buttonType??'primary'"  @click="onClick" :disabled="disabled">{{ label??L.추가??'추가' }}</el-button>

    <el-button v-if="type=='닫기'" @click="onClick" :disabled="disabled">{{ label??'닫기' }}</el-button>
    <el-button v-if="type=='확인'" :type="buttonType??'primary'" @click="onClick" :disabled="disabled">{{ label??L.확인??'확인' }}</el-button>

    <el-button v-if="type=='해제'" :type="buttonType??'primary'"  @click="onClick" :disabled="disabled">{{ label??L.해제??'해제' }}</el-button>
    <el-button v-if="type=='일시정지'" :type="buttonType??'info'" @click="onClick" :disabled="disabled">{{ label??L.일시정지??'일시정지' }}</el-button>
    <el-button v-if="type=='영구정지'" @click="onClick" :disabled="disabled">{{ label??'영구정지' }}</el-button>

    <el-button v-if="type=='반려'" @click="onClick" :disabled="disabled">{{ label??'반려' }}</el-button>
    <el-button v-if="type=='승인'" :type="buttonType??'primary'" @click="onClick" :disabled="disabled">{{ label??L.승인??'승인' }}</el-button>

    <el-button v-if="type=='다음'" :type="buttonType??'primary'" @click="onClick" :disabled="disabled">{{ label??L.다음??'다음' }}</el-button>
    <el-button v-if="type=='이전'" :type="buttonType??'info'" @click="onClick" :disabled="disabled">{{ label??L.이전??'이전' }}</el-button>

    <el-button v-if="type=='완료'" :type="buttonType??'primary'" @click="onClick" :disabled="disabled">{{ label??L.완료??'완료' }}</el-button>

    <el-button v-if="type=='선택'" :type="buttonType??'primary'" @click="onClick" :disabled="disabled">{{ label??L.선택??'선택' }}</el-button>

    <el-button v-if="type=='기타'" :type="buttonType??''" @click="onClick" :disabled="disabled">{{ label }}</el-button>


</template>
<script setup lang="ts">
import { Notification } from '../../feedback/index'
import { toRefs, inject } from 'vue'

// 다국어 설정 
const localLang = inject('localLang')!
const L:any = localLang??{} 

type AuthType = 'GET' | 'POST' | 'PUT' | 'DELETE'
export interface OperationButtonProps {
    type: '등록' | '개별등록' | '수정' | '변경' | '저장' | '추가' | '삭제' | '취소' | '목록' | '해제' | '일시정지' | '영구정지' | '승인' | '반려' | '닫기' | '확인' | '다음' | '이전' | '완료' | '선택' | '기타'
    auth?: AuthType[]
    disabled?: boolean
    label?: string
    buttonType?: '' | 'default' | 'primary' | 'info' | 'warning' | 'danger' | 'text' | 'success' // el-button type
}
const props = defineProps<OperationButtonProps>()
const { type, auth, disabled, label, buttonType } = toRefs(props)
const emits = defineEmits(['click'])
const onClick = () => {
    switch(type.value){
        case '등록':
            onRegister()
            break
        case '개별등록':
            onRegister()
            break
        case '수정':
            onEdit()
            break
        case '변경':
            onEdit()
            break
        case '저장':
            onSave()
            break
        case '완료':
            onFinish()
            break
        case '삭제':
            onDelete()
            break
        case '취소':
            onCancel()
            break
        case '목록':
            onList()
            break
        default:
            emits('click')
    }
}
// 등록
const onRegister = () => {
    if(auth.value?.includes('POST')){
        emits('click')
    }else{
        Notification.warning(L.등록권한이없습니다??'등록 권한이 없습니다.', L.권한없음??'권한 없음')
    }
}
// 수정
const onEdit = () => { 
    if(auth.value?.includes('PUT')){
        emits('click')
    }else{
        Notification.warning(L.수정권한이없습니다??'수정 권한이 없습니다.', L.권한없음??'권한 없음')
    }
}
// 삭제
const onDelete = () => { 
    if(auth.value?.includes('DELETE')){
        emits('click')
    }else{
        Notification.warning(L.삭제권한이없습니다??'삭제 권한이 없습니다.', L.권한없음??'권한 없음')
    }
}
// 저장
const onSave = () => { 
    emits('click')
}
// 완료
const onFinish = () => { 
    emits('click')
}
// 취소
const onCancel = () => { 
    emits('click')
}
// 목록
const onList = () => {
    emits('click')
}
</script>
<style lang="scss" scoped>
</style>