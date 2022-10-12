<template>
  <header class="header-block">
    <div class="prepaid-balance-block">
      <div class="title">PREPAID BOT BALANCE</div>
      <div class="balance">363.42</div>
      <div class="required-action">No need ro pay</div>
    </div>

    <div class="earned-balance-block">
      <div class="title">EARNED TODAY</div>
      <div class="balance">-2.17</div>
      <div class="earning-status" :class="{'positive': earningStatusPositive, 'negative': !earningStatusPositive}">
        <v-icon v-if="earningStatusPositive" class="earnings-direction-icon" small color="#AFCEB9">mdi-arrow-top-right</v-icon>
        <v-icon v-else class="earnings-direction-icon" small color="#BF1616">mdi-arrow-bottom-right</v-icon>
        <div class="earnings-amount"><span v-if="!earningStatusPositive">-</span>0.58%</div>
      </div>
    </div>

    <div class="profile-link">
      <v-icon class="profile-link-icon" color="#272727" large>mdi-account</v-icon>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'HeaderBlock',

    data: () => ({
      earningStatusPositive: false
    }),
  }
</script>