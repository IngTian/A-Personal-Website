<template>
  <div class="root" style="height: 1000px; width: 100%; position: relative;">
    <div class="login-form">
      <div class="log-in-sign-up-selector">
        <div class="selector" v-bind:style="getSignUpSelectorStyle" @click="signUpSelectorClicked">
          <div class="selector-box">SIGN UP</div>
        </div>
        <div class="selector" v-bind:style="getLogInSelectorStyle" @click="logInSelectorClicked">
          <div class="selector-box">LOG IN</div>
        </div>
      </div>

      <transition name="fade" mode="out-in">
        <div v-if="displaySignUp" class="form-container" key="signUpForm">
          <div class="title">
            Sign Up For Free!
          </div>

          <div style="height: 3em; width: 80%; margin-bottom: 10px">
            <input class="form-input" v-model="firstName" placeholder="First Name" style="float: left; width: 150px">
            <input class="form-input" v-model="lastName" placeholder="Last Name" style="float: right; width: 150px">
          </div>
          <input class="form-input" v-model="email" placeholder="Email" style="width: 76%; margin-bottom: 20px">
          <input class="form-input" v-model="phoneNo" placeholder="Phone No" style="width: 76%; margin-bottom: 20px">
          <input class="form-input" v-model="address" placeholder="Address" style="width: 76%; margin-bottom: 20px">
          <input class="form-input" v-model="username" placeholder="Username" style="width: 76%; margin-bottom: 20px">
          <input class="form-input" v-model="password" placeholder="Password" style="width: 76%; margin-bottom: 40px">
          <red-button destination="/" background-color="red" text="SIGN UP"
                      style="width: 200px; height: 60px"></red-button>
        </div>
        <div v-else class="form-container" key="logInForm">
          <div class="title">
            Log In Now!
          </div>
          <input class="form-input" v-model="username" placeholder="Username" style="width: 76%; margin-bottom: 20px">
          <input class="form-input" v-model="password" placeholder="Password" style="width: 76%; margin-bottom: 40px">
          <red-button destination="/" background-color="red" text="LOG IN"
                      style="width: 200px; height: 60px"></red-button>
        </div>
      </transition>

      <div style="display: table">
        <div style="display: table-cell"></div>
        <div style="display: table-cell"></div>
      </div>

    </div>

    <div style="position: absolute; bottom: -50px; width: 100%; height: max-content">
      <div class="logo">
        CARPE VINUM
      </div>
    </div>
  </div>
</template>

<script>
import RedButton from "@/components/button";

export default {
  name: "log-in",
  components: {RedButton},
  data: function () {
    return {
      title: "Sign Up Now!",
      displaySignUp: true,
      displayLogIn: false,
      firstName: "",
      lastName: "",
      email: "",
      phoneNo: "",
      username: "",
      password: "",
      address: "",
      selectedStyle: {
        backgroundColor: "black"
      },
    }
  },
  computed: {
    getSignUpSelectorStyle: function () {
      return this.displaySignUp ? this.selectedStyle : null;
    },

    getLogInSelectorStyle: function () {
      return this.displayLogIn ? this.selectedStyle : null;
    }
  },
  methods: {
    signUpSelectorClicked: function () {
      this.displayLogIn = false;
      this.displaySignUp = true;
    },
    logInSelectorClicked: function () {
      this.displayLogIn = true;
      this.displaySignUp = false;
    }
  }
}
</script>

<style scoped>

.login-form {
  width: 40em;
  height: max-content;
  padding-bottom: 40px;
  background-color: whitesmoke;

  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-around;
  justify-content: flex-start;
}

.log-in-sign-up-selector {
  width: 80%;
  height: 5em;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;

  display: table;
  vertical-align: center;
}

.selector {
  display: table-cell;
  vertical-align: middle;
  background-color: silver;
  color: white;
  width: 50%;
}

.selector-box {
  height: 100%;
  width: 100%;
  text-align: center;
  line-height: 100px;
  font-size: 1.5em;
  font-family: Roboto, sans-serif;

  transition: ease .5s;
}

.selector-box:hover {
  background-color: darkgray;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}

.title {
  width: 80%;
  height: 80px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;

  text-align: center;
  line-height: 80px;
  font-size: 40px;
  font-family: Roboto, sans-serif;
}

.form-container {
  width: 80%;
  height: max-content;
  margin-top: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.form-input {
  display: block;
  height: 1.5em;
  padding: 5px 10px;
  background-color: white;
  outline: none;
  border: gray solid 1px;

  font-family: sans-serif;
  font-size: 18px;
  text-decoration: none;

  transition: border-color .4s ease, box-shadow .4s ease;
}

.form-input:focus {
  border: red 1px solid;
  transition: border-color .4s ease, box-shadow .4s ease;
}

.logo {
  width: 30em;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 80px;
  margin-bottom: 100px;
  background-color: white;

  font-family: 'Train One', cursive;
  font-size: 50px;
  text-align: center;
  font-weight: bold;
}
</style>