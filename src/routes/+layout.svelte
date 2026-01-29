<script lang="ts">
    // import type { LayoutData } from './$types';
    import '../styles.css'
    
    // export let data: LayoutData;
	let isLoading = false;

</script>

<div class="app">
	{#if isLoading}
		<div
			class="loader loader--black"
			style="margin: auto; width: 30px; height: 30px;"
		></div>
	{:else}
		<slot />
	{/if}
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		min-height: -webkit-fill-available;
	}
</style>
