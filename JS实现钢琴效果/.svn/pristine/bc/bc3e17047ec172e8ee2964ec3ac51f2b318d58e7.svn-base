<template>
  <section>
    <div class="line" v-bind:key="item.id" v-for="item in data">
      <span :class="imageTitleClass(item.type)" class="title">{{item.title}}</span>
      <span v-if="item.type === 'text'" class="content">{{item.content}}</span>
      <span v-if="item.type === 'html'" class="content" v-html="item.content"></span>
      <detail-patrol-map v-if="item.type === 'patrolMap'" class="content" :mapOptions="item.content"></detail-patrol-map>
      <detail-image v-if="item.type === 'image'" class="content" :images="item.content" :thumbs="item.thumb"></detail-image>
      <detail-file v-if="item.type === 'file'" class="content" :files="item.content"></detail-file>
      <detail-video v-if="item.type === 'video'" :video="item.content"></detail-video>
      <detail-videos v-if="item.type === 'videos'" class="content" :videos="item.content" :thumbs="item.thumb"></detail-videos>
      <span v-if="item.type === 'custom'"><slot></slot></span>
    </div>
  </section>
</template>
<script>
import DetailImage from './Pic'
import DetailFile from './File'
import DetailVideo from './Video'
import DetailVideos from './Videos'
import DetailPatrolMap from './Map/patrolMap'

export default {
  components: {
    DetailImage,
    DetailFile,
    DetailVideo,
    DetailVideos,
    DetailPatrolMap
  },
  props: {
    data: {
      type: Array
    }
  },
  methods: {
    imageTitleClass(type) {
      return type === 'image' || type === 'video' || type === 'videos' ? 'span__image-title' : ''
    }
  }
}
</script>
<style lang="less" scoped>

  span {
    display: inline-block;
  }

  .span__image-title {
    margin-top: -11px;
  }

  section {
    font-size: 14px;
    line-height: 21px;
    margin: 10px 0 0;
    color: #8391a5;
    text-align: justify;
  }

  section > div {
    height: 36px;
    line-height: 36px;
    margin-bottom: 5px;
  }

  .line {
    height: 100%;
  }

  .title {
    width: 110px;
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #48576a;
    line-height: 1;
    padding: 11px 12px 11px 0;
    box-sizing: border-box;
  }

  .content {
    width: 600px;
    word-break: break-all; 
    word-wrap:break-word;
  }
</style>
<style lang="less">
  .content img {
    max-width: 600px !important;
    max-height: 300px;
  }
</style>

