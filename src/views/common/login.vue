<template>
    <div class="login_box">
        <div class="login">
            <p class="prompt_title">您好，请输入手机号码</p>
            <p class="prompt_subtitle">手机号可以直接登录</p>
            <label for="code_input" class="code">
                <p class="code_item" v-for="item in 11" :key="item">{{code[item-1]}}</p>
                <input v-model="code"  id="code_input" class="code_input" type="number" maxlength="11">
            </label>
            <div class="use_pwd"><span>使用密码进入</span></div>
            <button class="next_btn" type="button">下一步</button>
       
            <label class="proto_box">
                <input class="checkbox" v-model="checked" type="checkbox" name="sex">
                <p class="checkbox_input">
                    <span v-if="!checked" class="check_img"></span>
                    <span v-else class="checked_img"></span>
                    我已阅读并同意<router-link to="" class="proto">《用户协议》</router-link>
                </p>
            </label>
            <div class="others_login">
                <p class="text">用其他方式登录或注册</p>
                <div class="types">
                    <router-link to="" class="qq"><img src="@/assets/member/qq.png" alt=""></router-link>
                    <router-link to="" class="wechat"><img src="@/assets/member/wechat.png" alt=""></router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            code:'',
            checked:false,
        }
    },
    props:{
        
    },
    mounted(){
        
        
    },
    watch:{
        code(){
            console.log(this.code)
            this.code=this.code.substr(0,11)
        },
        checked(){
            console.log(this.checked)

        }
    }
}
</script>
<style lang="scss">
.login_box{
    .login{
        text-align: left;
        padding: 0 10px;
        .prompt_title{
            font-size: 15px;color: #333;
            margin-top: 15px;margin-bottom: 12px;
        }
        .prompt_subtitle{
            font-size: 12px;color: #999;
            margin-bottom: 12px;
        }
        .code{
            display: flex;
            justify-content: space-between;
            .code_item{
                width:28px;height: 25px;border-bottom: 1px solid #CCCCCC;
                line-height: 25px;text-align: center;
                font-size: 16px;
            }
            .code_input{
                opacity: 0;width: 0;border: 0;
            }
        }
        .use_pwd{
            font-size: 13px;color: #333;
            margin-top: 14px;
            text-align: right;
        }
        .next_btn{
            width:100%;
            height:40px;
            background:#1379F0;
            font-size: 16px;color:#fff;
            border:0;
            margin-top: 30px;
        }
        .proto_box{
            display: flex;
            justify-content: center;
            font-size: 12px;color: #999;
            margin-top: 33px;
            
            .checkbox{
                display: none;
                
            }
            .checkbox_input{
                display: flex;
                align-items: center;
                .check_img,.checked_img{
                    display: block;
                    width: 15px;height: 15px;
                    background: url('../../assets/member/cheack_off.png') no-repeat;
                    background-size: 100% 100%;
                    margin-right: 8px;
                    transform: translateY(1px);
                }
                .checked_img{
                    background: url('../../assets/member/cheack_on.png') no-repeat;
                    background-size: 100% 100%;
                }
                .proto{
                    display: block;
                    color: #1379F0;
                }
            }
        }
        .others_login{
            display: flex;
            flex-direction: column;
            align-items: center;
            .text{
                font-size: 12px;color: #999;
                display: flex;
                align-items: center;
                margin-top: 27.5px;
                &::before,&::after{
                    content: "";
                    display: block;
                    width: 15px;height: 1px;
                    background: #DFDFDF;
                    margin:0 5px;
                }
            }
            .types{
                display: flex;
                margin-top: 17px;
                .qq,.wechat{
                    display: block;width: 30px;height: 30px;
                    margin: 0 15px;
                    img{
                        display: block;width: 30px;height: 30px;
                    }
                }
            }
        }
    }
    
}
</style>