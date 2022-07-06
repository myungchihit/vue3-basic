<template>
	<div>
		<p>author : {{ autho }}</p>
		<p>author : {{ autho }}</p>
	</div>
</template>

<script>
import { reactive } from 'vue';

export default {
	setup() {
		const boox = reactive({
			author: 'Vue team',
			year: '2020',
			title: 'v3 Guide',
		});

		return {};
	},
};
</script>

<style lang="scss" scoped></style>
