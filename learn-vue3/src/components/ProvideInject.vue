<template>
	<div class="container py-4">
		<div class="card">
			<div class="card-header">ProvideInject Component</div>
			<div class="card-body">
				<button @click="count++">Click</button>
				<p>appMessage: {{ appMessage }}</p>
				<ProvideChilde></ProvideChilde>
			</div>
		</div>
	</div>
</template>

<script>
import { inject, provide, ref } from 'vue';
import ProvideChilde from './ProvideChilde.vue';
export default {
	components: {
		ProvideChilde,
	},
	setup() {
		const staticMessage = 'static message';
		const message = ref('message');
		const updateMessage = appendMessage => {
			message.value = message.value + appendMessage;
		};
		const count = ref(10);
		provide('static-message', staticMessage);
		provide('message', { message, updateMessage });
		provide('count', count);

		const appMessage = inject('app-message');

		return {
			count,
			appMessage,
		};
	},
};
</script>

<style lang="scss" scoped></style>
