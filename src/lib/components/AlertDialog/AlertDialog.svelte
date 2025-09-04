<script lang="ts">
	import { AlertDialog } from 'bits-ui';
	export let open!: boolean;
	export let title = 'Confirm';
	export let description = '';
</script>

<AlertDialog.Root bind:open>
	<AlertDialog.Trigger class="hidden">Open</AlertDialog.Trigger>
	<AlertDialog.Portal>
		<AlertDialog.Overlay class="fixed inset-0 bg-black/50" />
		<AlertDialog.Content
			class="fixed top-1/2 left-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-lg"
		>
			<AlertDialog.Title class="block font-semibold text-[#621132]">{title}</AlertDialog.Title>
			<AlertDialog.Description class="text-black">{description}</AlertDialog.Description>
			<div class="mt-4 flex justify-end space-x-2">
				<AlertDialog.Cancel
					class="w-full rounded bg-[#621132] px-6 py-2 text-white shadow hover:bg-[#4e0f28] sm:w-auto"
					>NO</AlertDialog.Cancel
				>
				<AlertDialog.Action
					class="w-full rounded bg-[#621132] px-6 py-2 text-white shadow hover:bg-[#4e0f28] sm:w-auto"
					>SI</AlertDialog.Action
				>
			</div>
		</AlertDialog.Content>
	</AlertDialog.Portal>
</AlertDialog.Root>
