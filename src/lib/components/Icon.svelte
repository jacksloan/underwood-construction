<script lang="ts">
	let { name, class: className = '' }: { name: string; class?: string } = $props();
</script>

<span class="material-symbols-outlined {className}">{name}</span>
