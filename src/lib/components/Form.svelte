<script lang="ts">
	import { PUBLIC_BASE_PATH } from '$env/static/public';
	import { PUBLIC_APP_PATH } from '$env/static/public';
	const basePath = PUBLIC_BASE_PATH;
	const appPath = PUBLIC_APP_PATH;

	// Classes
	const cardClasses = 'card preset-outlined-surface-200-800 bg-white p-5 space-y-5';

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
		<form class={`${cardClasses}`}>
			<header>
				<h3 class="h3 text-[#621132]">FORMA OFICIAL 100</h3>
				<h4 class="h6 text-[#621132] opacity-60">DATOS INFORMATIVOS</h4>
			</header>

			<article class="grid grid-cols-1 gap-5">
				<label class="block">
					<span class="block font-semibold text-[#621132]"
						>220608 - INSTITUCIÓN FINANCIERA EN LA QUE SE RETORNA LA INVERSIÓN</span
					>
					<!-- Institución Financiera -->
					<select class="select text-[#121132]">
						<option value="1">Institución Financiera 1</option>
						<option value="2">Institución Financiera 2</option>
						<option value="3">Institución Financiera 3</option>
						<option value="4">Institución Financiera 4</option>
						<option value="5">Institución Financiera 5</option>
					</select>
				</label>

				<label class="block">
					<span class="block font-semibold text-[#621132]"
						>220609 - NÚMERO DE CUENTA DE INVERSIÓN O DE CONTRATO</span
					>

					<input
						type="text"
						maxlength="14"
						pattern="[a-zA-Z0-9]+"
						class="input p-1 text-black"
						placeholder="ejemplo: 111100001111000011"
					/>
					<small class="text-sm text-gray-500"
						>Se deberá anotar el número de cuenta de inversión o de contrato de la institución
						financiera donde se retorna la inversión</small
					>
				</label>
				<hr class="hr" />
			</article>
			<button class="btn w-full preset-filled-primary-500 text-white">Enviar</button>
		</form>
	</div>
</div>
