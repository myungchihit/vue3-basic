<template>
	<div>
		<h2>보간법</h2>
		<p>{{ message }}</p>
		<p v-once>{{ message }}</p>
		<button v-on:click="message = message + '!'">Click !</button>

		<hr />
		<h2>HTML</h2>
		<p>{{ rawHtml }}</p>
		<p v-html="rawHtml"></p>

		<hr />
		<h2>속성 바인딩</h2>
		<div v-bind:title="dynamicTitle">마우스를 올려 보세여</div>
		<input type="text" value="홍길동" v-bind:disabled="isInputDisabled" />
		<div :title="dynamicTitle">bind 단축</div>
		<input v-bind="attrs" />

		<h2>JavaScript</h2>
		{{ message.split('').reverse().join('') }}<br />
		{{ isInputDisabled ? '예' : '아니오' }}
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const message = ref('안녕하세여');
		const rawHtml = ref('<strong>스트롱입니다.</strong>');
		const dynamicTitle = ref('Hello World!!');
		const isInputDisabled = ref(true);
		const attrs = ref({
			type: 'text',
			value: '12345678',
			disabled: false,
		});

		return {
			message,
			rawHtml,
			dynamicTitle,
			isInputDisabled,
			attrs,
		};
	},
};
</script>

<style lang="scss" scoped></style>
