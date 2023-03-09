<!--  -->
<template>
    <div class="wrapper_box">
        <div class="content_wrapper">
            <van-swipe :autoplay="3000" lazy-render>
                <van-swipe-item v-for="(item,index) in list.bannerBeanList" :key="index">
                    <img :src="item.bannerPictureUrl" />
                </van-swipe-item>
            </van-swipe>
            <div class="top_wrapper">
                <van-nav-bar
                    title="超级SIM卡专区"
                    left-text=""
                    left-arrow
                    @click-left="onClickLeft"
                />
                <div class="banner-top">
                    <div class="left">
                        <div class="avatar_box">
                            <van-image :src="avatar" />
                        </div>
                        <div>135****3452</div>
                    </div>
                    <div class="right">
                        <div class="sim">SIM卡版本：USIM3.0+</div>
                    </div>
                </div>
            </div>
            <div class="app_wrapper" v-for="item in list.aidBeanList">
                <div class="app_box">
                    <div class="name_box">
                        <div class="title">{{ item.appName }}</div>
                        <div class="subTitle">{{ item.appSubhead }}</div>
                    </div>
                    <van-image fit="fill" :src="item.pictureUrl" />
                    <div class="introduce">{{ item.describeInfo }}</div>
                    <div class="text">
                        可将小区门禁卡模拟添加到手机中，刷手机开小区门。如常用该卡片，建议在“便捷设置”中将其设为默认卡，方便使用。用户可通过模拟门禁卡、智能家用门卡等方式解锁最酷开门方式。
                    </div>
                </div>
                <div class="footer_wrapper">
                    <!-- <div class="service_provider">— 由中移动金融科技有限公司提供服务 —</div> -->
                    <van-image fit="fill" :src="footerImg" />
                    <div class="text_box">
                        <p>SEID:23423400002320000023</p>
                        <p>卡商：东信</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottmo_wrapper">
            <van-button round type="success">{{ list.aidBeanList[0].buttonName }}</van-button>
            <!-- <van-progress :percentage="50" /> -->
        </div>
    </div>
</template>

<script lang="ts" setup>
import img from '@/assets/imgs/avatar.png'
import banner from '@/assets/imgs/bg2.jpg'
import banner2 from '@/assets/imgs/bg4.jpg'
import footer from '@/assets/imgs/footer.png'
// import { getCurrentInstance } from 'vue'
import { getH5PageInfo } from '../utils/api/service'
import { ref, reactive } from 'vue'

const avatar = ref(img)
const images = reactive([banner, banner2])
const footerImg = ref(footer)
const onClickLeft = () => history.back()
interface AidBeanListType {
    aid: string
    appH5PageConfigId: string | null
    appName: string
    appSubhead: string
    buttonName: string
    buttonUrl: string
    channelType: string
    describeInfo: string
    id: number | null
    modelType: string
    pictureUrl: string
    provinceCode: string
}
interface BannerBeanListType {
    appH5PageConfigId: string | null
    bannerPictureUrl: string
    id: number | null
    name: string
    pictureJumpUrl: string
}
interface ListType {
    aidBeanList: AidBeanListType[]
    appInfoJson: string
    appStatus: number
    bannerBeanList: BannerBeanListType[]
    dealerName: string
}
interface ParamsType {
    seid: string
    mobileNo: string
    no: string
}
let list = ref<ListType>({
    aidBeanList: [
        {
            aid: 'A011223344551C0103A011223344551C0103',
            appH5PageConfigId: null,
            appName: 'fyy共用安全域测试02',
            appSubhead: 'fyy共用安全域测试',
            buttonName: '下载完成',
            buttonUrl: 'http://uattsm2.cmpay.com:5443/static/mocam_h5/#/introduce',
            channelType: '1',
            describeInfo: '5555555555555',
            id: null,
            modelType: '1',
            pictureUrl: 'http://uattsm2.cmpay.com:5443/static/uploadFiles/1677569173073/门禁图.png',
            provinceCode: '',
        },
    ],
    appInfoJson: 'string',
    appStatus: 0,
    bannerBeanList: [
        {
            appH5PageConfigId: null,
            bannerPictureUrl:
                'http://uattsm2.cmpay.com:5443/static/uploadFiles/1677578813154/750X594_6.png',
            id: null,
            name: 'fyy测试',
            pictureJumpUrl: 'http://com.cn',
        },
    ],
    dealerName: 'string',
})

let params = ref<ParamsType>({
    seid: '22960004100000000680',
    mobileNo: '19573170310',
    no: '2414e6f6fd56416e9e8fa9c8a0dcd524',
})
getH5PageInfo(params.value)
    .then(res => {
        list.value = res.data
        console.log('list22', list.value)
    })
    .catch(error => {
        console.log('获取失败123！')
    })

// let appid = ref('123')
// let version = ref('1.0')
// let signTmp = YDRZ.getSign(appid, version)
// const { $router } = getCurrentInstance()?.appContext.config.globalProperties
// console.log(' $ywAuth ', $ywAuth)
// console.log(' $router ', $router)

// console.log('getCurrentInstance', getCurrentInstance())
</script>
<style lang="less" scoped>
.wrapper_box {
    // height: 86px;
    height: 100%;
    .content_wrapper {
        height: calc(100% - 120px);
        background: #f4f5f7;
        position: relative;
        overflow-y: auto;
        .top_wrapper {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            :deep(.van-nav-bar) {
                background-color: transparent;
            }
            :deep(.van-nav-bar),
            :deep(.van-nav-bar__content) {
                height: 86px;
                .van-badge__wrapper {
                    font-size: 36px;
                    color: #fff;
                }
                .van-nav-bar__title {
                    line-height: 86px;
                    font-size: 36px;
                    height: 100%;
                    font-weight: 400;
                    color: #ffffff;
                }
            }
            :deep(.van-hairline--bottom:after) {
                display: none;
            }
            .banner-top {
                height: 52px;
                display: flex;
                padding: 8px 32px;
                justify-content: space-between;
                font-size: 28px;
                font-weight: 400;
                box-sizing: border-box;
                line-height: 52px;
                color: #fff;
                .left {
                    display: flex;
                    .avatar_box {
                        margin-right: 16px;
                        width: 40px;
                        height: 40px;
                        :deep(.van-image) {
                            img {
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }
                }
            }
        }
        :deep(.van-swipe) {
            border-radius: 0 0 50px 50px;
            overflow: hidden;
            transform: translateY(0);
            width: 100%;
            height: 594px;
            .van-swipe__track {
                // width: 750px !important;
            }
            .van-swipe-item {
                img {
                    width: 750px;
                    height: 100%;
                }
            }
            .van-swipe__indicators {
                bottom: 132px;
                .van-swipe__indicator {
                    width: 8px;
                    height: 8px;
                    background: rgba(255, 255, 255, 0.5);
                }
                .van-swipe__indicator--active {
                    width: 18px;
                    height: 8px;
                    background: #ffffff;
                    border-radius: 10px 10px 10px 10px;
                }
            }
        }
        .app_wrapper {
            height: 1020px;
            width: 100%;
            position: absolute;
            top: 480px;
            left: 0;
            display: flex;
            align-items: center;
            flex-direction: column;
            .app_box {
                box-sizing: border-box;
                width: 690px;
                height: 746px;
                border-radius: 16px 16px 16px 16px;
                background: #ffffff;
                padding: 0 32px 48px;
                .name_box {
                    height: 97px;
                    line-height: 97px;
                    display: flex;
                    .title {
                        font-size: 32px;
                        color: rgba(0, 0, 0, 0.8);
                        margin-right: 33px;
                    }
                    .subTitle {
                        font-size: 28px;
                        color: rgba(0, 0, 0, 0.5);
                    }
                }
                :deep(.van-image) {
                    width: 626px;
                    height: 344px;
                }
                .introduce {
                    height: 45px;
                    line-height: 45px;
                    font-size: 32px;
                    color: #333333;
                    margin-top: 34px;
                    margin-bottom: 20px;
                }
                .text {
                    font-size: 28px;
                    color: #333333;
                }
            }
            .footer_wrapper {
                height: 114px;
                padding: 80px 0;
                :deep(.van-image) {
                    width: 475px;
                    height: 33px;
                }
                .text_box {
                    margin-top: 16px;
                    font-size: 24px;
                    color: rgba(0, 0, 0, 0.2);
                    padding-left: 56px;
                    p {
                        height: 33px;
                        line-height: 33px;
                    }
                }
            }
        }
    }
    .bottmo_wrapper {
        height: 120px;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        :deep(.van-button) {
            width: 610px;
            height: 80px;
            background: linear-gradient(270deg, #7b5edf 0%, #6458dd 100%);
            border-radius: 44px 44px 44px 44px;
            font-size: 34px;
            color: #ffffff;
            border: none;
        }
        .van-progress {
            width: 610px;
            height: 80px;
            background: linear-gradient(270deg, #7b5edf 0%, #d5cef5 100%);
            border-radius: 44px 44px 44px 44px;
            :deep(.van-progress__portion) {
                border-radius: 44px 0px 0px 44px;
            }
            :deep(.van-progress__pivot) {
                left: 50% !important;
                background-color: transparent;
                font-size: 34px;
                color: #6458dd;
            }
        }
        // :deep(.van-button:before) {
        //     display: none;
        // }
    }
}
</style>
