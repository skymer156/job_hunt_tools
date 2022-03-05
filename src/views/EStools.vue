<template>
  <div class="EStools">
    <h1>EStools</h1>
    <p>ES Contains Counter</p>
    <textarea
      name="textarea"
      id="contains"
      cols="80"
      rows="10"
      v-model="text"
    ></textarea>
    <div>{{ text.length }}文字</div>
    <input
      type="text"
      name="before"
      id="convert"
      v-model="before_text"
      placeholder="before"
    />
    <input
      type="text"
      name="after"
      id="convert"
      v-model="after_text"
      placeholder="after"
    />
    <button @click="convert_text()">置換</button>
    <button @click="save()">文章をブラウザに保存</button>
    <button @click="copy()">クリップボードにコピー</button>
    <hr />
    <div>非同期 - 辞書検索機能</div>
    <p>理由や体験、やりたいこととかを対話的に記述して、文を作成する機能</p>
    <p>単語から自動生成する機能</p>
    <p>文章の校正機能</p>
    <p>ESサンプル</p>
    <hr />
    <div>リンク集</div>
  </div>
</template>

<script>
export default {
  name: "EsTools",
  data() {
    return {
      text: "",
      before_text: "",
      after_text: "",
    };
  },
  methods: {
    convert_text: function () {
      this.text = this.text.replaceAll(this.before_text, this.after_text);
    },
    save: function () {
      localStorage.setItem("EsText", this.text);
    },
    copy: async function () {
      try {
        await navigator.clipboard.writeText(this.text);
        alert("コピーしました");
      } catch (error) {
        alert((error && error.message) || "コピーに失敗しました");
      }
    },
  },
  mounted() {
    let estext = localStorage.getItem("EsText");
    if (!estext) {
      estext = "ここに文字を入れてください";
    }
    this.text = estext;
    console.log(estext);
  },
};
</script>