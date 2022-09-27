<template>
	<div>
		<main>
			<div class="container py-4">
				<MyButton @click="sayHello"></MyButton>
			</div>
		</main>
	</div>
</template>

<script>
import MyButton from './MyButton.vue';
export default {
	components: {
		MyButton,
	},
	setup() {
		const sayHello = () => {
			alert('ㅇㅇㅇ');
		};
		return {
			sayHello,
		};
	},
};
</script>

<style lang="scss" scoped></style>
