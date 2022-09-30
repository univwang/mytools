<template>
    <ContentField>
        <form>
            <div class="mb-3">
                <label for="code" class="form-label">代码</label>
                <textarea class="form-control" id="code" rows="8" placeholder="请输入代码"
                    v-model="mycode.content"></textarea>
            </div>
            <div class="mb-3">

                <select class="form-select" aria-label="Default select example">
                    <option selected>选择过期时间</option>
                    <option value="1">12小时</option>
                    <option value="2">7天</option>
                    <option value="3">一个月</option>
                </select>

            </div>

            <button @click="handle(mycode.index)" type="button" style="float:right;margin-right: 10px;"
                class="btn btn-primary">查看</button>

            <button @click="add()" type="button" style="float:right;margin-right: 10px;"
                class="btn btn-primary">提交</button>

        </form>
    </ContentField>
</template>

<script>
import ContentField from "@/components/ContentField.vue"
import { reactive } from "vue";
import $ from 'jquery';
export default {
    components: {
        ContentField,
    },

    setup() {

        let mycode = reactive({
            index: makeid(15),
            content: "",
        })
        function makeid(length) {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (var i = 0; i < length; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;
        }
        const add = () => {
            $.ajax({
                type: "post",
                url: "https://app2981.acapp.acwing.com.cn/api/tool1/add/",
                data: {
                    index: mycode.index,
                    content: mycode.content,
                },
                success(response) {
                    console.log(response);
                }
            });
        }
        const handle = (url) => {
            window.location.href = url;
        }
        return {
            handle,
            mycode,
            add,
        }
    }
}
</script>

<style scoped>

</style>