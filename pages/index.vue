<template>
  <div class="container LoginPage d-flex justify-content-center align-items-center">
    <div class="LoginForm shadow">
      <b-form
        v-if="show"
        @submit.prevent="onSubmit"
        @reset.prevent="onReset"
      >
        <b-form-group
          id="input-group-1"
          label="Login:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.login"
            type="text"
            required
          />
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Password"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="form.pass"

            required
          />
        </b-form-group>


        <b-button
          type="submit"
          variant="primary"
        >
          <b-spinner v-show="loading" small></b-spinner>
          Войти
        </b-button>
        <b-button
          type="reset"
          variant="danger"
        >
          Сброс
        </b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        login: '',
        pass: '',
      },
      show: true,
      loading: false
    }
  },
  methods: {
    onSubmit () {
      this.loading = true
      // имитирует авторизацию
      if(this.form.login === 'admin' && this.form.pass === 'admin'){
        setTimeout(()=>{
          this.loading = false
          this.$router.push('tablePage')
        },1000)
      } else {
        setTimeout(()=>{
          this.loading = false
          alert('Неверные логин или пароль')
        },1000)
      }
    },
    onReset () {
      this.loading = true;
      setTimeout(()=> {
        this.loading = false
        this.form.login = ''
        this.form.pass = ''
      },300)
    }
  }
}
</script>

<style>
.LoginPage{
  width: 100%;
  height: 600px;
}
.LoginForm{
  width: 300px;
  height: auto;
  padding: 20px;
  border: 1px solid gray;
  border-radius: 10px;
}

</style>
