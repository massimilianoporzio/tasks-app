<script setup lang="ts">
import AppNavBar from "~/components/app/AppNavBar.vue";
</script>

<template>
	<div>
		<AppNavBar />
		<main class="container">
			<slot />
		</main>
	</div>
</template>
