<template>
	<div>
		<ul>
			<!-- v-if랑 v-for을 같이쓰면 안되기 때문에 template으로 빼준다. -->
			<!-- <template v-for="(item, index) in items" :key="item.id"></template> -->
			<template v-for="(item, index) in eventItems" :key="item.id">
				<!-- <li v-if="item.id % 2 === 0"> -->
				<li>ID: {{ item.id }} 인덱스: {{ index }} , {{ item.message }}</li>
			</template>
		</ul>
		<hr />
		<ul>
			<li v-for="(value, key, index) in myObject" :key="key">
				{{ index }} - {{ key }} - {{ value }}
			</li>
		</ul>
	</div>
</template>

<script>
import { computed } from 'vue';
import { reactive } from 'vue';

export default {
	setup() {
		const items = reactive([
			{ id: 1, message: 'Java' },
			{ id: 2, message: 'JavaScript' },
			{ id: 3, message: 'Html' },
			{ id: 4, message: 'CSS' },
			{ id: 5, message: 'Vue' },
		]);

		const eventItems = computed(() => items.filter(item => item.id % 2 === 0));

		const myObject = reactive({
			title: '제목',
			author: '홍길동',
			publishedAt: '2016-01-01',
		});

		return { items, eventItems, myObject };
	},
};
</script>

<style lang="scss" scoped></style>
