<template>
    <div class="fs-personal-header">
        <div class="fs-personal-header__name fs-personal-header__name--mob">
            {{ getUser.FIO }}
        </div>
        <div class="fs-personal-header__info">
            <div class="fs-personal-header__col-left">
                <div class="fs-personal-header__photo">
                    <img
                        :src="
                            file
                                ? fileUrl
                                : getUser.avatar
                                ? getUser.avatar
                                : ''
                        "
                        alt=""
                    />
                    <label
                        for="input"
                        class="fs-personal-header__add-photo"
                        :class="{
                            'fs-personal-header__add-photo--user':
                                getUser.avatar || fileUrl,
                        }"
                    >
                        <FsAddPhoto />
                        <input
                            type="file"
                            name="f"
                            accept="image/*"
                            id="input"
                            v-on:change="handleFileUpload()"
                        />
                    </label>
                </div>
            </div>
            <div class="fs-personal-header__col-right">
                <div class="fs-personal-header__name">
                    {{ getUser.FIO }}
                </div>

                <div class="fs-personal-header__user-content">
                    <div class="fs-personal-header__info-block">
                        <div class="fs-personal-header__field">
                            <div class="fs-personal-header__field-name">
                                Email
                            </div>
                            <div class="fs-personal-header__field-value">
                                {{ getUser.email }}
                            </div>
                        </div>
                        <div class="fs-personal-header__field">
                            <div class="fs-personal-header__field-name">
                                Телефон
                            </div>
                            <div class="fs-personal-header__field-value">
                                {{ getUser.phone }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
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
    async created() {},
};
</script>
