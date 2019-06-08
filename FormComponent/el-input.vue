<template>
   <input type="text" :value="newValue" @input="change">
</template>

<script>
// vue的特点是单向数据流 vue传递给子 子不能修改父
export default {
    inheritAttrs:false, // 不要接受父组件的属性
    props:{
        value:String
    },
    methods:{
        change(e){
            this.newValue = e.target.value;
            // 子传父
            this.$emit('input',this.newValue);
            console.log(this)
            this.$bus.$emit('input',{
                id:this.$parent && this.$parent._uid,
                val:this.newValue
            });
        }
    },
    data(){
        return {
            newValue:this.value
        }
    }
}
</script>