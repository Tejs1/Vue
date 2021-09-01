const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Complete the course fast !!!",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    randomGoal() {
      const randNumber = Math.random();
      if (randNumber < 0.5) {
        return "master vue";
      } else {
        return "learn vue";
      }
    },
  },
});

app.mount("#user-goal");
