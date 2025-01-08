import Excel from '@/xlsx/Excel.module.js'
import dayjs from 'dayjs'

/**
 * 데티어 테이블 리스트 데이터로 엑셀생성
 * @param downloadData Array  데이터 테이블 리스트 
 * @param title String 엑셀 테이블의 헤더 타이틀
 * @param tableHeaders String 각 컬럼 명 설정 string 배열 형식, 예: ['사용자명', '사용자아이디', '등록일', '수정일']
 * @param fileName String 엑셀파일 명 
 * @example 
 * 예: downLoadExcel(tableData, '사용자목록',  ['사용자명', '사용자아이디', '등록일', '수정일'],  '사용자목록엑셀파일일')
 */
export const downLoadExcel = (downloadData:any[], title:string, tableHeaders: string[], fileName?: string) => {

    const columStyle = { // 마지막 빈 컬럼 hiden
        height: 24,
        width: 1,
    }
    const titleStyle = {
        verticalAlign: 'middle',
        textAlign: 'center',
        backgroundColor: '#c1daf2',
        fontSize: 18,
        fontWeight: 'bold',
        border: '1px solid #000000',
        height: 24,
    }
    const tableHeader = {
        textAlign: 'center',
        border: '1px solid #000000',
        verticalAlign: 'middle',
        backgroundColor: '#f1f1f1',
        fontWeight: 'bold',
        fontSize: 10,
        width: 'auto'
    }
    const indexNumber = {
        textAlign: 'center',
        border: '1px solid #000000',
        verticalAlign: 'middle',
        fontSize: 10,
        width: 30
    }
    const tableListStyle = {
        textAlign: 'center',
        border: '1px solid #000000',
        verticalAlign: 'middle',
        fontSize: 10,
        width: 'auto',
        height: 24,
    }

    const tableHeaderList:any = []
    makeHeaderRow(tableHeaders)
    function makeHeaderRow(headers: string[]){
        tableHeaderList.push({
            text: 'NO',
            style: Object.assign({},tableHeader, {width:20}),
        })
        headers.forEach(name => {
            const item =  {
                text: name,
                style: Object.assign({},tableHeader),
            }
            tableHeaderList.push(item)
        })
    } 

    const sheet1 = {
        name: 'Sheet1',
        data: [
            [
                {
                    text: title,
                    colspan: tableHeaderList.length,
                    rowspan: 2,
                    style: Object.assign({},titleStyle),
                },
            ],
            [{ style: columStyle }],
            tableHeaderList,
        ],
    }
    for (let i = 0; i < downloadData.length; i++) {
            const keys = Object.keys(downloadData[i])
            const row = []
            
            row.push({
                text: i + 1,
                style: Object.assign({},indexNumber),
            })
            keys.forEach( keyName => {
                const item = {
                    text: downloadData[i][keyName],
                    style: Object.assign({},tableListStyle),
                }
                row.push(item)
            } )
            
            sheet1.data.push(row)
    }

    Excel.make([sheet1], (fileName??('downloadExcel'+ dayjs(new Date()).format('YYYY-MM-DD'))) )
}

export default {
    downLoadExcel
}