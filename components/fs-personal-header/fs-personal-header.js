import { mapActions, mapState } from 'pinia';
import { useUserStore } from '@/stores/userStore.js';
export default {
    data() {
        return {
            loading: true,
            file: '',
            formData: new FormData(),
        };
    },
    computed: {
        ...mapState(useUserStore, ['getUser', 'getUserData']),
        fileUrl() {
            return this.file ? URL.createObjectURL(this.file) : '';
        },
    },
    watch: {
        getUserData() {
            this.loading = false;
        },
    },
    methods: {
        ...mapActions(useUserStore, ['changePhoto']),
        getImg() {},
        handleFileUpload() {
            this.file = input.files[0];
            // const reader = new FileReader();
            this.submitFile();
        },
        async submitFile() {
            this.formData.append('image', this.file);
            this.changePhoto(this.formData);
        },
    },
};
