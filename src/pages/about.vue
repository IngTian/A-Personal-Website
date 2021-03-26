<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>McGill Repair Shop</h3>
    <h3 @click="isFuckYOU=true">Contact Number</h3>
    <p v-if="isFuckYOU">FUCK YOU</p>
    <ul>
      <p>
        123123123 {{ getBusinessAddress }} {{ getBusinessName }} {{ getBusinessPhoneNo }}
      </p>
    </ul>
    <h3>Address</h3>
    <ul>
      <p>
        6666 Rue Mcgill Montreal Canada.
      </p>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'about',
  props: {
    msg: String
  },
  data: function () {
    return {
      businessInfo: Object,
      isFuckYOU: false
    }
  },
  mounted() {
    this.businessInfo = JSON.parse(localStorage.getItem('businessInfo'))
  },
  computed: {
    getBusinessName: function () {
      return this.businessInfo.businessName;
    },

    getBusinessAddress: function () {
      return this.businessInfo.businessAddress;
    },

    getBusinessPhoneNo: function () {
      return this.businessInfo.businessPhoneNo;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
