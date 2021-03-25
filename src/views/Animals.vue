<template>
	<div class="animals">
		<h2>Animals</h2>
		<ul>
			<li v-for="animal in animals" :key="animal.id" class="animal-card">
				<div class="animal-attribute">{{ animal.name }}</div>
				<div class="animal-attribute">{{ animal.age }}</div>
				<div class="animal-attribute">{{ animal.size }}</div>
				<div class="animal-attribute">{{ animal.gender }}</div>
			</li>
		</ul>
	</div>
</template>

<script>
const bearer =
	"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJLNFVCYmFJYVUzYWV3anJycFRDMHVHTFd0Vm1LWHA5WDF1S1lQTmJVMzU3ZW5iM3ZuQyIsImp0aSI6IjIwMjc4MmQ4MWZiOTdlYzljZjUwZjE2NmQyMTcwNzU5MWE3ZmJhNjlkOTUwMTRkMjc5NjliMDM4YTI4MGM1MmYxZDkyOGRiZGFiMWI5ZTkyIiwiaWF0IjoxNjE2Njk2ODE3LCJuYmYiOjE2MTY2OTY4MTcsImV4cCI6MTYxNjcwMDQxNywic3ViIjoiIiwic2NvcGVzIjpbXX0.VMahLUzKStlAwzEzfrJt873kcVpNztCVRVrCkPIJiHQ-qt81aYo0hfRnlvilJW02tg5y3L8YNMjqxApjiqNX6w7AFShmaA_2HCpTjfZnqK5px0m6H6zqKwwFTf8Wr48dSK_aOuSNPxw1lCqZscgcsIG9i9-y-SgrrxdnvflqlQzmjIgriNPHsMiUATxSpyhJzwzPS45vIpiKNTihENhxAxog8VrjSqb3aCdnMsx2a7sdqVZWc39PNip0jbAdSqdTwZjmRS2KhzvdjzIJY93SMyZVOco3ya19Gh_Xf9p8WSE34CqKF68mVu9L4Xom1lFCe9jjbQJlDelQTs8-eOY-Cg";
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
