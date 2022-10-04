<template>
	<div class="card">
		<div class="card-body">Lifecycle child</div>
		<input type="text" id="input" />
	</div>
</template>

<script>
import { onBeforeMount, onBeforeUnmount, onMounted, onUnmounted } from 'vue';

export default {
	setup() {
		//console.log('[Child] setup');

		onBeforeMount(() => {
			console.log('[Child] onBeforeMount');
		});

		onMounted(() => {
			console.log('[Child] onMounted');
		});

		onBeforeUnmount(() => {
			console.log('[Child] onBeforeUnmounted');
			console.log(document.querySelector('#input'));
		});

		onUnmounted(() => {
			console.log('[Child] onUnmounted');
			console.log(document.querySelector('#input'));
		});
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
