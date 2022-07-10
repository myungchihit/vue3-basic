<template>
	<div>
		<!-- keyup.enter: enter가 입력되었을 경우 -->
		<!-- keyup.ctrl.enter : ctrl + enter를 입력해야 이벤트 실행 -->
		<!-- alt등 다양하게 있음 -->
		<input type="text" @keyup.ctrl.enter="addTodo" />
		<ul>
			<li v-for="(todo, index) in todos" :key="index">
				{{ todo }}
			</li>
		</ul>
	</div>
</template>

<script>
import { reactive } from 'vue';
export default {
	setup() {
		const todos = reactive([]);

		const addTodo = event => {
			todos.push(event.target.value);
			event.target.value = '';
			event.target.focus();
		};
		return { todos, addTodo };
	},
};
</script>

<style lang="scss" scoped></style>
