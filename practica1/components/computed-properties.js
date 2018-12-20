Vue.component('computed-properties', {
  data () {
    return {
      name: 'Pepe',
      surname: 'Grillo'
    }
  },
  computed: {
    fullName() {
      return `${this.name} ${this.surname}`
    }
  },
  template: `
    <div>
        <h2>Computed properties</h2>
        <p>{{ fullName }}</p>
    </div>
  `
});
