<template>
	<div class="card">
		<div class="card-header">Child Component</div>
		<div class="card-body">
			<ProvideDeepChild></ProvideDeepChild>
		</div>
	</div>
</template>

<script>
import ProvideDeepChild from './ProvideDeepChild.vue';
export default {
	components: {
		ProvideDeepChild,
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
