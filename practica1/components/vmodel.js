Vue.component('vmodel', {
  data () {
    return {
      framework: 'Vues 2'
    }
  },
  template: `
    <div>
        <h2>Trabajando con vmodel</h2>
        <input v-model = "framework" v-focus/>
        <p>El framework escogido es: {{ framework }}</p>
    </div>
  `
});
