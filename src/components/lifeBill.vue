<template>
  <div class="bill" :class="type" >
    <h3>{{ category.name }}</h3>
    <div v-if="recharges.length > 0" style="overflow-y: scroll">
      <div v-for="recharge in recharges" :key="recharge.id" >
        <div v-if="recharge.categoryId===category.id" >
          <a-collapse v-model:activeKey="activeKey" accordion>
            <a-collapse-panel :key="recharge.id" :header="recharge.title">
              <p>缴费单号：{{ recharge.billNo }}</p>
              <p>支付单号：{{ recharge.paymentNo }}</p>
              <p>姓名：{{ recharge.ownerName }}</p>
              <p>用户名：{{ recharge.sysUser.userName }}</p>
              <p>总金额：{{ recharge.amount }}</p>
              <p v-if="recharge.paymentTypeId===2">支付状态：已支付</p>
              <p>支付时间：{{ recharge.rechargeTime }}</p>
            </a-collapse-panel>
          </a-collapse>
        </div>
      </div>
    </div>
    <div v-else>暂无订单数据</div>
  </div>
</template>

<script>
import {getRecharge} from "@/api/system/living/recharge"
import {Collapse,CollapsePanel} from "ant-design-vue";


export default {
  props: {
    category: Object,
    recharges: Array,
    type: String
  },
  components: {
    'a-collapse': Collapse,
    'a-collapse-panel':CollapsePanel,
  },
  data(){
    return{
      rechargeDetail:[],
      activeKey:[],
    }
  },
  methods:{

  }
}
</script>

<style scoped>
.bill {
  /* 样式规则 */
}

.water {
  /* 样式规则 */
  background: lightskyblue;
}

.elec {
  /* 样式规则 */
  background: darkkhaki;
}

.gas {
  /* 样式规则 */
  background: lightpink;
}
</style>