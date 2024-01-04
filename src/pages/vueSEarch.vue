<template>
    <div class=" text">
        <div class="search-highlight" v-html="contentShow">
    </div>
    </div>
  
</template>
  
<script>
const CLASS_NAME = 'search-hightlight'

export default {
    props: {
        content: {
            type: String,
            default: ''
        },
        keyword: {
            type: String,
            default: ''
        },
        highlightStyle: {
            type: String,
            default: 'background: #ffff00'
        },
        currentStyle: {
            type: String,
            default: 'background: #ff9632'
        }
    },
    data() {
        return {
            lightIndex: 0,
            matchCount: 0
        }
    },

    computed: {
        contentShow() {
            if (!this.keyword) return this.content
            let reg = new RegExp(this.keyword, 'g')
            let stringList = this.content.split(reg)
            if (!stringList.length) return this.content
            let content = ''
            for (let i = 0; i < stringList.length - 1; i++) {
                let style = i === this.lightIndex ? this.currentStyle : this.highlightStyle
                content += `${stringList[i]}<font style="${style}" ${CLASS_NAME}>${this.keyword}</font>`
            }
            content += stringList[stringList.length - 1]
            return content
        }
    },
    watch: {
        keyword: {
            immediate: true,
            handler() {
                this.lightIndex = 0
                this.getMatchCount()
            }
        },
        lightIndex: {
            immediate: true,
            handler() {
                this.$emit('current-change', this.lightIndex)
            }
        },
        matchCount: {
            immediate: true,
            handler() {
                this.$emit('mactch-count-change', this.matchCount)
            }
        }
    },
    methods: {
        scrollTo(index) {
            this.$nextTick(() => {
                let list = this.$el.querySelectorAll(`font[${CLASS_NAME}]`)
                if (list[index]) {
                    this.lightIndex = index
                    list[index].scrollIntoView()
                }
            })
        },
        searchNext() {
            this.$nextTick(() => {
                let idx = this.lightIndex >= this.matchCount - 1 ? 0 : this.lightIndex + 1
                this.scrollTo(idx)
            })
        },
        searchLast() {
            this.$nextTick(() => {
                let idx = this.lightIndex <= 0 ? this.matchCount - 1 : this.lightIndex - 1
                this.scrollTo(idx)
            })
        },
        getMatchCount() {
            this.$nextTick(() => {
                let list = this.$el.querySelectorAll(`font[${CLASS_NAME}]`)
                this.matchCount = list.length
            })
        },
    }
}
</script>
<style scoped>
.text {
    position: absolute;
    top: 0;
    border: 1px solid red;
    width: 100%;
    height: 100%;
    background: #fff;
}
.page-search-highlight {
    display: flex;
}

.search-highlight-container {
    flex: auto;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 20px;
    text-align: center;
}

.header {
    flex-shrink: 0;
}

.keyword,
.menu {
    max-width: 20rem;
    display: flex;
    margin: 2px auto;
    align-items: center;
    justify-content: flex-end;
}

.keyword .label {
    flex-shrink: 0;
    margin-right: 0.5rem;
}

.keyword .input {
    flex: auto;
}

.keyword .menu {
    padding: 5px 0;
}

.keyword .button {
    margin: 0 2px;
}

.content-container {
    flex: auto;
    overflow: auto;
    white-space: pre-line;
    font-size: 20px;
}</style>