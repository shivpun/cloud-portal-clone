import { ref, type MaybeRefOrGetter } from "vue";
import { unrefElement, type MaybeComputedElementRef } from '@/composables/unrefElement'


export function useIntro(target: any, refId = "intro-cloud") {
    const introRefId: any = ref(refId);
    if (!target || !introRefId) {
        return;
    }

    const height = ref(0)
    const bottom = ref(0)
    const left = ref(0)
    const right = ref(0)
    const top = ref(0)
    const width = ref(0)
    const x = ref(0)
    const y = ref(0)

    const elementRef: HTMLElement | any = unrefElement(target);
    const rect = elementRef.getBoundingClientRect()

    height.value = rect.height
    bottom.value = rect.bottom
    left.value = rect.left
    right.value = rect.right
    top.value = rect.top
    width.value = rect.width
    x.value = rect.x
    y.value = rect.y
    introRefId.style.top = elementRef?.offsetTop - 3;
    introRefId.style.width = rect.width;
    introRefId.style.height = rect.height;
    introRefId.style.left = rect.x;
}