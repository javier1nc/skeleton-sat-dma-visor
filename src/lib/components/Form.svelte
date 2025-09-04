<script lang="ts">
	import { PUBLIC_BASE_PATH } from '$env/static/public';
	import { PUBLIC_APP_PATH } from '$env/static/public';

	import { TimerReset as Reset } from '@lucide/svelte';

	import AlertDialog from '$lib/components/AlertDialog/AlertDialog.svelte';

	let showAlert220610 = false;
	let Alert220610Answered = false;

	let showAlert220619 = false;
	let Alert220619Answered = false;

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

	function handleFocus220610() {
		console.log('handleFocus220610');

		if (!Alert220610Answered) {
			showAlert220610 = true;
			Alert220610Answered = true;
		} else {
			showAlert220610 = false;
			Alert220610Answered = false;
		}
	}

	function handleFocus220619() {
		console.log('handleFocus220619');

		if (!Alert220619Answered) {
			showAlert220610 = true;
			Alert220610Answered = true;
		} else {
			showAlert220619 = false;
			Alert220619Answered = false;
		}
	}
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
					<!-- 220608 - INSTITUCIÓN FINANCIERA EN LA QUE SE RETORNA LA INVERSIÓN -->
					<select class="select text-[#121132]">
						<option value="1">Institución Financiera 1</option>
						<option value="2">Institución Financiera 2</option>
						<option value="3">Institución Financiera 3</option>
						<option value="4">Institución Financiera 4</option>
						<option value="5">Institución Financiera 5</option>
					</select>
				</label>

				<!-- 220609 - NÚMERO DE CUENTA DE INVERSIÓN O DE CONTRATO -->
				<label class="block">
					<span class="block font-semibold text-[#621132]"
						>220609 - NÚMERO DE CUENTA DE INVERSIÓN O DE CONTRATO</span
					>

					<input
						type="text"
						maxlength="14"
						pattern="[a-zA-Z0-9]+"
						class="input p-1 text-black"
						placeholder="ejemplo: A1110000111100001Z"
					/>
					<small class="text-sm text-gray-500"
						>Se deberá anotar el número de cuenta de inversión o de contrato de la institución
						financiera donde se retorna la inversión</small
					>
				</label>

				<!-- 220610 - RECARGOS CAUSADOS A LA FECHA DEL RETORNO DE LA INVERSIÓN -->
				<label class="block">
					<span class="block font-semibold text-[#621132]"
						>220610 - RECARGOS CAUSADOS A LA FECHA DEL RETORNO DE LA INVERSIÓN</span
					>

					<div class="flex">
						<input
							type="text"
							maxlength="14"
							pattern="[0-9]+"
							class="input p-1 text-black"
							placeholder="ejemplo: 111100001111000011"
							on:focus={handleFocus220610}
						/>
					</div>

					<small class="text-sm text-gray-500"
						>Hacer uso de este beneficio implica que sus datos (nombre, denominación o razón social,
						clave del RFC y el monto de los recargos causados que no pagará) sean publicados en el
						Portal del SAT</small
					>
				</label>

				<!-- 220619 - RECARGOS CAUSADOS A LA FECHA DEL RETORNO DE LA INVERSIÓN -->
				<label class="block">
					<span class="block font-semibold text-[#621132]"
						>220619 - ACTUALIZACIÓN CAUSADA A LA FECHA DEL RETORNO DE LA INVERSIÓN</span
					>

					<div class="flex">
						<input
							type="text"
							maxlength="14"
							pattern="[0-9]+"
							class="input p-1 text-black"
							placeholder="ejemplo: 111100001111000011"
							on:focus={handleFocus220619}
						/>
					</div>

					<small class="text-sm text-gray-500"
						>Monto de la actualización causada a la fecha de retorno que no pagará por hacer uso del
						beneficio</small
					>
				</label>

				<hr class="hr" />
			</article>
			<button class="btn w-full preset-filled-primary-500 text-white">Enviar</button>
		</form>
	</div>
</div>

<AlertDialog
	bind:open={showAlert220610}
	title="220610 - RECARGOS CAUSADOS A LA FECHA DEL RETORNO DE LA INVERSIÓN"
	description="Hacer uso de este beneficio implica que sus datos (nombre, denominación o razón social, clave del RFC y el monto de los recargos causados que no pagará) sean publicados en el Portal del SAT.

Si no desea ser publicado, puede optar por hacer el pago de dichos accesorios.

¿Desea pagar los recargos?"
	on:action={() => {
		// logic here
	}}
	on:cancel={() => {
		// logic here
		showAlert220610 = false;
	}}
/>

<AlertDialog
	bind:open={showAlert220619}
	title="220619 - ACTUALIZACIÓN CAUSADA A LA FECHA DEL RETORNO DE LA INVERSIÓN"
	description="Hacer uso de este beneficio implica que sus datos (nombre, denominación o razón social, clave del RFC y el monto de la actualización causada que no pagará) sean publicados en el Portal del SAT.

Si no desea ser publicado, puede optar por hacer el pago.

¿Desea pagar la actualización?   SI   NO"
	on:action={() => {
		// logic here
	}}
	on:cancel={() => {
		// logic here
		showAlert220619 = false;
	}}
/>
