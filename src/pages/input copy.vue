<template>
    <div class="text">
        <input type="text" v-model="searchText" @input="search" placeholder="Search...">
        <div class="arrow-container">
            <button @click="navigate(-1)">&#8679;</button>
            <button @click="navigate(1)">&#8681;</button>
        </div>
        <div class="content-box">
            <p v-html="highlightedContent"></p>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            searchText: "",
            searchResults: [],
            currentIndex: -1
        };
    },
    methods: {
        search() {
            const regex = new RegExp(this.searchText, "gi");
            this.searchResults = this.content.match(regex) || [];
            this.currentIndex = -1;
        },
        highlightResult(result) {
            return result.replace(new RegExp(this.searchText, "gi"), match => {
                return `<span class="highlight">${match}</span>`;
            });
        },
        navigate(direction) {
            if (this.searchResults.length === 0) return;

            if (direction === -1) {
                this.currentIndex =
                    this.currentIndex <= 0 ? this.searchResults.length - 1 : this.currentIndex - 1;
                return this.content.replace(new RegExp(this.searchText, "gi"), match => {
                    return `<span class="highlight">${match}</span>`;
                });
            } else if (direction === 1) {
                this.currentIndex =
                    this.currentIndex >= this.searchResults.length - 1 ? 0 : this.currentIndex + 1;
            }
        }
    },
    computed: {
        highlightedContent() {
            if (this.searchText === "") {
                return this.content;
            }
            return this.content.replace(new RegExp(this.searchText, "gi"), match => {
                return `<span class="highlight">${match}</span>`;
            });
        },
        currentResult() {
            if (this.currentIndex === -1) {
                return "";
            }
            return this.searchResults[this.currentIndex];
        }
    }
};
</script>
  
<style>
.text {
    position: absolute;
    top: 0;
    border: 1px solid red;
    width: 100%;
    height: 100%;
    background: #fff;
}

.content-box {
    margin-top: 10px;
}

.highlight {
    background-color: yellow;
}
</style>