<template>
	<div>
		<h2>input value</h2>
		<!-- <input
			type="text"
			:value="inputValue"
			@input="e => (inputValue = e.target.value)"
		/> -->
		<input type="text" v-model="inputValue" />
		<br />
		{{ inputValue }}
		<br />
		input lazy : <input type="text" v-model.lazy="inputValue" />
		<br />
		input number : <input type="text" v-model.number="inputValue" />
		{{ typeof inputValue }}
		<br />
		input trim : <input type="text" v-model.trim="inputValue" />

		<h2>textarea value</h2>
		<!-- <textarea
			:value="textareaValue"
			@input="e => (textareaValue = e.target.value)"
		></textarea>-->
		<textarea v-model="textareaValue"></textarea>
		{{ textareaValue }}

		<h2>checkbox value</h2>
		<label for="checkbox">{{ checkboxValue }}</label>
		<!-- <input
			id="checkbox"
			type="checkbox"
			:checked="checkboxValue"
			@change="e => (checkboxValue = e.target.checked)"
		/> -->
		<input id="checkbox" type="checkbox" v-model="checkboxValue" />
		<br />
		<label for="checkboxyn">{{ checkboxYN }}</label>
		<input
			id="checkboxyn"
			type="checkbox"
			v-model="checkboxYN"
			true-value="YES"
			false-value="NO"
		/>

		<h2>checkbox values</h2>
		<label>
			<input type="checkbox" value="html" v-model="checkboxValues" />
			HTML
		</label>
		<label>
			<input type="checkbox" value="css" v-model="checkboxValues" />
			CSS
		</label>
		<label>
			<input type="checkbox" value="js" v-model="checkboxValues" />
			JavaScript
		</label>
		<div>{{ checkboxValues }}</div>

		<h2>radio value</h2>
		<label>
			<!-- <input
				type="radio"
				name="type"
				value="O"
				:checked="radioValue === 'O'"
				@change="e => (radioValue = e.target.value)"
			/> -->
			<input type="radio" name="type" value="O" v-model="radioValue" />
			O형
		</label>
		<label>
			<!-- <input
				type="radio"
				name="type"
				value="A"
				:checked="radioValue === 'A'"
				@change="e => (radioValue = e.target.value)"
			/> -->
			<input type="radio" name="type" value="A" v-model="radioValue" />
			A형
		</label>
		<div>{{ radioValue }}</div>

		<h2>select value</h2>
		<!-- <select
			v-model="selectValue"
			:value="selectValue"
			@change="e => (selectValue = e.target.value)"
		> -->
		<select v-model="selectValue">
			<option value="html">HTML 수업</option>
			<option value="css">CSS 수업</option>
			<option value="javascript">JavaScript 수업</option>
		</select>
		<div>{{ selectValue }}</div>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const inputValue = ref('');
		const textareaValue = ref('');
		const checkboxValue = ref(true);
		const checkboxYN = ref('NO');
		const checkboxValues = ref([]);
		const radioValue = ref('O');
		const selectValue = ref('html');

		return {
			inputValue,
			textareaValue,
			checkboxValue,
			checkboxYN,
			checkboxValues,
			radioValue,
			selectValue,
		};
	},
};
</script>

<style lang="scss" scoped></style>
