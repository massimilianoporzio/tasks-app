<script setup lang="ts">
import { NuxtLink } from "#components";
</script>

<template>
	<nav class="container">
		<ul>
			<li><strong>Tasks App</strong></li>
		</ul>
		<ul>
			<NuxtLink :to="{ name: 'create' }">Create a Task</NuxtLink>
		</ul>
	</nav>
</template>
