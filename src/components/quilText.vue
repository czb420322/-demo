<template>
  <quill-editor
    ref="myQuillEditor"
    v-model="content"
    :options="editorOption"
    @blur="onEditorBlur($event)"
    @focus="onEditorFocus($event)"
    @ready="onEditorReady($event)"
  />    
</template>
<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";
export default {
  components: {
    quillEditor
  },
   data () {
      return {
        // 富文本编辑器默认内容
        content: '<h2>I am Example</h2>',
        //富文本编辑器配置
        editorOption: {
          // Some Quill options...
        }
      }
    },
    methods: {
      //失去焦点事件
      onEditorBlur(quill) {
        console.log('editor blur!', quill)
      },
      //获得焦点事件
      onEditorFocus(quill) {
        console.log('editor focus!', quill)
      },
      // 准备富文本编辑器
      onEditorReady(quill) {
        console.log('editor ready!', quill)
      },
      //内容改变事件
      onEditorChange({ quill, html, text }) {
        console.log('editor change!', quill, html, text)
        this.content = html
      }
    }
}

</script>