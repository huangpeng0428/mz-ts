<template>
  <div class="com-text com-sort"
    :class="{'com-sort_active': showDel | isActive}"
    :data-code="content.code"
    :style="attrModule"
    @mouseenter="onMouseenter"
    @mouseleave="onMouseleave">
    <div class="text-content" :style="attrStyle">
      {{ content.text }}
    </div>
    <!-- <DeleteCp :showDel="showDel" :sortIdx="sortIdx"></DeleteCp> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
// import DeleteCp from '@/components/common/DeleteCp.vue'
import SiteComAct from '@/mixins/siteComAct.ts'
@Component({
  name: 'SiteText',
  components: {
    // DeleteCp
  },
  mixins: [SiteComAct]
})

export default class Text extends Vue {
  @Prop(Object) readonly content: any
  @Prop(Object) readonly attrStyle: any
  @Prop(Number) readonly aIndex: number | undefined
}
</script>

<style lang="scss" scoped>
.text-content {
  min-height: 1.5em;
  line-height: 1.5em;
  padding: 10px;
}
</style>
