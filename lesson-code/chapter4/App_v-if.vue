<template>
	<div>
		<h2 v-if="visible">Hello Vue3!</h2>
		<h2 v-else>false!</h2>
		<button v-on:click="visible = !visible">toggle</button>

		<hr />
		<button v-on:click="type = 'A'">A</button>
		<button v-on:click="type = 'B'">B</button>
		<button v-on:click="type = 'C'">C</button>
		<button v-on:click="type = 'D'">D</button>

		<h2 v-if="type === 'A'">A 입니다.</h2>
		<h2 v-else-if="type === 'B'">B 입니다.</h2>
		<h2 v-else-if="type === 'C'">C 입니다.</h2>
		<h2 v-else>A,B,C가 아닙니다.</h2>

		<hr />
		<template v-if="visible">
			<h1>Title</h1>
			<p>Paragraph 1</p>
			<p>Paragraph 2</p>
		</template>

		<hr />
		<!-- v-if는 초기 렌더링이 아예 안되어 있다. -->
		<!-- v-show는 랜더링이 되어 있다 다만, display : none 처리만 변경됨. -->
		<!-- 전환비용이 높다./ 초기렌더링 비용이 높다. -->
		<h1 v-show="ok">V-show Title!</h1>
		<button v-on:click="ok = !ok">show toggle</button>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const visible = ref(true);
		const type = ref('A');
		const ok = ref(true);

		return { visible, type, ok };
	},
};
</script>

<style lang="scss" scoped></style>
