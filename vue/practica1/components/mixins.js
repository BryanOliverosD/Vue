let myMixin = {
  mounted () {
    console.log("MIXIN INIT");
    console.log(this.mixinData);
    this.test();
  },
  data () {
    return {
      mixinData: 'Mixin Data'
    }
  },
  methods: {
    test() {
      console.log('test from mixin');
    }
  }
};
Vue.component('mixins', {
  mixins: [myMixin],
  mounted () {
    console.log('Mounted from component');
  },
  data (){
    return {
      mixinData:'Mixin Data desde el componente'
    }
  },
  template:`
    <div>
      <h2> Uso de Mixins </h2>
    </div>
  `
});
