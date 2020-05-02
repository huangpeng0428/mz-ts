export default {
    props: {
      content: Object,
      attrStyle: Object,
      attrModule: Object,
      sortIdx: Number
    },
    data () {
      return {
        showDel: false
      }
    },
    computed: {
      editIndex () {
        return this.$store.state.editIndex
      },
      isActive () {
        return this.sortIdx === this.editIndex
      }
    },
    methods: {
      onMouseenter () {
        this.showDel = true
      },
      onMouseleave () {
        this.showDel = false
      }
    }
  }