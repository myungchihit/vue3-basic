<template>
	<div class="card">
		<div class="card-header" v-if="$slots.header">
			<slot name="header" header-message="헤더 메세지">#Header</slot>
		</div>
		<div class="card-body" v-if="$slots.default">
			<slot child-message="childMessage" hello-message="ㅎㅇ">#Body</slot>
		</div>
		<div class="card-footer text-muted" v-if="hasFooter">
			<slot name="footer" footer-message="푸터 메세지">#Footer</slot>
		</div>
	</div>
</template>

<script>
import { computed, ref } from 'vue';

export default {
	setup(props, { slots }) {
		const childMessage = ref('자식 컴포넌트 메시지');

		const hasFooter = computed(() => !!slots.footer);
		return {
			childMessage,
			hasFooter,
		};
	},
};
</script>

<style lang="scss" scoped></style>
