<template>
  <v-sheet class="p-contact" color="main">
    <validation-observer
      ref="observer"
      v-slot="{ invalid, validated }"
      netlify
      tag="form"
      class="p-contact__form"
      name="reserve"
      method="POST"
      data-netlify-honeypot="bot-field"
      @submit.prevent="onSubmit"
      :class="sendingClass"
    >
      <input type="hidden" name="form-name" value="contact" />
      <b>取り置きフォーム</b>
      <div class="ticket-body">
        <div class="p-contact__item">
          <label for="name">公演名 </label>
          <v-select
            :items="data"
            label="live"
            id="live"
            name="live"
            v-model="live"
          ></v-select>
        </div>

        <div class="p-contact__item">
          <label for="name">取り置き名（カタカナ）</label>
          <validation-provider
            v-slot="{ errors }"
            rules="required|katakana"
            name="取り置き名"
          >
            <v-text-field
              type="text"
              id="name"
              name="name"
              v-model="name"
              label="name"
            />
            <p v-show="errors.length" class="p-contact__error">
              {{ errors[0] }}
            </p>
          </validation-provider>
        </div>
        <!-- /.p-contact__item -->

        <div class="p-contact__item">
          <label for="email">メールアドレス</label>
          <validation-provider
            v-slot="{ errors }"
            rules="required|email|max:256"
            name="メールアドレス"
          >
            <v-text-field
              type="text"
              id="email"
              name="email"
              v-model="email"
              autocomplete="email"
              label="e-mail"
            />
            <p v-show="errors.length" class="p-contact__error">
              {{ errors[0] }}
            </p>
          </validation-provider>
        </div>
        <!-- /.p-contact__item -->

        <div class="p-contact__item">
          <label for="message">取り置き枚数</label>
          <validation-provider
            v-slot="{ errors }"
            rules="required"
            name="取り置き枚数"
          >
            <v-text-field
              type="number"
              id="ticket"
              name="ticket"
              v-model="ticket"
              label="number of sheets"
            />
            <p v-show="errors.length" class="p-contact__error">
              {{ errors[0] }}
            </p>
          </validation-provider>
        </div>
        <!-- /.p-contact__item -->

        <div class="p-contact__item" v-show="false">
          <label for="message">スパムでない場合は空欄</label>
          <v-text-field type="text" name="bot-field" v-model="botField" />
        </div>
        <!-- /.p-contact__item -->
      </div>
      <div class="p-contact__submit">
        <v-btn color="success" type="submit" :disabled="invalid || !validated"
          >送信</v-btn
        >
      </div>
      <!-- /.p-contact__submit -->
    </validation-observer>
    <!-- /.p-contact__form -->
    <v-sheet color="main">
      <div id="anotherForm">
        <b>その他のお問い合わせ</b>
      </div>
      <v-btn class="info-btn" color="success">
        <a href="mailto:suiseida4@gmail.com?subject=suisei お問い合わせ"
          >お問い合わせ(一般用)</a
        >
      </v-btn>
      <v-btn class="info-btn" color="success">
        <a href="mailto:suiseida4@gmail.com?subject=suisei お問い合わせ"
          >お問い合わせ(関係者用)</a
        >
      </v-btn>
    </v-sheet>
  </v-sheet>
</template>

<style lang="scss" scoped>
.p-contact {
  background-color: lavenderblush;
  border: 1px double red;
  border-radius: 16px;
  padding: 32px 16px;
  .ticket-body {
    padding: 16px 0 0 0;
    .p-contact__item {
      .p-contact__error {
        color: #fffc79;
        margin: (0, 50px);
        padding: 0;
      }
    }
  }
  #anotherForm {
    padding: 32px 0 16px 0;
  }
  .info-btn {
    margin: 16px 0;
  }
}
</style>

<script lang="js">
// import firebaseApp from "firebase/app"
import firebase from '@/plugins/firebase'
// console.log(app.firebase)

export default {
  props: ['data'],
  data() {
    return {
      live: '',
      name: '',
      email: '',
      ticket: '',
      botField: '',
      isSubmit: false,
      isSending: false,
      isError: false,
      completeMessage: '',
    }
  },
  computed: {
    sendingClass() {
      return {
        'is-sending': this.isSending,
        'is-error': this.isError,
        'is-complete': this.isSubmit,
      }
    },
  },
  methods: {
    onSubmit() {
      const db = firebase.firestore()
      let dbReserve = db.collection("reserve").doc("res").collection(`${this.live}`)
      dbReserve
        .add({
          liveName: this.live,
          name: this.name,
          email: this.email,
          ticket: this.ticket,
        })
        .then(ref => {
          console.log('Add ID: ', ref.id)
          this.completeMessage = 'お問い合わせを送信しました！';
          this.resetForm();
          this.isSubmit  = true;
        })
    },
    resetForm() {
      this.live = ''
      this.name = ''
      this.email = ''
      this.ticket = ''
      this.isError = false
      this.$refs.observer.reset()
    }
  }
}
</script>
