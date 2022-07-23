<template>
  <div>
    <p>
      ไม่มีฟ้อนต์ สไตล์น้อยๆ ลองดูซิว่ามันจะทำให้ชีวิต ยากขึ้นหรือง่ายลง
      ทั้งหมดของเว็บไซต์ใช้สไตล์หลักๆเท่านี้ อาจจะมีเพิ่มเติมในแต่ละส่วน
      แต่ก็จะพยายามใช้ให้น้อยที่สุด
    </p>
    <pre>
      <code>
        html { 
          max-width: 70ch;
          padding: 3em 1em;
          margin: auto;
          line-height: 1.75;
          font-size: 1.25em;
          color: #333;
        }
      </code>
    </pre>
    <p>
      <b>ใช่แล้ว, มันอาจจะดูน้อยมาก แต่มันก็คือภาพที่ทุกคนเห็นอยู่นี้แหละ</b>
      <br />
      <i>
        ref:
        <a
          href="https://www.swyx.io/css-100-bytes/"
          target="_blank"
          rel="noreferrer"
        >
          https://www.swyx.io/css-100-bytes/
        </a>
      </i>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'MystylePage',
})
</script>
