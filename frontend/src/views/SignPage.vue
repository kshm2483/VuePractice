<template>
  <div>
    <!-- 로그인 / 회원가입 분리 -->
    <div>
      <!-- login form -->
      <SignForm/>
    </div>
  </div>
</template>

<script>
import SignForm from '@/components/sign/SignForm'

export default {
  components: {
    SignForm,
  }
}
</script>

<style>

</style>
