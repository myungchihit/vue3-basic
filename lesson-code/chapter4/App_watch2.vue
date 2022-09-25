<template>
	<div></div>
</template>

<script>
import { reactive, ref, watch } from 'vue';

export default {
	setup() {
		const x = ref(0);
		const y = ref(0);

		const obj = reactive({ count: 0 });

		// watch getter
		// x, y의 합 결과값을 getter로 지정할 수 있음
		// watch(
		// 	() => x.value + y.value,
		// 	sum => {
		// 		console.log(`sum: ${sum}`);
		// 	},
		// );

		// watch 배열사용
		// watch([x, y], ([newX, newY]) => {
		// 	console.log(`${newX}  ${newY}`);
		// });

		// watch 객체사용
		// 특정 object의 속성을 watch하려면 getter형식으로 조회해야함.
		// watch(obj.count, (newValue, oldValue) => {   ===>  이런식으로 사용 X (obj.count는 타입이 number라 참조 안됨.)
		// watch(
		// 	() => obj.count,
		// 	(newValue, oldValue) => {
		// 		console.log(`${newValue} , ${oldValue}`);
		// 	},
		// );

		const person = reactive({
			name: '홍길동',
			age: 30,
			hobby: '운동',
			obj: {
				count: 0,
			},
		});

		// watch(person, newValue => {
		// 	console.log('newValue: ', newValue);
		// });

		// obj객체를 getter로 받고 obj안 카운트를 변경하여도 newValue는 찍히지 않는다.
		// obj객체를 통쨰로 바꾸어야 변경을 감지한다.
		watch(
			() => person.obj,
			newValue => {
				console.log('newValue: ', newValue);
			},
		);

		return {
			x,
			y,
			obj,
			person,
		};
	},
};
</script>

<style lang="scss" scoped></style>
