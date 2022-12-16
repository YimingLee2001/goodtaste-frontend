<template>
  <el-card>
    <el-row :gutter="20" class="header">
      <el-col :span="7">
        <el-input
          v-model="queryForm.city"
          placeholder="请输入想要查询的城市"
          clearable
        />
      </el-col>
      <el-col :span="9">
        <el-date-picker
          v-model="timeRange"
          type="daterange"
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date"
        />
      </el-col>
      <el-button type="primary" icon="Search" @click="initTimeChart"
        >搜索</el-button
      >
    </el-row>
  </el-card>
  <div id="main" style="width: 800px; height: 500px"></div>
</template>
<script setup>
import { ref, watch } from 'vue'
import * as echarts from 'echarts/core'
import { GridComponent } from 'echarts/components'
import { LineChart } from 'echarts/charts'
import { UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import { statListByCityTime } from '@/api/stat'
import { useStore } from 'vuex'
import dayjs from 'dayjs'

echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition])

const store = useStore()
const timeRange = ref([dayjs().subtract(3, 'month'), dayjs()])
const queryForm = ref({
  city: store.getters.city,
  startTime: dayjs(timeRange.value[0]).format('YYYY-MM'),
  endTime: dayjs(timeRange.value[1]).format('YYYY-MM')
})

watch(timeRange, () => {
  queryForm.value.startTime = dayjs(timeRange.value[0]).format('YYYY-MM')
  queryForm.value.endTime = dayjs(timeRange.value[1]).format('YYYY-MM')
  console.log(queryForm.value)
})

const initChart = (timeList, feeList) => {
  const chartDom = document.getElementById('main')
  const myChart = echarts.init(chartDom)
  const option = {
    xAxis: {
      type: 'category',
      data: timeList
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: feeList,
        type: 'line'
      }
    ]
  }

  option && myChart.setOption(option)
}

const initTimeChart = async () => {
  try {
    const res = await statListByCityTime(queryForm.value)
    const timeList = []
    const feeList = []
    for (let i = 0; i < res.length; ++i) {
      timeList.push(res[i].yearmonth)
      feeList.push(res[i].totalFee)
    }
    initChart(timeList, feeList)
  } catch (err) {
    // pass
  }
}
</script>
<style lang="scss" scoped></style>
