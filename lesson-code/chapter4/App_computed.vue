<template>
	<div>
		<h2>{{ test.name }}</h2>
		<h3>강의가 있슴?</h3>

		<p>{{ hasLecture }}</p>
		<p>{{ existLecture() }}</p>

		<button v-on:click="counter++">Counter: {{ counter }}</button>
		<hr />
		<h2>이름</h2>
		<p>{{ fullName }}</p>
	</div>
</template>

<script>
import { reactive, computed, ref } from 'vue';

export default {
	setup() {
		const test = reactive({
			name: 'test',
			letctures: ['HTML/CSS', 'JavaScript', 'Vue3'],
		});

		// computed를 쓰지않고 함수를 리턴해서 html에서 ()를 붙여 실행을 할 수는 있어도
		// computed가 효율이 훨씬 좋음.
		// computed는 cache에 저장을해놓고 거기서 계속 가져다 쓰지만 함수는 계속 실행됨.
		const hasLecture = computed(() => {
			console.log('computed');
			return test.letctures.length > 0 ? '있음' : '없음';
		});
		const existLecture = () => {
			console.log('method');
			return test.letctures.length > 0 ? '있음' : '없음';
		};

		const counter = ref(0);

		const firstName = ref('홍');
		const lastName = ref('길동');
		const fullName = computed({
			get() {
				return firstName.value + ' ' + lastName.value;
			},
			set(value) {
				[firstName.value, lastName.value] = value.split(' ');
			},
		});

		console.log('Console 출력: ', fullName.value);
		// computed 값을 변경시 이렇게 쓰면 안됨 --> getter, setter
		fullName.value = '변경 됨';

		return {
			test,
			hasLecture,
			existLecture,
			counter,
			fullName,
		};
	},
};
</script>

<style lang="scss" scoped></style>
