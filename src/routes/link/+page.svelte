<script lang="ts">
	import { base } from '$app/paths'
	import { Center, Space, Button, Title, Divider } from '@svelteuidev/core'
	import { onMount } from 'svelte'
	var mounted: boolean = false
	onMount(() => (mounted = true))
</script>

{#if mounted}
	<Space h={30} />
	<Title align="center" color="steelblue">A link mögött</Title>
	<Space h={30} />
	<Divider />
	<Center>
		<Button variant="outline" color="cyan" href="{base}/">Vissza</Button>
	</Center>
{/if}
