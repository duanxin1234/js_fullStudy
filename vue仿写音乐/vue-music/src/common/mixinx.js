export const searchMixin = {
    data() {
        return {
            query:''
        }
    },
    computed: {
        
    },
    methods: {
        onquery(e) {
            
          this.query=e.trim()
          }
    },
}