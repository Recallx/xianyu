<template>
  <div class="main">
    <div class="air-column">
      <h2>乘机人</h2>
      <el-form class="member-info">
        <div class="member-info-item" v-for="(item,index) in users" :key="index">
          <el-form-item label="乘机人类型">
            <el-input v-model="users[index].username" placeholder="姓名" class="input-with-select">
              <el-select slot="prepend" value="1" placeholder="请选择">
                <el-option label="成人" value="1"></el-option>
              </el-select>
            </el-input>
          </el-form-item>

          <el-form-item label="证件类型">
            <el-input v-model="users[index].id" placeholder="证件号码" class="input-with-select">
              <el-select slot="prepend" value="1" placeholder="请选择">
                <el-option label="身份证" value="1" :checked="true"></el-option>
              </el-select>
            </el-input>
          </el-form-item>

          <span class="delete-user" @click="handleDeleteUser(index)">-</span>
        </div>
      </el-form>

      <el-button class="add-member" type="primary" @click="handleAddUsers">添加乘机人</el-button>
    </div>

    <div class="air-column">
      <h2>保险</h2>
      <div>
        <div class="insurance-item" v-for="(item,index) in infoData.insurances" :key="index">
          <el-checkbox
            @change="hanldChek(item.id)"
            :label="`${item.type}：￥${item.price}/份×1  最高赔付${item.compensation}`"
            border
          ></el-checkbox>
        </div>
      </div>
    </div>

    <div class="air-column">
      <h2>联系人</h2>
      <div class="contact">
        <el-form label-width="60px">
          <el-form-item label="姓名">
            <el-input v-model="contactName"></el-input>
          </el-form-item>

          <el-form-item label="手机">
            <el-input placeholder="请输入内容" v-model="contactPhone">
              <template slot="append">
                <el-button @click="handleSendCaptcha">发送验证码</el-button>
              </template>
            </el-input>
          </el-form-item>

          <el-form-item label="验证码">
            <el-input v-model="yanzheng"></el-input>
          </el-form-item>
        </el-form>
        <el-button type="warning" class="submit" @click="handleSubmit">提交订单</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      yanzheng: "",
      users: [
        {
          username: "",
          id: ""
        }
      ],
      infoData: {},
      insurances: [],
      //练习人名字
      contactName: "",
      //   电话
      contactPhone: "",
      invoice: false
    };
  },
  mounted() {
    this.$axios({
      url: `/airs/${this.$route.query.id}`,
      params: {
        seat_xid: this.$route.query.seat_xid
      }
    }).then(res => {
      this.infoData = res.data;
    });
  },
  methods: {
    // 添加乘机人
    handleAddUsers() {
      this.users.push({
        username: "",
        id: ""
      });
    },
    // 保险选中框
    hanldChek(id) {
      // 判断数组中是否有同样的id
      const index = this.insurances.indexOf(id);
      // 判断index
      if (index > -1) {
        // 证明有同样的id
        this.insurances.splice(index, 1);
      } else {
        this.insurances.push(id);
      }
    },
    // 移除乘机人
    handleDeleteUser(index) {
      this.users.splice(index, 1);
    },

    // 发送手机验证码
    handleSendCaptcha() {
      if (!this.contactPhone) {
        this.$message.error("手机号不能为空！");
        return;
      }
      this.$axios({
        url: "/captchas",
        method: "POST",
        // 还要发送手机号码上去
        data: {
          tel: this.contactPhone
        }
      }).then(res => {
        // console.log(res)
        // 结构出res.data里面的code
        let { code } = res.data;
        // 提示用户验证码
        this.$message.success(`这个是验证码${code}`);
      });
    },

    // 提交订单
    handleSubmit() {
      const data = {
        users: this.users,
        insurance: this.insurance,
        contactName: this.contactName,
        contactPhone: this.contactName,
        invoice: this.invoice,
        seat_xid: this.$route.query.seat_xid,
        air: this.$route.query.id
      };
      this.$axios({
        url: "/airorders",
        method: "POST",
        // 需要添加token，我们拿存在vuex里面的
        headers: {
            Authorization: `Bearer ${this.$store.state.user.userInfo.token}`
        },
        data
      }).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style scoped lang="less">
.air-column {
  border-bottom: 1px #ddd dashed;
  padding-bottom: 20px;
  margin-bottom: 20px;
}

.air-column h2 {
  margin-bottom: 20px;
  font-size: 22px;
  font-weight: normal;
}

/deep/ .el-select .el-input {
  width: 130px;
}

.input-with-select {
  width: 590px;
}

.input-with-select /deep/ .el-input-group__prepend {
  background-color: #fff;
}
.member-info /deep/ .el-form-item {
  margin-bottom: 0;
}

.member-info-item {
  border-bottom: 1px #eee dashed;
  padding-bottom: 20px;
  position: relative;

  &:first-child {
    .delete-user {
      display: none;
    }
  }
}

.add-member {
  margin-top: 20px;
}

.delete-user {
  display: block;
  background: #ddd;
  width: 16px;
  height: 16px;
  font-size: 14px;
  text-align: center;
  line-height: 16px;
  color: #fff;
  cursor: pointer;
  border-radius: 50px;
  position: absolute;
  right: -30px;
  top: 50%;
}

.insurance {
  > div {
    margin-top: 10px;
  }
}

.insurance-item {
  margin-bottom: 20px;
}

.contact {
  /deep/ .el-input {
    width: 50%;
  }
}

.submit {
  margin: 50px auto;
  display: block;
  width: 250px;
  height: 50px;
}
</style>