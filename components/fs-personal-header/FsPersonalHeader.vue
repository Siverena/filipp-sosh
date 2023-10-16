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
<script src="./fs-personal-header.js"></script>
