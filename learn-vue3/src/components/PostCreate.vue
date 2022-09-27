<template>
	<div class="row g-3">
		<!-- <button
			class="btn btn-primary"
			@click="$emit('createPost', 1, 2, 3, 'param')"
		> -->
		<div class="col col-2">
			<select
				v-model="type"
				class="form-select"
				aria-label="Default select example"
			>
				<option value="news">뉴스</option>
				<option value="notice">공지사항</option>
			</select>
		</div>

		<div class="col col-8">
			<input type="text" class="form-control" v-model="title" />
		</div>

		<div class="col col-2 d-grid">
			<button class="btn btn-primary" @click="createPost">추가</button>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	// 부모에서 createPost 이벤트 발생 가능
	emits: {
		createPost: newPost => {
			if (!newPost.type) {
				return false;
			} else if (!newPost.title) {
				return false;
			}
			return true;
		},
	},
	// setup(props, context) {
	// context는 구조분해 할당 가능.
	setup(props, { emit }) {
		const type = ref('news');
		const title = ref('');
		const createPost = () => {
			//context.emit
			//context.emit('createPost', 1, 2, 3, 'param');
			//emit('createPost', 1, 2, 3, '구조분해 emit');

			const newPost = {
				type: type.value,
				title: title.value,
			};

			emit('createPost', newPost);
			// 초기화
			type.value = 'news';
			title.value = '';
		};

		return {
			type,
			createPost,
			title,
		};
	},
};
</script>

<style lang="scss" scoped></style>
