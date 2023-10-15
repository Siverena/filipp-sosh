<template>
    <div class="fs-section__wrapper">
        <div class="fs-section__loader" v-if="loading">
            <div
                class="fs-section__loader-string fs-section__loader-string--1"
            ></div>
            <div
                class="fs-section__loader-string fs-section__loader-string--2"
                v-for="key in 3"
            ></div>
            <div
                class="fs-section__loader-string fs-section__loader-string--3"
            ></div>
            <div
                class="fs-section__loader-string fs-section__loader-string--4"
            ></div>
        </div>
        <div
            v-if="!loading && getContent?.section?.length"
            class="fs-section"
            v-for="(section, key) in getContent?.section"
            :key="key"
        >
            <h2 class="fs-h2" v-if="section.sectionTitle">
                {{ section.sectionTitle }}
            </h2>
            <div
                class="fs-section__text"
                v-if="section.sectionText"
                v-html="section.sectionText"
            ></div>
            <div
                class="fs-section__images"
                v-if="section.sectionDocumentIMG.length"
            >
                <FsSectionSlider
                    v-if="section.sectionDocumentIMG.length"
                    :images="section.sectionDocumentIMG"
                />
            </div>
            <div
                class="fs-section__links"
                v-if="section.sectionDocumentSource.length"
            >
                <div
                    class="fs-section__link"
                    v-for="(link, i) in section.sectionDocumentSource"
                    :key="i"
                >
                    <i
                        class="pi fs-section__link-pi"
                        :class="{
                            'pi-file-pdf': link.documentType === 'PDF',
                            'pi-file-word': link.documentType === 'DOC',
                            'pi-file-excel': link.documentType === 'XLC',
                            'pi-file': link.documentType === 'PPT',
                            'pi-image': link.documentType === 'IMG',
                        }"
                    ></i>
                    <a
                        class="fs-link fs-link--base"
                        :href="link.documentSource"
                        target="_blank"
                    >
                        {{ link.documentName }}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./fs-section.js"></script>
