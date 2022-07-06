<template>
	<div>
		<!-- template에서는 message를 제외한다. -->
		<p>{{ message }}</p>
		<button v-on:click="addMessage">add click</button>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		// reactive는 reference type의 반응형
		//let message = reactive('Hello Vue!');

		// ref는 primitive type의 반응형
		let message = ref('Hello Vue!');

		const addMessage = () => {
			message.value = message.value + '!';
		};

		return {
			message,
			addMessage,
		};
	},
};
</script>

<style lang="scss" scoped></style>
