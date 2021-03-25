<template>
	<div class="animals">
		<h2>Animals</h2>
		<ul>
			<li v-for="animal in animals" :key="animal.id" class="animal-card">
				{{ animal.name }} - {{ animal.age }}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			animals: [
				{
					id: 1,
					name: "Frank",
					age: 12,
				},
				{
					id: 2,
					name: "Fred",
					age: 9,
				},
				{
					id: 3,
					name: "Ed",
					age: 13,
				},
			],
		};
	},
};
</script>
