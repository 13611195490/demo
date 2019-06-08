<template>
    <form onsubmit="return false">
        <slot></slot>
    </form>
</template>

<script>
export default {
    provide(){
        // 把当前实例直接暴露出来
        return {form:this}
    },
    props:{
        rules:{
            type:Object,
            default:()=>({})
        },
        model:{
            type:Object,
            default:()=>({})
        }
    },
    methods: {
        validate(cb){
            let valid = this.$children.every((child)=>{
                return child.validateStatus !== 'error'
            });
            cb(valid)
        }
    },
}
// props emit $children $parent $refs $eventBus provide inject
// vuex $attrs $listeners
</script>