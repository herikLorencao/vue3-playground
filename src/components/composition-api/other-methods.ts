import { ref, toRef } from "vue";

export const otherMethods = (props: any) => {
    // tornando props reativas

    const { infoProp } = toRef(props, "info");
    const reactiveVariable = ref("initial value");
    return { reactiveVariable, infoProp };
};
