<template>

  <div class="loginBox">
    <el-form
      :label-position="labelPosition"
      label-width="100px"
      :model="formLabelAlign"
      style="max-width: 460px"
    >
      <div class="divInput">
        <label class="label">Email
          <el-input v-model="formLabelAlign.Email" />
        </label>
      </div>
      <div class="divInput">
        <label class="label">Password
          <el-input v-model="formLabelAlign.Password" />
        </label>
      </div>

      <div class="divInput divSubmit">
        <el-button type="primary" size="large" round>Login</el-button>
      </div>

      <div class="divRegister">
        <div class="flex justify-space-between mb-4 flex-wrap gap-4">
          <el-button
            v-for="button in buttons"
            :key="button.text"
            :type="button.type"
            link @click="submit"
            >{{ button.text }}
          </el-button>
        </div>
      </div>
    </el-form>
  </div>
</template>


<style lang="scss">
.label {
  color: hsla(160, 100%, 37%, 1);
  margin: 5px 5px;
}

.loginBox {
  margin: 20px;
  position: absolute;
  left: 40%;
  margin-top: 200px;
  margin-left: -50px;
  width: 400px;
  height: 400px;
}

.divInput {
    margin: 20px;
}

.divSubmit {
  margin-left: 150px;
  width: 400px;
}
.divRegister {
    margin-left: 125px;
}

</style>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const labelPosition = ref('top')

const formLabelAlign = reactive({
  Email: '',
  Password: '',
})

const buttons = [
  { type: '', text: 'Click here to register' },
];
</script>

new Vue({
  methods : {
    
  }
})
