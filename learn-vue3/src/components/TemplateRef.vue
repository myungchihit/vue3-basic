<template>
	<div class="container py-4">
		<input type="text" ref="input" />
		<p>{{ input }}</p>
		<!-- input onMounted이전까지는 null이기 때문에 if문으로 null체크 -->
		<p v-if="input">
			{{ input.value }}, {{ $refs.input.value }},
			{{ input.value === $refs.input.value }}
		</p>
		<ul>
			<!-- 문자열 ref배열 할당
			<li v-for="fruit in fruits" :key="fruit" ref="itemRefs">
				{{ fruit }}
			</li> -->

			<!-- 함수로 ref배열 할당-->
			<li
				v-for="fruit in fruits"
				:key="fruit"
				:ref="el => itemRefs.push(el.textContent)"
			>
				{{ fruit }}
			</li>
		</ul>
		<hr />
		<!-- 자식 컴포넌트도 ref로 접근할 수 있지만 부모와 자식간에 의존도가 생겨 추천안함 -->
		<TemplateRefChild ref="child"></TemplateRefChild>
	</div>
</template>

<script>
import TemplateRefChild from './TemplateRefChild.vue';
import { onMounted, ref } from 'vue';

export default {
	components: {
		TemplateRefChild,
	},
	setup() {
		// dom에 ref와 같은 이름을 ref로 참조받으면 element요소가 접근
		const input = ref(null);

		// mount 이후부터 ref에 접근할 수 있다.
		console.log('setup: ', input.value);
		onMounted(() => {
			input.value.value = 'Hello World!';
			console.log('onMounted: ', input.value);

			//itemRefs.value.forEach(item => console.log('item: ', item.textContent));
			itemRefs.value.forEach(item => console.log('item: ', item));

			console.log('child.message', child.value.message);
			child.value.sayHello();
		});

		const fruits = ref(['사과', '딸기', '포도']);
		// for문에서 ref
		const itemRefs = ref([]);

		const child = ref(null);

		return {
			input,
			fruits,
			itemRefs,
			child,
		};
	},
};
</script>

<style lang="scss" scoped></style>
