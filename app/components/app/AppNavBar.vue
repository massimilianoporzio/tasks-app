<script setup lang="ts">
import { NuxtLink } from "#components";
</script>

<template>
	<nav class="container">
		<ul>
			<li><NuxtLink to="/"><strong>Tasks App</strong></NuxtLink></li>
		</ul>
		<ul>
			<NuxtLink :to="{ name: 'create' }">Create a Task</NuxtLink>
		</ul>
	</nav>
</template>
