<template>
  <!-- about 关于组件页面 -->
  <div class="page-about">
    <header class="header-normal">
      <router-link to="/mine" class="header-back"></router-link>
      <span class="header-title font-32">关于漫画岛</span>
    </header>

    <section class="about-download">
      <div class="download-pic"></div>
      <a href="https://m.manhuadao.cn/download.html?cpid=0">
        <div class="download-btn font-24">立即下载</div>
      </a>
    </section>

    <section class="about-info">
      <p class="info-item">
        <span class="item-left font-26">公司名称</span>
        <span class="item-right font-22">上海元聚网络科技有限公司</span>
      </p>
      <p class="info-item">
        <span class="item-left font-26">微博</span>
        <span class="item-right font-22">@漫画岛官网</span>
      </p>
      <p class="info-item">
        <span class="item-left font-26">微信</span>
        <span class="item-right font-22">mhdapp</span>
      </p>
      <p class="info-item">
        <span class="item-left font-26">官方Q群</span>
        <span class="item-right font-22">555142226</span>
      </p>
      <p class="info-item">
        <span class="item-left font-26">联系电话</span>
        <span class="item-right font-22">021-54393188</span>
      </p>
      <p class="info-item">
        <span class="item-left font-26">商务合作QQ</span>
        <span class="item-right font-22">317022157</span>
      </p>
      <p class="info-item">
        <span class="item-left font-26">版权合作邮箱</span>
        <span class="item-right font-22">tg@manhuadao.cn</span>
      </p>
      <p class="info-item">
        <span class="item-left font-26">公司地址</span>
        <span class="item-right font-22">上海市闵行区万源路2158号泓毅大厦B座</span>
      </p>
    </section>

    <footer class="about-summary">
      <p class="summary-title font-26">漫画岛简介</p>
      <p
        class="summary-text font-22"
      >上万部各类题材漫画实时连载，各国免费漫画资源全方位覆盖，漫画更新速度紧随官网脚步，绝对让你先睹为快！专为下载阅读研发的极速下载功能和新型压缩技术，在观看高清漫画的同时更有效地为你节省手机空间让你观漫无止境。漫画岛，致力为沉迷二次元漫画的你带来丰富的精神食粮！畅心阅读，一点都不卡。</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="scss">
.page-about {
  .header-normal {
    display: flex;
    justify-content: center;
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

    .header-title {
      max-width: 70%;
      color: #333;
      text-align: center;
      overflow: hidden;
      white-space: nowrap;
    }
  }

  .about-download {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 93%;
    height: 7rem;
    margin: 0 auto;
    padding: 2rem 0 0.8rem;
    position: relative;
    border-bottom: 1px solid #ddd;

    .download-pic {
      width: 11rem;
      height: 5rem;
      background: url(../../../public/img/aboutimg.png) no-repeat 50%;
      background-size: contain;
      margin-left: 1rem;
    }
    a {
      color: #333;
      text-decoration: none;
      outline: none;

      .download-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 6rem;
        height: 2rem;
        font-weight: 600;
        color: #fff;
        font-size: 0.88rem;
        margin-left: 8.4rem;
        border-radius: 3px;
        background-color: #e7370c;
      }
    }
  }
  .about-info {
    box-sizing: border-box;
    width: 100%;
    margin: 0 auto;
    padding: 0 1rem;
    font-size: 0.8rem;

    .info-item {
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 2.3rem;
      padding: 0 0.1rem 0 0.2rem;
      border-bottom: 1px solid #ddd;

      .item-left {
        color: #333;
        font-weight: 500;
      }

      .item-right {
        color: #666;
        font-weight: 300;
      }
    }
  }

  .about-summary {
    box-sizing: border-box;
    width: 100%;
    margin: 0 auto;
    padding: 0.2rem 0.5rem 0.5rem 0.8rem;

    .summary-title {
      padding: 1rem 0 0.6rem;
      color: #333;
      font-weight: 500;
    }

    .summary-text {
      line-height: 2rem;
      font-size: 0.76rem;
      color: #666;
      font-weight: 300;
    }
  }
}
</style>
