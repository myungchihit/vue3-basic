<template>
	<div class="container py-4">
		<div class="card">
			<div class="card-header">ProvideInject Component</div>
			<div class="card-body">
				<ProvideChilde></ProvideChilde>
			</div>
		</div>
	</div>
</template>

<script>
import { provide, ref } from 'vue';
import ProvideChilde from './ProvideChilde.vue';
export default {
	components: {
		ProvideChilde,
	},
	setup() {
		const staticMessage = 'static message';
		const message = ref('message');
		const count = ref(10);
		provide('static-message', staticMessage);
		provide('message', message);
		provide('count', count);

		return {};
	},
};
</script>

<style lang="scss" scoped></style>
