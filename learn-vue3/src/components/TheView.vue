<template>
	<main>
		<div class="container py-4">
			<div class="row g-3">
				<div class="col col-4">
					<!-- PascalCase(권장) -->
					<AppCard
						title="string title"
						contents="string content"
						type="notice"
						is-like="true"
					></AppCard>
					<!-- kebab-cased ==> 부모에서 props를 전달할때는 케밥 케이스를 쓰는것을 권장합니다.-->
					<!-- <app-card></app-card> -->
				</div>
				<div class="col col-4">
					<AppCard
						:title="post.title"
						:contents="post.contents"
						:type="post.type"
						:is-like="post.isLike"
					></AppCard>
				</div>

				<div class="col col-4" v-for="post in posts" :key="post.id">
					<AppCard
						:title="post.title"
						:contents="post.contents"
						:type="post.type"
						:is-like="post.isLike"
						@toggle-like="post.isLike = !post.isLike"
					></AppCard>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import { reactive } from 'vue';
import AppCard from './AppCard.vue';

export default {
	components: {
		AppCard,
	},
	setup() {
		const post = reactive({
			title: 'object title',
			contents: 'object contents',
			isLike: false,
			type: 'news',
		});

		const posts = reactive([
			{ id: 1, title: '제목1', contents: '내용 1', isLike: true, type: 'news' },
			{ id: 2, title: '제목2', contents: '내용 2', isLike: true, type: 'news' },
			{
				id: 3,
				title: '제목3',
				contents: '내용 3',
				isLike: false,
				type: 'notice',
			},
			{
				id: 4,
				title: '제목4',
				contents: '내용 4',
				isLike: false,
				type: 'notice',
			},
		]);

		return {
			post,
			posts,
		};
	},
};
</script>

<style lang="scss" scoped></style>
