<template>
    <div class="konva" ref="konvaRef">
        <!-- 컨트롤 버튼 -->
        <div class="control">
            <div class="control-btn" @click="zoomIn">
                <el-icon><Plus /></el-icon>
            </div>
            <div class="control-btn" @click="zoomOut">
                <el-icon><Minus /></el-icon>
            </div>
            <div class="control-btn">{{ Math.floor(zoomRate * 100) + '%' }}</div>
            <div class="control-btn" @click="initPosition">Fit</div>
        </div>
        <!-- X Y 좌표 -->
        <!-- <div class="xy-position">
            <div><span>x: </span><span>{{ x }}</span></div>
            <div><span>y: </span><span>{{ y }}</span></div>
        </div> -->
        <!-- 맵 -->
        <v-stage ref="stageRef" :config="stageConfig">
            <v-layer ref="layerRef">
                <v-group ref="groupRef" :config="groupConfig">
                    <v-image ref="imageRef" :config="imageConfig" />
                    <!-- 구역 -->
                    <v-group v-for="(item, key) in roomList" :key="key + 'a'">
                        <v-line
                            :config="{
                                points: item.points,
                                fill: item.color,
                                stroke: 'gray',
                                strokeWidth: 1,
                                closed: true,
                            }"
                        />
                    </v-group>
                    <v-group v-for="(item, key) in blockArea" :key="key + 'b'">
                        <v-line
                            :config="{
                                points: item.points,
                                fill: '#ff000073',
                                stroke: '#ff000073',
                                strokeWidth: 1,
                                closed: true,
                            }"
                        />
                    </v-group>
                    <v-group v-for="(item, key) in blockWall" :key="key + 'c'">
                        <v-line
                            :config="{
                                points: item.points,
                                fill: 'yellow',
                                stroke: 'yellow',
                                strokeWidth: 2,
                                closed: true,
                            }"
                        />
                    </v-group>

                    <!-- Air sensor -->
                    <v-group v-for="(item, key) in airSensors" :key="key + 'd'">
                        <v-circle
                            :config="{
                                x: item.x,
                                y: item.y,
                                fill: 'blue',
                                stroke: 'black',
                                strokeWidth: 1,
                                radius: 6,
                            }"
                        />

                        <!-- <v-text :config="{
                            text: item.deviceName, 
                            fontSize: 6,
                            color: 'white'
                        }" /> -->
                    </v-group>
                    <!-- 구역 라벨 -->
                    <v-group v-for="(item, key) in roomList" :key="key + 'e'">
                        <v-label
                            :config="{
                                x: item.centerPoint.x,
                                y: item.centerPoint.y,
                            }"
                        >
                            <v-tag
                                :config="{
                                    fill: '#5ADAC6',
                                    pointerDirection: 'left',
                                    pointerWidth: sizeNoChange(6),
                                    pointerHeight: sizeNoChange(6),
                                }"
                            />
                            <v-text
                                :config="{
                                    text: item.name,
                                    fontSize: sizeNoChange(12),
                                    fill: 'black',
                                    padding: sizeNoChange(4),
                                }"
                            />
                        </v-label>
                    </v-group>
                    <!-- 로봇 위치 -->
                    <v-group v-for="(item, key) in robots" :key="key + 'd'">
                        <v-image ref="robotImgRef" :config="{
                            image: robotImg,
                            width: sizeNoChange(36),
                            height: sizeNoChange(30),
                            x: item.x,
                            y: item.y,
                            offsetX: sizeNoChange(30) / 2,
                            offsetY: sizeNoChange(30) / 2,
                            rotation: setRobotRotation( item.theta, rotatedAngle),
                        }" />

                        <!-- <v-circle :config="{
                            x: item.x,
                            y: item.y,
                            fill: 'red',
                            stroke: 'black',
                            strokeWidth: sizeNoChange(2),
                            radius: sizeNoChange(10),
                        }" />
                        <v-rect :config="{
                            x: item.x,
                            y: item.y,
                            // offsetX: 0.2,
                            // offsetY: 0.5,
                            rotation: setRobotRotation( item.theta, rotatedAngle,),
                            width:sizeNoChange(15),
                            height: sizeNoChange(2),
                            fill: 'black',
                        }" /> -->

                        <!-- <v-text :config="{
                            text: 'Rotate:' + setRobotRotation( item.theta, rotatedAngle,), 
                            fontSize: 6,
                            color: 'white'
                        }" /> -->
                    </v-group>
                    <!-- 에러코드 툴팁 -->
                    <!-- <v-group ref="groupToolTipRef" :config="{
                        x: getLocationX(-100), 
                        y: getLocationY(-100),
                        width:200,
                        height: 200,
                        fill: 'red'
                    }">
                        <v-rect :config="{
                            width:200,
                            height: 100,
                            fill: 'blue'
                        }" />
                        <v-text :config="{
                            text: `에러코드: ${errorCode}`, 
                            fontSize: 15,
                            color: 'white'
                        }" />
                    </v-group> -->
                </v-group>
                <!-- 중심점 -->
                <!-- <v-group :config="groupConfig">
                    <v-text :config="{
                        text: '+',
                        fontSize: 20,
                        fill: 'red',
                        x: imgObj.width / 2 - 6,
                        y: imgObj.height / 2 - 8
                    }"/>
                </v-group> -->
            </v-layer>
        </v-stage>
    </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'
import RobotIcon from '@/assets/icons/robot.svg'
/**-------- 데이터 setting ----------**/
type DataType = {
    errorCode: string
    mapUrl: string
    newOrigin: number[]
    resolution: number
    mapData: []
    rotatedAngle: number
    area: {
        room_list: []
        info: any
        block_wall: []
        block_area: []
    }
}
type SensorType = { areaId: string; id: number; deviceName: string; serial: string; x: number; y: number }
type RobotType = { deviceName: string; serial: string; x: number; y: number; theta: number }

const resolution = ref(0)
const newOrigin = ref({ x: 0, y: 0 })
const mapUrl = ref('')
const errorCode = ref('')
const roomList: any = ref([])
const blockWall: any = ref([])
const blockArea: any = ref([])
const airSensors: any = ref([])
const robots = ref<RobotType[]>([])

/**-------- konva 맵 ----------**/
let imgObj = new window.Image()

const imageRef: any = ref(null)
const konvaRef: any = ref(null)
const stageRef: any = ref(null)
const layerRef: any = ref(null)
const groupRef: any = ref(null)

const imageConfig: any = ref(null)
const stageConfig: any = ref({ width: 1, height: 1 })
const groupConfig: any = ref(null)
const zoomRate: any = ref(1) // 확대율
const x = ref(0)
const y = ref(0)
const rotatedAngle = ref(0)

const setData = (data: DataType) => {
    console.log('setData ', data)
    errorCode.value = data.errorCode ?? ''
    mapUrl.value = data.mapUrl ?? ''
    resolution.value = data.resolution
    newOrigin.value = data.newOrigin && { x: data.newOrigin[0] ?? 0, y: data.newOrigin[1] ?? 0 }
    rotatedAngle.value = data.rotatedAngle
    drawMap()
    setMap()

    // room 데이터 설정-----
    roomList.value = setPoints(data.area?.room_list ?? [])
    // block wall 데이터 설정-----
    blockWall.value = setPoints(data.area?.block_wall ?? [])
    // block area 데이터 설정-----
    blockArea.value = setPoints(data.area?.block_area ?? [])
}

// 맵 이미지 설정
function setMap() {
    // 이미지 설정
    imgObj.src = mapUrl.value

    imgObj.onload = () => {
        imageConfig.value = {
            image: imgObj,
            width: imgObj.width,
            height: imgObj.height,
        }
        resizeDraw() // 화면크기 따라 map 조절
        eventSetting() // 맵 기능 이벤트 설정
        initPosition()
    }
}
// air sensor 표시
const setAirSensor = (data: SensorType[]) => {
    airSensors.value = data
}

const robotImg = new window.Image()
robotImg.src = RobotIcon
robotImg.width = 30
robotImg.height = 20
robotImg.onload = () => {}

// 로봇 표시
const setRobots = (data: RobotType[]) => {
    robots.value = data ?? []
}
// 로봇 방향 설정
const setRobotRotation = (robotRotation: number, rotatedAngle: number) => {
    let temp1 = robotRotation / (Math.PI / 180)
    let temp2 = -rotatedAngle - temp1
    let temp3 = 180 + temp2
    let temp4 = temp3 % 360
    let temp5 = temp4 < -180 ? temp4 + 360 : temp4 > 180 ? temp4 - 360 : temp4
    return temp5
}
// 지도 등 모양 그릴때 필요하느 x,y 좌표 데이터를 수자 array 형태로 바꿔줌 예:[2,100,13,22]
const setPoints = (data: any[]) => {
    if (data.length === 0) return
    data.forEach((wall: any) => {
        let points: any = []
        wall.image_path.forEach((item: { x: string; y: string }) => {
            points.push(Number(item.x))
            points.push(Number(item.y))
        })
        wall.points = points
    })
    data.forEach((wall: any) => {
        wall.centerPoint = calculateBlockCenter(wall.points)
    })
    return data
}
// room 구역의 중심을 계산
const calculateBlockCenter = (points: []) => {
    let xSum = 0
    let ySum = 0
    const numPoints = points.length / 2 // 각 점은 x, y로 이루어짐

    for (let i = 0; i < points.length; i += 2) {
        xSum += points[i] // x 좌표
        ySum += points[i + 1] // y 좌표
    }

    const centerX = Math.round((xSum / numPoints) * 1000) / 1000
    const centerY = Math.round((ySum / numPoints) * 1000) / 1000

    return { x: centerX, y: centerY }
}

// Table 창크기 따라 크기 자동 조절
function resizeDraw() {
    let resizeObserver: ResizeObserver | null = null
    if (konvaRef.value) {
        resizeObserver = new ResizeObserver(() => {
            drawMap()
        })
        resizeObserver.observe(konvaRef.value)
    }
}
// 맴 그리기
function drawMap() {
    // stage 크기 설정
    stageConfig.value.width = konvaRef.value?.clientWidth
    stageConfig.value.height = konvaRef.value?.clientHeight

    // group를 중심 위치로 세팅
    groupConfig.value = {
        width: imgObj.width,
        height: imgObj.height,
        x: stageConfig.value.width * 0.5,
        y: stageConfig.value.height * 0.5,
        offsetX: imgObj.width * 0.5,
        offsetY: imgObj.height * 0.5,
        draggable: true,
    }
}
// 각 마우스 이벤트 설정
function eventSetting() {
    const stageNode = stageRef.value.getNode()
    stageNode.on('mouseover', function () {
        document.body.style.cursor = 'crosshair'
    })
    stageNode.on('mouseout', function () {
        document.body.style.cursor = 'default'
    })
    stageNode.on('mousemove', function () {
        x.value = getPointerPositionX()
        y.value = getPointerPositionY()
    })
    stageNode.on('wheel', function (event: any) {
        let ev = event.evt.wheelDelta
        if (ev > 0) {
            zoomIn()
        } else {
            zoomOut()
        }
    })
    stageNode.on('mousedown', function (event: any) {
        event.target.preventDefault()
        document.body.style.cursor = 'grab'
    })
    stageNode.on('mouseup', function () {
        document.body.style.cursor = 'crosshair'
    })
}

// 포인트 position X
function getPointerPositionX() {
    const stageNode = stageRef.value.getNode()
    const p = stageNode.getPointerPosition()
    const groupNode = groupRef.value.getNode()
    const positionX = (p.x - groupNode.x()) / groupNode.scaleX()
    const x = Math.round(positionX * 1000) / 1000
    return Number(x)
}
// 포인트 position Y
function getPointerPositionY() {
    const stageNode = stageRef.value.getNode()
    const p = stageNode.getPointerPosition()
    const groupNode = groupRef.value.getNode()
    const positionY = (p.y - groupNode.y()) / groupNode.scaleY()
    const y = -Math.round(positionY * 1000) / 1000
    return Number(y)
}
// size 크기 고정
const sizeNoChange = computed(() => {
    return (size: number) => {
        let changedSize = 0
        changedSize = size / zoomRate.value
        return changedSize
    }
})

// 확대
function zoomIn() {
    const node = groupRef.value.getNode()
    node.scaleX(node.scaleX() * 1.1)
    node.scaleY(node.scaleY() * 1.1)
    zoomRate.value = node.scaleX()
}
// 축소
function zoomOut() {
    const node = groupRef.value.getNode()
    node.scaleX(node.scaleX() / 1.1)
    node.scaleY(node.scaleY() / 1.1)
    zoomRate.value = node.scaleX()
}
// 위치 초기화
function initPosition() {
    const node = groupRef.value.getNode()
    const rate = stageConfig.value.height / imgObj.height
    node.scaleX(rate)
    node.scaleY(rate)
    node.setX(stageConfig.value.width * 0.5)
    node.setY(stageConfig.value.height * 0.5)
    zoomRate.value = node.scaleX()
}

defineExpose({ setData, setAirSensor, setRobots })
</script>
<style lang="scss" scoped>
.konva {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    .center-point {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 100;
    }

    .control {
        position: absolute;
        top: 4px;
        right: 4px;
        display: flex;
        flex-direction: column;
        gap: 4px;
        z-index: 100;
    }
    .control-btn {
        background: transparent;
        border-radius: 4px;
        border: 1px solid #888888;
        height: 28px;
        padding: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: var(--font14);
    }
    .control-btn:hover {
        cursor: pointer;
    }
    .xy-position {
        position: absolute;
        right: 4px;
        bottom: 4px;
        background: transparent;
        border-radius: 4px;
        padding: 4px;
        min-width: 100px;
        z-index: 100;
        border: 1px solid #888888;
        div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 4px;
            span {
                font-size: var(--font14) !important;
            }
        }
        // box-shadow: 0 0 3px 0px #bdbdbd;
    }
}
</style>
