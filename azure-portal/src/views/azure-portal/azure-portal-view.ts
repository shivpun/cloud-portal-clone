import { defineComponent, ref } from "vue";
import AzureNavigationTop from "@/components/azure-navigation-top/AzureNavigationTop.vue";
import { useIntro } from "@/composables/useIntro";
import { unrefElement } from "@/composables/unrefElement";

export default defineComponent({
  components: {
    AzureNavigationTop
  },
  data(props: any) {
    const createResourceRef = document.getElementsByClassName(".more-icon");
   // useIntro(createResourceRef);
    return {}
  }
});