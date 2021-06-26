import { ref, toRef } from "vue";

export const otherMethods = (props) => {
    // tornando props reativas
    const { infoProp } = toRef(props);
    const reactiveVariable = ref("initial value");

    return { reactiveVariable, infoProp };
};
