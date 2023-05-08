var app = new Vue({
    el: '#baseband-encoder',
    data: {
        bits: [],
        encodedBits: [],
        encodedBitsNRZL: [],
        encodedBitsNRZM: [],
        encodedBitsNRZS: [],
        encodedBitsRTZ: [],
        encodedBitsBM: [],
        encodedBitsBLD: [],
        status: '',
        numberOfBits: 8,
        validateBit: validateBit
    },
    created: function () {
        this.bits = getBitstream(this.numberOfBits);
    },
    methods: {
        encode: function(){
            this.encodedBits = getManchesterLevelEncoding(this.bits);
            this.encodedBitsNRZL = getNRZLEncoding(this.bits);
            this.encodedBitsNRZM = getNRZMEncoding(this.bits);
            this.encodedBitsNRZS = getNRZSEncoding(this.bits);
            this.encodedBitsRTZ = getRTZEncoding(this.bits);
            this.encodedBitsBM = getBMEncoding(this.bits);
            this.encodedBitsBLD = getBLDEncoding(this.bits);

        },

    }
})

console.log('🍓🥑🍏☕🏆⚽✅🚦');