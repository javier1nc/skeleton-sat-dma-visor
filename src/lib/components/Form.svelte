<script lang="ts">
	import { PUBLIC_BASE_PATH } from '$env/static/public';
	import { PUBLIC_APP_PATH } from '$env/static/public';
	const basePath = PUBLIC_BASE_PATH;
	const appPath = PUBLIC_APP_PATH;

	// Classes
	const cardClasses = 'card preset-outlined-surface-200-800 bg-red-100   p-5 space-y-5';

	// Seed Data
	const teamData = [
		{ name: 'Janet Rosenbell', email: 'jrosenbell@email.com' },
		{ name: 'Jason Greene', email: 'jgreene@email.com' },
		{ name: 'Lucas Gamble', email: 'lgamble@email.com' },
		{ name: 'Murray Henderson', email: 'mhenderson@email.com' }
	];
	const tableData = [
		{ position: '0', name: 'Iron', symbol: 'Fe', atomic_no: '26' },
		{ position: '1', name: 'Rhodium', symbol: 'Rh', atomic_no: '45' },
		{ position: '2', name: 'Iodine', symbol: 'I', atomic_no: '53' },
		{ position: '3', name: 'Radon', symbol: 'Rn', atomic_no: '86' },
		{ position: '4', name: 'Technetium', symbol: 'Tc', atomic_no: '43' }
	];
</script>

<div class="space-y-2">
	<!-- Grid -->
	<div class="grid-cols- grid gap-4">
		<!-- 1 -->
		<div class={`${cardClasses}`}>
			<header>
				<h3 class="h3 text-[#621132]">FORMA OFICIAL 100</h3>
				<p class="text-[#621132] opacity-60">Ingresa los campos solicitados.</p>
			</header>

			<article class="grid grid-cols-1 gap-5">
				<label class="label">
					<span class="label-text">Email</span>
					<input type="email" class="input" placeholder="me@example.com" />
				</label>

				<label class="label">
					<span class="label-text">Password</span>
					<input type="password" class="input" placeholder="me@example.com" />
				</label>
				<hr class="hr" />
			</article>
			<button class="btn w-full preset-filled-primary-500 text-white">Enviar</button>
		</div>
	</div>
</div>
