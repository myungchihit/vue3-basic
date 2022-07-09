<template>
	<div>
		<p>{{ msg }}</p>
		<p v-text="msg"></p>
		<p v-html="htmlStr"></p>
		<p v-text="htmlStr"></p>

		<!-- v-once : 한번만 렌더링하고 그이후 정적 컨텐츠 처리 -->
		<!-- 업데이트 성능 최적화 -->
		<p v-once>{{ msg }}!!!</p>
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	setup() {
		const msg = ref('안녕하세여');
		const htmlStr = ref('<strong>ㅎㅇ</strong>');
		return { msg, htmlStr };
	},
};
</script>

<style lang="scss" scoped></style>
