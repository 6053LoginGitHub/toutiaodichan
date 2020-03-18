<template>
    <div class="comment_box">
        <h4 class="head container">热门评论</h4>
        <div class="comment">
            <img class="avator" src="@/assets/zixun/play_s.png" alt="">
            <div class="rightbox">
                <p class="nickname">丢了幸福的猪</p>
                <p class="comment_text">梦里走了许多路，醒来还在床上。假装这是一条很有营养的评论。然后大家一起来回复我。</p>
                <div class="comment_data">
                    <p class="time">23小时前</p>
                    <p class="data_right">
                        <span class="zan"><img src="@/assets/zixun/icon_pl_dz.png" alt="">63</span>
                        <span class="reply">回复</span>
                    </p>
                </div>
                <div class="others_comment">
                    <div class="others_item">
                        <span class="others_nickname">瞬间看穿你：</span>与其谣言止于智，不如谣言止 于知。公正有力透明的发布信息才是最有效 的遏制谣言方法。
                    </div>
                    <p class="more_comments_btn">查看全部46条回复<img src="@/assets/zixun/icon_more.png" alt=""></p>
                </div>
            </div>
        </div>
        <div class="tabbar">
            <label class="comment_input">
                <img src="@/assets/zixun/comment.png" alt="">
                <input type="text" placeholder="写下您的高见吧~">
            </label>
            <div class="tabbar_btns">
                <div class="comments_btn">
                    <img src="@/assets/zixun/icon_gbook.png" alt="">
                    <span class="badge">5</span>
                </div>
                <img class="collect_btn" src="@/assets/zixun/icon_sc.png" alt="">
                <img class="share_btn" src="@/assets/zixun/icon_share.png" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
.comment_box{
    padding-bottom: 48px;
    .container{
        padding: 0 10px;
    }
    .head{
        font-size: 16px;font-weight: bold;
        display: flex;
        align-items: center;
        margin-top: 22px;
        margin-bottom: 5px;
        &::before{
            content: "";display: block;width: 5px;height: 16px;
            background: #1379F0;margin-right: 12px;
            border-radius: 2.5px;
        }
    }
    .comment{
        display: flex;
        justify-content: space-between;
        padding: 10px 0;
        margin: 0 10px;
        border-bottom: 1px solid #F0F0F0;
        &:last-of-type{
            border-bottom: none;
        }
        .avator{
            display: block;width: 25px;height: 25px;border-radius: 50%;
            margin-right: 13px;
        }
        .rightbox{
            width: 317.5px;
            // width: 90%;
            text-align: left;
            .nickname{
                font-size: 12px;color: #999;line-height: 25px;
            }
            .comment_text{
                font-size: 15px !important;line-height: 22px;color: #333;
                margin-bottom: 15px;margin-top: 5px;
            }
            .comment_data{
                font-size: 11px;color:#999;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .data_right{
                    display: flex;
                    align-items: center;
                    .zan{
                        display: flex;
                        align-items: center;
                        margin-right: 53px;
                        img{
                            display: block;
                            width: 15px;height: 15px;
                            margin-right: 4px;
                        }
                    }
                }
            }
            .others_comment{
                width: 100%;
                background:rgba(19,121,240,0.02);
                padding: 14px 17px;
                box-sizing: border-box;
                margin-top: 10px;
                .others_item{
                    font-size: 15px;
                    color: #333;line-height: 22px;
                    padding-bottom: 12.5px;
                    border-bottom: 1px solid #F2F2F2;
                    .others_nickname{
                        color: #999;
                    }
                }
                .more_comments_btn{
                    font-size: 15px;color: #1379F0;
                    display: flex;
                    align-items: center;
                    margin-top: 15px;
                    img{
                        width: 10px;height: 10px;display: block;
                        margin-left: 7px;
                        // margin-bottom: 7px;
                    }
                }
            }
        }
    }
    .tabbar{
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 49px;
        padding: 0 10px;
        background: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        border-top: 1px solid #F2F2F2;
        .comment_input{
            width:200px;
            height:35px;
            background:#F4F4F6;
            border-radius:17.5px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            img{
                width: 20px;height: 20px;display: block;
                margin-left: 16px;
                margin-right: 7px;
            }
            input{
                border:0;
                background: none;
                font-size: 13px;
                &::placeholder{color: #ccc;}
            }
        }
        .tabbar_btns{
            width: 124px;
            display: flex;
            justify-content: space-between;
            margin-left: 15px;
            img{
                width: 25px;height: 25px;display: block;
            }
            .comments_btn{
                width: 25px;height: 25px;
                position: relative;
                .badge{
                    min-width:15px;
                    // height:15px;
                    font-size: 9px;color: #fff;
                    background:#1379F0;
                    border-radius:50%;
                    display: block;
                    padding: 0 2.5px;
                    position: absolute;
                    right: -25%;top:-25%;
                    box-sizing: border-box;
                    line-height: 15px;
                }
            }
        }
    }
}
</style>