<template>
    <ContentField>
        <form>
            <div>
                <highlightjs autodetect :code="content.content" />
            </div>

            <button @click="copyUrl()" type="button" style="float:right;margin-right: 10px;"
                class="btn btn-primary">复制网址</button>

        </form>
    </ContentField>
</template>

<script>
import ContentField from "@/components/ContentField.vue"
import 'highlight.js/lib/common';
import hljsVuePlugin from "@highlightjs/vue-plugin";
import $ from 'jquery'
import { reactive } from "vue";

export default {
    components: {
        ContentField,
        highlightjs: hljsVuePlugin.component,
    },
    setup() {
        var url = window.location.href;
        var target = url.split("tool1/")[1];
        let content = reactive({
            content: "",
        });
        // let content2 = ref("");
        const getContent = () => {
            $.ajax({
                type: "get",
                url: "https://app2981.acapp.acwing.com.cn/api/tool1/index/" + target + "/",
                success: function (response) {
                    if (response.message === 'error') {
                        content.content = "索引错误"
                    } else {
                        content.content = response.content;
                        // content2.value = response.content;
                    }
                },
                error(response) {
                    console.log(response);
                }
            });

        }
        const copyUrl = () => {
            var oInput = document.createElement("input"); //创建隐形input
            oInput.value = window.location.href; // window.location.href 浏览器URL
            document.body.appendChild(oInput);
            oInput.select();
            document.execCommand("Copy");
            oInput.remove();
            alert("复制成功")
        }
        getContent();
        return {
            content,
            copyUrl,
        }
    }
}
</script>

<style scoped>

</style>