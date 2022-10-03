<template>
	<div>
		<main>
			<div class="container py-4">
				<MyButton @click="sayHello"></MyButton>
				<LabelInput label="이름" data-id="id입니다."></LabelInput>
				<hr />
				<FancyButton>Click!! <span style="color: red">@@@</span></FancyButton>
				<FancyButton v-slot="{ fancyMessage }">{{ fancyMessage }}</FancyButton>
				<hr />
				<AppCard>
					<!-- <template v-slot:header>제목입니다.</template> -->
					<template #[slotArgs]="{ headerMessage }">
						{{ headerMessage }}
					</template>
					<!-- <template v-slot:default>내용입니다.</template> -->
					<!-- 암시적으로 Default 슬롯입니다! -->

					<!-- <template #default="obj"> -->
					<template #default="{ childMessage, helloMessage }">
						<!-- 구조분해 할당 가능-->
						{{
							//obj
							childMessage
						}}
						<br />
						{{ helloMessage }}
					</template>
					<template #footer="{ footerMessage }">{{ footerMessage }}</template>
				</AppCard>
				<hr />
				<AppCard>
					<template v-slot:default>내용입니다.</template>
				</AppCard>
			</div>
		</main>
	</div>
</template>

<script>
import MyButton from './MyButton.vue';
import LabelInput from './LabelInput.vue';
import FancyButton from './FancyButton.vue';
import AppCard from '@/components/AppCard.vue';
import { ref } from 'vue';

export default {
	components: {
		MyButton,
		LabelInput,
		FancyButton,
		AppCard,
	},
	setup() {
		const sayHello = () => {
			alert('ㅇㅇㅇ');
		};

		const slotArgs = ref('header');

		return {
			sayHello,
			slotArgs,
		};
	},
};
</script>

<style lang="scss" scoped></style>
