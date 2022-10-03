<template>
	<div class="card">
		<div class="card-body">
			<!-- type: news, notice-->
			<span class="badge bg-secondary">
				<!-- template에서도 props를 직접 가져올 수 있습니다.-->
				<!-- {{ $props }} -->

				<!-- {{ type === 'news' ? '뉴스' : '공지사항' }} -->
				{{ typeName }}
			</span>
			<h5 class="card-title mt-2">{{ title }}</h5>
			<p class="card-text">
				{{ contents }}
			</p>
			<a href="#" class="btn" :class="isLikeClass" @click="toggleLike"
				>좋아요</a
			>
			<br />
		</div>
	</div>
</template>

<script>
import { computed, ref, useCssModule } from 'vue';

export default {
	// props는 객체로 선언하는 것을 권장한다.
	// props: ['title', 'contents']
	props: {
		type: {
			type: String,
			default: 'news',
			validator: value => {
				// props 유효성 검사
				return ['news', 'notice'].includes(value);
			},
		},
		title: {
			type: String,
			required: true,
		},
		contents: {
			type: String,
			//required: true,
		},
		isLike: {
			type: Boolean,
			required: true,
		},
		obj: {
			// type을 Object로 사용하여 값을 사용한다면 리턴할때 함수로 getter 리턴
			type: Object,
			default: () => {},
		},
	},
	emits: ['toggleLike'], // 자식 컴포넌트에서 부모 컴포넌트로 이벤트 올리기
	setup(props, context) {
		//console.log(`props.title: `, props.title);
		const isLikeClass = computed(() =>
			props.isLike ? 'btn-danger' : 'btn-outline-danger',
		);

		const typeName = computed(() =>
			props.type === 'news' ? '뉴스' : '공지사항',
		);

		// 부모에 올릴 이벤트 선언
		const toggleLike = () => {
			context.emit('toggleLike');
		};

		return {
			isLikeClass,
			typeName,
			toggleLike,
		};
	},
};
</script>

<style></style>
