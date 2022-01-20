const app = Vue.createApp({
  data() {
    return {
      firstName: 'Chase',
      lastName: 'Oliver',
      email: 'oliverch3@gmail.com',
      picture: '/assets/monke.png',
    }
  },
  methods: {
    async getInfo() {
      
      console.log(this.firstName);
    },
  },
})
  

app.mount('#app')