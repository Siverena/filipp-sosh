import { mapActions } from "pinia";
import { useModalStore } from "@/stores/modalStore.js";

export default {
    data() {
        return {};
    },
    computed: {},
    methods: {
        ...mapActions(useModalStore, ["acceptCookies", "rejectCookies"]),
     },
};

