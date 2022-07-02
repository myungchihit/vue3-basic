<template>
	<div>
		<h2>반응형 메시지</h2>
		<p>{{ reactiveMessage }}</p>
		<button v-on:click="addReactiveMessage">Add Message</button>
		<h2>일반 메시지</h2>
		<p>{{ normalMessage }}</p>
		<button v-on:click="addNormalMessage">Add Normal</button>
	</div>
</template>

<script>
import { onBeforeMount, onMounted, ref } from 'vue';
export default {
	setup() {
		console.log('setup');
		
		const reactiveMessage = ref('Hello Reactive Message');
		const addReactiveMessage = () => {
			reactiveMessage.value = reactiveMessage.value + '!';
		};

		// isRef : 반응형 데이터인지 체크
		//console.log('isRef(reactiveMessage) : ', isRef(reactiveMessage));

		let normalMessage = 'Hello Normal Message';
		const addNormalMessage = () => {
			normalMessage = normalMessage + '!';
		};

		//console.log('isRef(normalMessage) : ', isRef(normalMessage));

		onMounted(() => {
			console.log('onMounted');
		});

		onBeforeMount(() => {
			console.log('onBeforeMount');
		});

		return {
			reactiveMessage,
			normalMessage,
			addReactiveMessage,
			addNormalMessage,
		};
	},
};

import { h, ref } from 'vue'


</script>

<style lang="scss" scoped></style>