<template>
	<div>
		<form action="" @submit.prevent="save(title, contents)">
			<input type="text" v-model.lazy="title" placeholder="title" /><br />
			<textarea v-model.lazy="contents" placeholder="contents"></textarea>
			<hr />
			<button>저장</button>
		</form>
	</div>
</template>

<script>
import { ref, watchEffect } from 'vue';

export default {
	setup() {
		const title = ref('');
		const contents = ref('');

		const save = (title, contents) => {
			console.log(`저장되었습니다. title: ${title}, contents: ${contents}`);
		};

		// 콜백함수 안에 있는 state를 모두 감시한다.
		// watchEffect는 최초로 실행이 한번 이루어진다. (immediate: true)
		watchEffect(() => {
			console.log('==== watchEffect =====');
			save(title.value, contents.value);
		});
		return {
			title,
			contents,
			save,
		};
	},
};
</script>

<style lang="scss" scoped></style>
