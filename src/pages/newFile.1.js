// 在Vue组件中定义通知内容数组
export default (await import('vue')).defineComponent({
    data() {
        return {
            notifications: ['通知1', '通知2', '通知3', '通知4', '通知5'],
            options: [
                { value: 'option1', label: 'Option 1', modelValue: 5 },
                { value: 'option2', label: 'Option 2', modelValue: 6 },
                { value: 'option3', label: 'Option 3', modelValue: 7 }
            ],
            searchText: "",
            textData: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus ex vitae dignissim vulputate. Nulla fringilla bibendum diam. Donec fermentum, libero sed porttitor posuere, nisl mauris fringilla nulla, vitae facilisis lorem leo sit amet diam. Vestibulum a porttitor est. Duis id velit eu massa accumsan varius nec ut nulla. Quisque at risus ullamcorper, ultricies metus vel, viverra purus. Nullam congue dapibus lectus, a elementum elit venenatis eu. Donec et ex eleifend, volutpat ligula ac, cursus velit. Phasellus malesuada aliquet nisl, at finibus metus rhoncus volutpat. Integer pretium ornare enim id dapibus. Nulla facilisi. Curabitur finibus eros augue, id tincidunt turpis semper vitae. Suspendisse potenti. Mauris at finibus eros. Praesent efficitur vestibulum dolor, non placerat nulla consectetur vitae.",
            matchingIndices: [],
        };
    },
    computed: {
        selectedValues() {
            return this.options.reduce((obj, option) => {
                obj[option.value] = option.modelValue;
                return obj;
            }, {});
        }
    },
    methods: {
        searchNext() {
            this.findMatchingIndices();
            const currentIndex = this.matchingIndices._.findIndex(
                (idx) => idx > this.currentMatchIndex
            );
            if (currentIndex > -1) {
                this.currentMatchIndex = this.matchingIndices[currentIndex];
            } else {
                this.currentMatchIndex = this.matchingIndices[0];
            }
        },
        searchPrevious() {
            this.findMatchingIndices();
            const currentIndex = this.matchingIndices
                .reverse()
                ._.findIndex((idx) => idx < this.currentMatchIndex);
            if (currentIndex > -1) {
                this.currentMatchIndex = this.matchingIndices.reverse()[currentIndex];
            } else {
                this.currentMatchIndex = this.matchingIndices.reverse()[0];
            }
        },
        findMatchingIndices() {
            const regex = new RegExp(this.searchText, "gi");
            this.matchingIndices = [];
            let match;
            while ((match = regex.exec(this.textData)) !== null) {
                this.matchingIndices.push(match.index);
            }
            console.log(this.matchingIndices, '87****');
        },
    },
    mounted() {
        this.findMatchingIndices();
        console.log(this.matchingIndices, '92****');
        this.currentMatchIndex = this.matchingIndices[0];
    },
});
