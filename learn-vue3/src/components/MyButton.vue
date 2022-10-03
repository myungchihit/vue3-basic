<template>
	<!-- div가 루트이기 때문에 div에 부모에서 정의한 클릭 이벤트가 발생됨-->
	<div class="p-3 bg-danger">
		<button type="button" class="btn btn-primary" v-bind="$attrs">
			My Button
		</button>
	</div>
</template>

<script>
export default {
	// 부모의 이벤트등의 상속 금지
	inheritAttrs: false,
	setup(props, context) {
		// console.log('context.attrs: ', context.attrs);
		// console.log('class: ', context.attrs.class);
		// console.log('id: ', context.attrs.id);
		// console.log('onClick: ', context.attrs.onClick);
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
