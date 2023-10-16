export default {
    data() {
        return {
            currentSlide: 0,
        };
    },
    props: ['arrCabinet', 'inCabinet'],
    computed: {
        slidesCount() {
            return this.arrCabinet.photos.length;
        },
    },
    methods: {
        nextSlide() {
            if (this.currentSlide === this.arrCabinet.photos.length - 1) {
                this.currentSlide = 0;
            } else {
                this.currentSlide += 1;
            }
        },
        prevSlide() {
            this.currentSlide -= 1;
            if (this.currentSlide < 0) {
                this.currentSlide = this.arrCabinet.photos.length - 1;
            }
        },
    },
};
