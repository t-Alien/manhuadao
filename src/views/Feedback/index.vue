<template>
  <!-- feedback 反馈组件页面 -->
  <div class="page-feedback">
    <header class="header-normal">
      <router-link to="/mine" class="header-back"></router-link>
      <span class="header-title font-32">求书&反馈</span>
      <span class="header-submit font-28">提交</span>
    </header>

    <section class="feedback-select">
      <p class="select-title font-28">反馈类型：</p>
      <div class="btn-group">
        <div class="item font-24 active">求漫画</div>
        <div class="item font-24 active">章节/内容问题</div>
        <div class="item font-24 active">加载慢/功能问题</div>
        <div class="item font-24 active">岛蛋/支付问题</div>
        <div class="item font-24 active">其他问题</div>
        <div class="item"></div>
      </div>
    </section>

    <section class="feedback-input">
      <textarea class="input-main font-24" placeholder="请输入详细反馈内容，200字以内哦~喵~" maxlength="200"></textarea>
      <span class="input-num font-24">0/200</span>
      <input type="number" class="input-contact font-24" placeholder="QQ/手机至少填一项" />
    </section>

    <section class="feedback-follow">
      <p class="follow-text font-26">官方Q群：239159587</p>
      <p class="follow-text font-26">微信公众号：漫画岛（mhdapp）</p>
      <div class="follow-group">
        <img src="../../../public/img/ewm.png" class="follow-2dcode" />
        <p class="group-text font-22">截屏二维码，用微信扫一扫选择相册，扫描二维码完成关注</p>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Feedback'
}
</script>

<style lang="scss">
.page-feedback {
  .header-normal {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    height: 3rem;
    margin: 0 auto;
    background-color: #fff;
    position: relative;

    .header-back {
      width: 2rem;
      height: 1rem;
      background: url(../../../public/img/back.png) no-repeat;
      background-size: contain;
      position: absolute;
      top: 1rem;
      left: 1.4rem;
    }
    .header-submit {
      color: #333;
      position: absolute;
      top: 0.7rem;
      right: 0.6rem;
    }
  }

  .feedback-select {
    width: 100%;
    margin: 0 auto;
    padding: 1rem 0 0;

    .select-title {
      color: #333;
      padding: 0 0 0 0.8rem;
    }
    .btn-group {
      width: 100%;
      text-align: center;
      display: flex;
      box-sizing: border-box;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 0.5rem 0 0;
      padding: 0 0.5rem;
      font-size: 0.82rem;

      .active {
        color: #e7370c;
        border: 1px solid #e7370c;
      }

      .item {
        width: 8rem;
        height: 2rem;
        line-height: 2rem;
        margin: 0 0 0.8rem;
        color: #666;
        border: 1px solid #dbd9dc;
        border-radius: 6px;
      }
    }
  }
  .feedback-input {
    box-sizing: border-box;
    width: 25rem;
    margin: 0 auto;
    padding: 0 0.5rem;
    position: relative;

    .input-main {
      box-sizing: border-box;
      width: 100%;
      height: 8rem;
      padding: 0.42rem 0.43rem 0;
      color: #333;
      border: 1px solid #dbd9dc;
      border-radius: 6px;
      resize: none;
    }
    .input-num {
      color: #999;
      position: absolute;
      top: 6.4rem;
      right: 0.86rem;
    }
    .input-contact {
      box-sizing: border-box;
      width: 100%;
      height: 2.6rem;
      margin: 0.5rem 0 0;
      padding: 0 0.3rem;
      border: 1px solid #dbd9dc;
      border-radius: 6px;
    }
  }
  .feedback-follow {
    box-sizing: border-box;
    width: 100%;
    margin: 2.8rem auto 0;
    padding: 0 0.7rem 0.7rem;
    font-size: 0.9rem;

    .follow-text {
      margin: 0 0 0.82rem;
      color: #333;
    }
    .follow-group {
      display: flex;

      .follow-2dcode {
        width: 6rem;
        height: 6rem;
        border: 1px solid #dbd9dc;
        border-radius: 6px;
      }
      .group-text {
        margin: 0.54rem 0 0 1.3rem;
        color: #666;
        line-height: 1.5;
        font-size: 0.8rem;
      }
    }
  }
}
</style>
