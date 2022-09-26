<template>
	<TheNav></TheNav>
	<TheView></TheView>
	<!-- 전역등록된 AppCard -->
	<AppCard></AppCard>
</template>

<script>
import TheNav from './components/TheNav.vue';
import TheView from './components/TheView.vue';

export default {
	components: {
		// TheNav: TheNav,
		TheNav,
		TheView,
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
