<template>
	<main>
		<div class="container py-4">
			<!-- <PostCreate v-on:create-post="createPost"></PostCreate> -->
			<!-- 이벤트 발생/수신 , 이벤트 파라미터, 이벤트 선언 예제 -->
			<PostCreate @create-post="createPost"></PostCreate>

			<hr class="my-4" />

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
						v-bind:title="post.title"
						v-bind:contents="post.contents"
						v-bind:type="post.type"
						v-bind:is-like="post.isLike"
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

				<hr class="my-4" />

				<!-- v-model 만들기 예제 -->
				<!-- <LabelInput
					:model-value="username"
					@update:model-value="value => (username = value)"
					label="이름"
				></LabelInput> -->
				<LabelInput
					v-model="username"
					label="v-model modelValue 사용: "
				></LabelInput>
				<LabelTitle
					v-model:title="username"
					label="v-model 전달인자 : "
				></LabelTitle>
				<br />
				{{ username }}
				<br />

				<!-- 다중 v-model 바인딩 예제 -->
				<UserName
					v-model:firstname="firstname"
					v-model:lastname="lastname"
				></UserName>

				<!-- Non-Prop 속성 예제 -->
				<LabelInput
					v-model="username"
					label="NonProps 예제용"
					id="parent-id"
					class="parent-class"
					style="color: red"
				></LabelInput>
			</div>
		</div>
	</main>
</template>

<script>
import { reactive, ref } from 'vue';
import AppCard from './AppCard.vue';
import PostCreate from './PostCreate.vue';
import LabelInput from './LabelInput.vue';
import LabelTitle from './LabelTitle.vue';
import UserName from './UserName.vue';

export default {
	components: {
		AppCard,
		PostCreate,
		LabelInput,
		LabelTitle,
		UserName,
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

		const createPost = newPost => {
			console.log('createPost');
			console.log('newPost : ', newPost);
			posts.push(newPost);
		};

		// v-model 만들기
		const username = ref('');
		const firstname = ref('');
		const lastname = ref('');
		return {
			post,
			posts,
			createPost,
			username,
			firstname,
			lastname,
		};
	},
};
</script>

<style lang="scss" scoped></style>
