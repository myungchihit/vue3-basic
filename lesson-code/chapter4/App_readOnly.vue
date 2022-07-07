<template>
	<div></div>
</template>

<script>
import { reactive, readonly } from 'vue';

export default {
	setup() {
		const original = reactive({
			count: 0,
		});
		const copy = readonly(original);
		copy.count++; // 경고표시남
		original.count++;

		console.log(original.count);
		console.log(copy.count);

		return {};
	},
};
</script>

<style lang="scss" scoped></style>
