<template>
  <v-sheet class="p-contact" color="main">
    <validation-observer
      ref="observer"
      v-slot="{ invalid, validated }"
      netlify
      tag="contact"
      class="p-contact__form"
      name="contact"
      method="POST"
      data-netlify-honeypot="bot-field"
      @submit.prevent="onSubmit"
      :class="sendingClass"
    >
      <input type="hidden" name="form-name" value="contact" />
      <b>お問い合わせ</b>
      <div class="ticket-body">
        <div class="p-contact__item">
          <label for="name">お問い合わせ内容 </label>
          <v-select
            :items="data"
            label="live"
            id="live"
            name="live"
            v-model="live"
          ></v-select>
        </div>

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
  </v-sheet>
</template>

<style lang="scss" scoped>
.p-contact {
  background-color: lavenderblush;
  border: 1px double red;
  border-radius: 16px;
  padding: 32px 16px;
  .ticket-body {
    padding: 16px 0 16px 0;
    .p-contact__item {
      .p-contact__error {
        color: #fffc79;
        margin: (0, 50px);
        padding: 0;
      }
    }
  }
}
</style>

<script lang="js">

export default {
  props: ['data'],
  data() {
    return {
      live: '',
      email: '',
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
      if (this.isSending) {
        return
      }
      this.isSending = true
      this.completeMessage = '送信処理中…'
      const params = new URLSearchParams()
      params.append('form-name', 'contact')
      params.append('live', this.live)
      params.append('email', this.email)
      if (this.botField) {
        params.append('bot-field', this.botField)
      }
      this.$axios
        .$post('https://suiseihp.netlify.app/reserve', params)
        .then(() => {
          this.completeMessage = 'お問い合わせを送信しました！'
          this.resetForm()
          this.isSubmit = true
        })
        .catch((err) => {
          this.completeMessage = 'お問い合わせの送信が失敗しました'
          this.isError = true
        })
        .finally(() => {
          this.isSending = false
        })
    },
    resetForm() {
      this.live = ''
      this.email = ''
      this.isError = false
      this.$refs.observer.reset()
    }
  }
}
</script>
