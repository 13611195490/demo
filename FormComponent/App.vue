<template>
<el-form ref="form" :rules="rules" :model="form" >
    <el-form-item label="用户名" prop="username">
        <el-input  v-model="form.username"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
        <el-input v-model="form.password"></el-input>
    </el-form-item>
     <el-form-item >
        <button @click="validate">是否通过校验</button>
    </el-form-item>
</el-form>
</template>
<script>
export default {
    methods: {
        validate(){
            this.$refs.form.validate((valid)=>{
                console.log(valid)
            })
        }  
    },
    data(){
        return {
            form:{
                username:'hello',
                password:'pass'
            },
            rules:{
                username:[
                    {required:true,message:'必须填写用户名'}
                ],
                password:[
                    {required:true,message:'必须填写密码'}
                ]
            }
        }
    }
}
</script>