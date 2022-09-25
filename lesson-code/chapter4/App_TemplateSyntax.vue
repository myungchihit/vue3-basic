<template>
	<div>
		<h2>보간법</h2>
		<p>{{ message }}</p>
		<p v-once>Once : {{ message }}</p>
		<button v-on:click="message = message + '!'">click</button>
		<hr />

		<h2>Raw Html</h2>
		<p>{{ rawHtml }}</p>
		<p v-html="rawHtml"></p>
		<hr />

		<h2>속성 바인딩 (v-bind)</h2>
		<p v-bind:title="dynamicTitle">Title 확인을 위해 마우스롤 올려 보세요!</p>
		<p :title="dynamicTitle">Title v-bind 단축 표현</p>
		<span>Title 변경 : </span>
		<input
			type="text"
			v-on:change="changeDynamicTitle"
			v-bind:disabled="isInputDisabled"
		/>
		<br />
		<label for="checkFlag">input disabled flag : </label>
		<input id="checkFlag" type="checkbox" v-model="isInputDisabled" />
		<br /><br />
		<span>여러 attr 반영 Input : </span>
		<input v-bind="attrs" />

		<hr />
		<h2>JavaScript 표현식</h2>
		{{ message.split('').reverse().join('') }} <br />
		{{ isInputDisabled ? '예' : '아니요' }}
		{{ testJSExpression() }}
		<p>{{ jsExpressionStr }}</p>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const message = ref('Hello Vue');
		const rawHtml = ref('<strong>String tag</strong>');
		const dynamicTitle = ref('Dynamic Title');
		const isInputDisabled = ref(false);
		const changeDynamicTitle = e => {
			console.log(e.currentTarget.value);
			dynamicTitle.value = e.currentTarget.value;
		};

		const attrs = ref({
			type: 'text',
			value: '12345678',
			disabled: true,
		});

		const jsExpressionStr = ref('');
		const testJSExpression = () => {
			jsExpressionStr.value = '표현식을 이용한 함수 호출!';
		};

		return {
			message,
			rawHtml,
			dynamicTitle,
			isInputDisabled,
			changeDynamicTitle,
			attrs,
			jsExpressionStr,
			testJSExpression,
		};
	},
};
</script>

<style lang="scss" scoped></style>
