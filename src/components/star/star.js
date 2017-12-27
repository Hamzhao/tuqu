export default {
  name: 'star',
  props:{
      len:{
          type: Number,
          default: 5,
          require:true
      },
      active:{
          type: Number,
          default: 0
      },
      disabled:{
          type:Boolean,
          default: false
      }
  },
  created() {

     var that = this;
     for(let i=0;i<this.len;i++){
         that.lengths.push(i);
     }
     if(this.active > 0){
         this.currentIndex = this.active;
     }
  },
  mounted() {
      
     
  },
  filters: {

  },
  methods: {
     change(index) {
          if(!this.disabled){
             this.currentIndex = index;
             this.$emit('on-change', this.currentIndex);
          }
          
     },
     
  },
  computed: {
     
  },
  watch: {
     
  },
  data() {
     let that = this;
     return {
        lengths:[],
        currentIndex: 0
     }
  }
}

function contains (a, obj) {
  var i = a.length
  while (i--) {
    if (a[i] === obj) {
      return true
    }
  }
  return false
}