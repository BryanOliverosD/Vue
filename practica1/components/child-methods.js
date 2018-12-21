Vue.component('child-methods', {
  data(){
    return {
      cmpName: 'Child METHODS CMP'
    }
  },
  methods: {
    showCmpName () {
      console.log(" LLAMADA AL MÉTODO CPM ",this.cmpName);
    }
  },
  template:`
    <div>
      <h2> Acceso a métodos del cmp hijo desde el cmp padre </h2>
    </div>
  `
});
