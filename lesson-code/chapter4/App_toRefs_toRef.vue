<template>
	<div>
		<p>author : {{ author }}</p>
		<p>year : {{ title }}</p>
		<p>des : {{ description }}</p>
	</div>
</template>

<script>
import { reactive, toRefs, toRef } from 'vue';

export default {
	setup() {
		const book = reactive({
			author: 'Vue team',
			year: '2020',
			title: 'v3 Guide',
			description: '다리 아프다.',
			price: '무료',
		});

		// 아래처럼 구조분해하여 할당했을 경우 반응성을 잃어버림.
		//const { author, title } =  book;

		// 여러개 받을경우 toRefs
		const { author, title } = toRefs(book);

		// 한개만 받을경우 toRef( 대상, '가져올 property')''
		const description = toRef(book, 'description');

		return {
			author,
			title,
			description,
			book,
		};
	},
};
</script>

<style lang="scss" scoped></style>
