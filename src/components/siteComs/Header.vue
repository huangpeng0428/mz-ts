<template>
    <div class="com-sort"
    :class="{'com-sort_active': showDel | isActive}"
    :data-code="content.code"
    @mouseenter="onMouseenter"
    @mouseleave="onMouseleave">
    <div class="site-title-wrap">
        <div class="site-title" :style="attrStyle"> {{content.pageTitle}} </div>
    </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import SiteComAct from '@/mixins/siteComAct.ts'
@Component({
    name: 'SiteHeader',
    mixins: [SiteComAct]
})
export default class SitHeader extends Vue {}
</script>
<style lang="scss" scoped>
.site-title {
  width: 80%;
  margin: 0 auto;
  height: 40px;
  line-height: 40px;
  text-align: center;
  @include ellipsis
}
</style>