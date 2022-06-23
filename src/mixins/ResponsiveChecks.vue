<script lang="ts">
import Vue from 'vue';
import {Component} from "vue-property-decorator";

@Component
export default class ResponsiveChecks extends Vue {

  protected get sMobile(): boolean {
    return document.getElementsByTagName('body')[0].clientWidth <= 768;
  }

  protected get sSemiMobile(): boolean {
    return document.getElementsByTagName('body')[0].clientWidth > 768 && document.getElementsByTagName('body')[0].clientWidth <= 1215;
  }

  protected get sDesktop(): boolean {
    return document.getElementsByTagName('body')[0].clientWidth > 1215;
  }

}
</script>
