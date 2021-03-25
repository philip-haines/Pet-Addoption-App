<template>
	<div class="animals">
		<h2>Animals</h2>
		<ul class="animal-list">
			<div v-for="animal in animals" :key="animal.id" class="animal-card">
				<div class="animal-name">{{ animal.name }}</div>
				<div class="animal-attribute-wrapper">
					<div class="animal-attribute">{{ animal.age }}</div>
					<div class="animal-attribute">{{ animal.size }}</div>
					<div class="animal-attribute">{{ animal.gender }}</div>
				</div>
			</div>
		</ul>
	</div>
</template>

<script>
const bearer =
	"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJLNFVCYmFJYVUzYWV3anJycFRDMHVHTFd0Vm1LWHA5WDF1S1lQTmJVMzU3ZW5iM3ZuQyIsImp0aSI6ImFiMDM4ZDE0ZWY1NWNlYmMwYTQzMWFiZTNmZWM4M2NjNzE4NzdmMTE4NWM1YTFkMTdhOTQyYTAzMDU3OTU3OTgyMjc0NzdlNzQ0OWYwMzBiIiwiaWF0IjoxNjE2NzEyOTAzLCJuYmYiOjE2MTY3MTI5MDMsImV4cCI6MTYxNjcxNjUwMywic3ViIjoiIiwic2NvcGVzIjpbXX0.nusyk_WfPpDurNaKl-6XiTYo2-Ft9SCmQ66-jKj7pciwy7CkyxHXB6T17ZLY9KsmD_TZ9sD8rABJm3X0vXWI6Swa71-T1ASUVG5bWLdmX-n1F-hSHnhD9M4P74U7GqZVYU9boD1suqcfOgwiTCtrsRiXD4_aMS7bZ0MwPPy2jkTB3olzzTiSqLp43mYse8aQRoALlh_zvyP0fV1fRqzwBIL6e9EA3ysJH19v_ZC_xMyiMn0yJqxjq4lFiv3dqbuBGbO3GxnTl3_pt6wzKONk7sjEfBoLUO0Mef3qiy0hriTq4YmrErkv-IZa6k8PkZqb3jBmTcyH0v8-KMA8dQjAww";
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
	max-width: 400px;
}
.animal-list {
	display: flex;
	flex-wrap: wrap;
	list-style: none;
	height: 55vh;
	width: auto;
	overflow: auto;
	justify-content: center;
	align-items: center;
}

.animal-card {
	display: flex;
	flex-direction: column;
	margin: 3rem auto;
	width: 15rem;
	height: auto;
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
