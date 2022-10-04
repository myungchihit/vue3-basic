<template>
	<div class="container py-4">
		<input type="text" ref="inputRef" value="hello world" />
		<hr />
		<button @click="visible = !visible">Toggle Child</button>
		<LifecycleChild v-if="visible"></LifecycleChild>
		<p id="message">{{ message }}</p>
	</div>
</template>

<script>
import LifecycleChild from './LifecycleChild.vue';
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue';

export default {
	components: {
		LifecycleChild,
	},
	setup() {
		// Composition API에서는 created 사이클함수를 setup에서 처리
		//console.log('setup');

		const visible = ref(false);
		const message = ref('');
		const inputRef = ref(null);
		// onBeforeMount(() => {
		// 	console.log('onBeforeMount', inputRef.value);
		// });

		// onMounted(() => {
		// 	console.log('onMounted', inputRef.value.value);
		// });

		// onBeforeUpdate(() => {
		// 	console.log('onBeforeUpdate', message.value);
		// 	console.log(
		// 		'DOM Content: ',
		// 		document.querySelector('#message').textContent,
		// 	);
		// });

		// onUpdated(() => {
		// 	console.log('onUpdated', message.value);
		// 	console.log(
		// 		'DOM Content: ',
		// 		document.querySelector('#message').textContent,
		// 	);
		// });

		return {
			inputRef,
			message,
			visible,
		};
	},
};
</script>

<style lang="scss" scoped></style>
