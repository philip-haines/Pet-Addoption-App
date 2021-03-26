<template>
	<div class="animals">
		<ul class="animal-list">
			<li v-for="animal in animals" :key="animal.id" class="animal-card">
				<div class="animal-name">{{ animal.name }}</div>
				<div class="animal-attribute-wrapper">
					<div class="animal-attribute">{{ animal.age }}</div>
					<div class="animal-attribute">{{ animal.size }}</div>
					<div class="animal-attribute">{{ animal.gender }}</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
const bearer =
	"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJLNFVCYmFJYVUzYWV3anJycFRDMHVHTFd0Vm1LWHA5WDF1S1lQTmJVMzU3ZW5iM3ZuQyIsImp0aSI6ImJiM2UzZjE2MTcxYmFjYTBmMjc1MTZiZGE1NDYxNmE4N2QxYjM2NTNiMjIyMmIzNmRmMjczN2MxM2U1NjEyZGJmYzIzNzZkZTg1ZGQ5YmU3IiwiaWF0IjoxNjE2Nzc0NDEyLCJuYmYiOjE2MTY3NzQ0MTIsImV4cCI6MTYxNjc3ODAxMiwic3ViIjoiIiwic2NvcGVzIjpbXX0.nnqw83EUBLn5fSPqOtK_hoSOp73Xa7qaVdg3PvW-GKFgI6iHSa0_fF5kakmGA-D2RRI4WkvYaazHd-YmdVqnNWwEHhl14YJq2YW__mdmzD70XIK3RuU96Q0PK5H648-RljVsAcXEg34I1iqPaJLXhojC0x7x5pcgOnEYttJzsBxw-EKjNKbfWA3STaZNFyOs8uRp340tivpWfwFZUPfKriQ_XaLo8kNAISbMrw9QHjobtZsUkzQkGKF11hrcudM5uSMGrRVo6llGGQv22HoIJp158uG0NGBl3kvCwLdv9UelNBgogFnyd2QWZWMmhAunqATjLTL0nBdRJ9SZcctXkg";
export default {
	data() {
		return {
			animals: [],
		};
	},
	created() {
		fetch(
			"https://api.petfinder.com/v2/animals?type=dog&page=2&location=80206&distance=10&status=adoptable&limit=10",
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: bearer,
				},
			}
		)
			.then((response) => response.json())
			.then((data) => {
				console.log(data.animals[0]);
				this.animals = data.animals;
			});
	},
};
</script>

<style scoped>
.animals {
	display: flex;
	flex-direction: column;
	max-width: 400px;
	height: 100%;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
}

.animal-list {
	max-width: 375px;
	height: 65vh;
	display: flex;
	flex-wrap: wrap;
	list-style: none;
	overflow: auto;
	justify-content: center;
	align-items: center;
	padding-left: 0;
}

.animal-card {
	display: flex;
	flex-direction: column;
	width: 15rem;
	height: auto;
	margin-top: 2rem;
	align-self: center;
	justify-content: center;
	align-items: center;
	padding: 2.5rem;
	border: 1px solid black;
}

.animal-attribute-wrapper {
	display: flex;
	padding-top: 3rem;
}

.animal-attribute {
	display: flex;
	margin: 0 0.5rem;
	border: 1px solid #4f4f4f;
	padding: 0.5rem;
	border-radius: 3rem;
	height: 0.75rem;
	width: 3rem;
	justify-content: center;
	align-items: center;
}
</style>
