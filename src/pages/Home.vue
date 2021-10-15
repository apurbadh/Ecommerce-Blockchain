<script lang="ts">
	import Product from "../components/Product.vue"	

	export default {
		data(){
			return {
				products : [{name : "test"}, {name : "data"}]
			}
		}
	}
</script>
<template>
	<h1>This is home page</h1>
	<div v-for="product in products">
		<Product :name="product.name"/>
	</div>	
</template>