<template>
	<div>
		<div id="modifiers">
			<!-- capture: capturing mode로 실행(상위에서 하위로)-->
			<!-- <div @click.capture="clickDiv"> -->
			<div @click="clickDiv">
				DIV 영역
				<!-- self : 자기 자신을 클릭했을때만 실행함 (다른 전파 이벤트시 작동 X)-->
				<p @click.self="clickP">
					P영역
					<!-- click.stop => stopPropagation() : 이벤트전파 중단. -->
					<!-- <span @click.stop="clickSpan"> SPAN 영역</span> -->
					<span @click="clickSpan"> SPAN 영역</span>
					<!-- .prevent : preventDefault : 기존기능 막기-->
					<a
						href="https://naver.com"
						target="_blank"
						@click.prevent.stop="clickA"
						>a 영역</a
					>
				</p>
			</div>
		</div>
		<!-- once: 한번만 클릭되고 이벤트 발생 X -->
		<button @click.once="clickDiv">once</button>
	</div>
</template>

<script>
export default {
	setup() {
		const clickDiv = () => {
			console.log('clickDiv');
		};
		const clickP = () => {
			console.log('clickP');
		};
		const clickSpan = () => {
			console.log('clickSpan');
		};
		const clickA = () => {
			alert('아무 기능');
		};
		return { clickDiv, clickP, clickSpan, clickA };
	},
};
</script>

<style scoped>
#modifiers div,
#modifiers p,
#modifiers span {
	padding: 40px;
}

#modifiers div {
	background-color: #ccc;
}

#modifiers p {
	background-color: #999;
}

#modifiers span {
	background-color: #666;
	display: block;
}
</style>
