<script lang="ts">
	import { PUBLIC_BASE_PATH } from '$env/static/public';
	import { PUBLIC_APP_PATH } from '$env/static/public';

	import { TimerReset as Reset } from '@lucide/svelte';

	import AlertDialog from '$lib/components/AlertDialog/AlertDialog.svelte';

	let showAlert220610 = false;
	let Alert220610Answered = false;

	let showAlert220619 = false;
	let Alert220619Answered = false;

	let showAlertC8 = false;
	let AlertC8Answered = false;

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

	function handleFocusC8() {
		console.log('handleFocusC8');

		if (!AlertC8Answered) {
			showAlertC8 = true;
			AlertC8Answered = true;
		} else {
			showAlertC8 = false;
			AlertC8Answered = false;
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
			</header>

			<article class="grid grid-cols-1 gap-5">
				<header>
					<h4 class="h6 text-[#621132] opacity-60">DATOS INFORMATIVOS</h4>
				</header>
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
						required
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
							min="0"
							class="input p-1 text-black"
							placeholder="ejemplo: 111100001111000011"
							on:focus={handleFocus220610}
							required
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
							min="0"
							class="input p-1 text-black"
							placeholder="ejemplo: 111100001111000011"
							on:focus={handleFocus220619}
							required
						/>
					</div>

					<small class="text-sm text-gray-500"
						>Monto de la actualización causada a la fecha de retorno que no pagará por hacer uso del
						beneficio</small
					>
				</label>

				<header>
					<h4 class="h6 text-[#621132] opacity-60">DETERMINACIÓN DEL IMPUESTO SOBRE LA RENTA</h4>
				</header>

				<!-- 220612 - MONTO TOTAL DE LA INVERSIÓN QUE RETORNA -->
				<label class="block">
					<span class="block font-semibold text-[#621132]"
						>220612 - MONTO TOTAL DE LA INVERSIÓN QUE RETORNA</span
					>

					<input
						type="text"
						maxlength="14"
						pattern="[0-9]+"
						min="0"
						class="input p-1 text-black"
						placeholder="ejemplo: 111100001111000011"
						required
					/>
					<small class="text-sm text-gray-500"
						>Se deberá anotar el monto de la inversión en el extranjero más los ingresos que ésta
						haya generado al 31 de diciembre 2014</small
					>
				</label>

				<!-- 220613 - MONTO TOTAL DE LA INVERSIÓN QUE RETORNA -->
				<label class="block">
					<span class="block font-semibold text-[#621132]"
						>220613 - MONTO DE LA INVERSIÓN ORIGINAL QUE SE RETORNA
					</span>

					<input
						type="text"
						maxlength="14"
						pattern="[0-9]+"
						min="0"
						class="input p-1 text-black"
						placeholder="ejemplo: 111100001111000011"
						required
					/>
					<small class="text-sm text-gray-500"
						>Se deberá anotar el monto de la inversión original mantenida en el extranjero que
						retorna al país</small
					>
				</label>

				<!-- 220614 - MONTO DE LOS INGRESOS DERIVADOS DE INVERSIONES MANTENIDAS EN EL EXTRANJERO -->
				<label class="block">
					<span class="block font-semibold text-[#621132]"
						>220614 - MONTO DE LOS INGRESOS DERIVADOS DE INVERSIONES MANTENIDAS EN EL EXTRANJERO
					</span>

					<input
						type="text"
						maxlength="14"
						pattern="[0-9]+"
						min="0"
						class="input p-1 text-black"
						placeholder="ejemplo: 111100001111000011"
						required
					/>
					<small class="text-sm text-gray-500"
						>Se deberá anotar el monto de los ingresos derivados de las inversiones mantenidas en el
						extranjero</small
					>
				</label>

				<!-- 220615 - BASE GRAVABLE -->
				<label class="block">
					<span class="block font-semibold text-[#621132]">220615 - BASE GRAVABLE </span>

					<input
						type="text"
						maxlength="14"
						pattern="[0-9]+"
						min="0"
						class="input p-1 text-black"
						placeholder="ejemplo: 111100001111000011"
						required
					/>
					<small class="text-sm text-gray-500"
						>Se deberá anotar el monto de los ingresos derivados de las inversiones mantenidas en el
						extranjero</small
					>
				</label>

				<!-- 220616 - IMPUESTO DETERMINADO -->
				<label class="block">
					<span class="block font-semibold text-[#621132]">220616 - IMPUESTO DETERMINADO </span>

					<input
						type="text"
						maxlength="12"
						pattern="[0-9]+"
						min="0"
						class="input p-1 text-black"
						placeholder="ejemplo: 111100001111000011"
						required
					/>
					<small class="text-sm text-gray-500"
						>Se deberá anotar el monto de los ingresos derivados de las inversiones mantenidas en el
						extranjero</small
					>
				</label>

				<!-- 220617 - IMPUESTO ACREDITABLE PAGADO EN EL EXTRANJERO -->
				<label class="block">
					<span class="block font-semibold text-[#621132]"
						>220617 - IMPUESTO ACREDITABLE PAGADO EN EL EXTRANJERO
					</span>

					<input
						type="text"
						maxlength="12"
						pattern="[0-9]+"
						min="0"
						class="input p-1 text-black"
						placeholder="ejemplo: 111100001111000011"
						required
					/>
					<small class="text-sm text-gray-500"
						>Se deberá anotar el monto de los ingresos derivados de las inversiones mantenidas en el
						extranjero</small
					>
				</label>

				<!-- 220618 - IMPUESTO A CARGO -->
				<label class="block">
					<span class="block font-semibold text-[#621132]">220618 - IMPUESTO A CARGO </span>

					<input
						type="text"
						maxlength="12"
						pattern="[0-9]+"
						min="0"
						max="12"
						class="input p-1 text-black"
						placeholder="ejemplo: 111100001111000011"
						required
					/>
					<small class="text-sm text-gray-500"
						>Se deberá anotar el monto de los ingresos derivados de las inversiones mantenidas en el
						extranjero</small
					>
				</label>

				<header>
					<h6 class="h6 text-[#621132] opacity-60">DATOS DEL PAGO</h6>
					<p class="text-[#621132]">IMPUESTO SOBRE LA RENTA</p>
				</header>

				<!-- R100 - ISR POR INGRESOS DE INVERSIONES EN EL EXTRANJERO RETORNADAS AL PAÍS -->
				<label class="block">
					<span class="block font-semibold text-[#621132]"
						>R100 - ISR POR INGRESOS DE INVERSIONES EN EL EXTRANJERO RETORNADAS AL PAÍS
					</span>

					<input
						type="text"
						maxlength="12"
						pattern="[0-9]+"
						min="0"
						max="12"
						class="input p-1 text-black"
						placeholder="ejemplo: 111100001111000011"
						required
					/>
					<small class="text-sm text-gray-500"
						>Se deberá anotar el monto de los ingresos derivados de las inversiones mantenidas en el
						extranjero</small
					>
				</label>

				<!-- C7 - A CARGO  -->
				<label class="block">
					<span class="block font-semibold text-[#621132]">C7 - A CARGO </span>

					<input
						type="text"
						maxlength="12"
						pattern="[0-9]+"
						min="0"
						max="12"
						class="input p-1 text-black"
						placeholder="ejemplo: 111100001111000011"
					/>
					<small class="text-sm text-gray-500"
						>Se deberá anotar el monto de los ingresos derivados de las inversiones mantenidas en el
						extranjero</small
					>
				</label>

				<!-- C8 - PARTE ACTUALIZADA  -->
				<label class="block">
					<span class="block font-semibold text-[#621132]">C8 - PARTE ACTUALIZADA</span>

					<input
						type="text"
						maxlength="12"
						pattern="[0-9]+"
						min="0"
						max="12"
						class="input p-1 text-black"
						placeholder="ejemplo: _"
						on:focus={handleFocusC8}
					/>
					<small class="text-sm text-gray-500"
						>Monto de la actualización del impuesto causado a la fecha de retorno, y en su caso, la
						que se cause si el impuesto no se paga dentro de los 15 días siguientes a la fecha de
						retorno</small
					>
				</label>

				<!-- C9 - RECARGOS  -->
				<label class="block">
					<span class="block font-semibold text-[#621132]">C9 - RECARGOS</span>

					<input
						type="text"
						maxlength="12"
						pattern="[0-9]+"
						min="0"
						max="12"
						class="input p-1 text-black"
						placeholder="ejemplo: 111100001111000011"
						required
					/>
					<small class="text-sm text-gray-500"
						>Monto de los recargos causados a la fecha de retorno y en su caso, los que se causen si
						el impuesto no se paga dentro de los 15 días siguientes a la fecha de retorno</small
					>
				</label>

				<!-- C10 - MULTA POR CORRECCIÓN  -->
				<label class="block">
					<span class="block font-semibold text-[#621132]">C10 - MULTA POR CORRECCIÓN</span>

					<input
						type="text"
						maxlength="12"
						pattern="[0-9]+"
						min="0"
						max="12"
						class="input p-1 text-black"
						placeholder="ejemplo: 111100001111000011"
						required
					/>
					<small class="text-sm text-gray-500">_</small>
				</label>

				<!-- C11 - MULTA POR CORRECCIÓN  -->
				<label class="block">
					<span class="block font-semibold text-[#621132]">C11 - TOTAL DE CONTRIBUCIONES</span>

					<input
						type="text"
						maxlength="12"
						pattern="[0-9]+"
						min="0"
						max="12"
						class="input p-1 text-black"
						placeholder="ejemplo: _"
						required
					/>
					<small class="text-sm text-gray-500">_</small>
				</label>

				<!-- C12 - CRÉDITO AL SALARIO  -->
				<label class="block">
					<span class="block font-semibold text-[#621132]">C12 - CRÉDITO AL SALARIO</span>

					<input
						type="text"
						maxlength="12"
						pattern="[0-9]+"
						min="0"
						max="12"
						class="input p-1 text-black"
						placeholder="ejemplo: 111100001111000011"
						required
					/>
					<small class="text-sm text-gray-500"
						>EL MONTO DEL SALDO PENDIENTE DE ACREDITAR AL 31 DE DICIEMBRE DEL 2007 SE PODRÁ APLICAR
						HASTA AGOTARLO
					</small>
				</label>

				<!-- C12A - SUBSIDIO PARA EL EMPLEO  -->
				<label class="block">
					<span class="block font-semibold text-[#621132]">C12A - SUBSIDIO PARA EL EMPLEO</span>

					<input
						type="text"
						maxlength="12"
						pattern="[0-9]+"
						min="0"
						max="12"
						class="input p-1 text-black"
						placeholder="ejemplo: 111100001111000011"
						required
					/>
					<small class="text-sm text-gray-500">_ </small>
				</label>

				<!-- C13 - COMPENSACIONES  -->
				<label class="block">
					<span class="block font-semibold text-[#621132]">C13 - COMPENSACIONES</span>

					<input
						type="text"
						maxlength="12"
						pattern="[0-9]+"
						min="0"
						max="12"
						class="input p-1 text-black"
						placeholder="ejemplo: 111100001111000011"
						required
					/>
					<small class="text-sm text-gray-500">_ </small>
				</label>

				<!-- C14 - CRÉDITO IEPS DIESEL SECTOR PRIMARIO Y MINERO  -->
				<label class="block">
					<span class="block font-semibold text-[#621132]"
						>C14 - CRÉDITO IEPS DIESEL SECTOR PRIMARIO Y MINERO</span
					>

					<input
						type="text"
						maxlength="12"
						pattern="[0-9]+"
						min="0"
						max="12"
						class="input p-1 text-black"
						placeholder="ejemplo: 111100001111000011"
						required
					/>
					<small class="text-sm text-gray-500">_ </small>
				</label>

				<!-- C15 - DIESEL AUTOMOTRIZ PARA TRANSPORTE   -->
				<label class="block">
					<span class="block font-semibold text-[#621132]"
						>C15 - DIESEL AUTOMOTRIZ PARA TRANSPORTE
					</span>

					<input
						type="text"
						maxlength="12"
						pattern="[0-9]+"
						min="0"
						max="12"
						class="input p-1 text-black"
						placeholder="ejemplo: 111100001111000011"
						required
					/>
					<small class="text-sm text-gray-500">_ </small>
				</label>

				<!-- C16 - USO DE INFRAESTRUCTURA CARRETERA DE CUOTA -->
				<label class="block">
					<span class="block font-semibold text-[#621132]"
						>C16 - USO DE INFRAESTRUCTURA CARRETERA DE CUOTA
					</span>

					<input
						type="text"
						maxlength="12"
						pattern="[0-9]+"
						min="0"
						max="12"
						class="input p-1 text-black"
						placeholder="ejemplo: 111100001111000011"
						required
					/>
					<small class="text-sm text-gray-500">_ </small>
				</label>

				<!-- C18 - OTROS ESTÍMULOS  -->
				<label class="block">
					<span class="block font-semibold text-[#621132]">C18 - OTROS ESTÍMULOS </span>

					<input
						type="text"
						maxlength="12"
						pattern="[0-9]+"
						min="0"
						max="12"
						class="input p-1 text-black"
						placeholder="ejemplo: 111100001111000011"
						required
					/>
					<small class="text-sm text-gray-500">_ </small>
				</label>

				<!-- C19- CERTIFICADOS TESOFE  -->
				<label class="block">
					<span class="block font-semibold text-[#621132]">C19 - CERTIFICADOS TESOFE</span>

					<input
						type="text"
						maxlength="12"
						pattern="[0-9]+"
						min="0"
						max="12"
						class="input p-1 text-black"
						placeholder="ejemplo: 111100001111000011"
						required
					/>
					<small class="text-sm text-gray-500">_ </small>
				</label>

				<!-- C34- DIESEL MARINO -->
				<label class="block">
					<span class="block font-semibold text-[#621132]">C34 - DIESEL MARINO</span>

					<input
						type="text"
						maxlength="12"
						pattern="[0-9]+"
						min="0"
						max="12"
						class="input p-1 text-black"
						placeholder="ejemplo: 111100001111000011"
						required
					/>
					<small class="text-sm text-gray-500">_ </small>
				</label>

				<!-- C21 - TOTAL DE APLICACIONES -->
				<label class="block">
					<span class="block font-semibold text-[#621132]">C21 - TOTAL DE APLICACIONES</span>

					<input
						type="text"
						maxlength="12"
						pattern="[0-9]+"
						min="0"
						max="12"
						class="input p-1 text-black"
						placeholder="ejemplo: 111100001111000011"
						required
					/>
					<small class="text-sm text-gray-500">_ </small>
				</label>

				<!-- C21 - TOTAL DE APLICACIONES -->
				<label class="block">
					<span class="block font-semibold text-[#621132]">C21 - TOTAL DE APLICACIONES</span>

					<input
						type="text"
						maxlength="12"
						pattern="[0-9]+"
						min="0"
						max="12"
						class="input p-1 text-black"
						placeholder="ejemplo: 111100001111000011"
						required
					/>
					<small class="text-sm text-gray-500">_ </small>
				</label>

				<!-- C5 - FECHA DEL PAGO REALIZADO CON ANTERIORIDAD -->
				<label class="block">
					<span class="block font-semibold text-[#621132]"
						>C5 - FECHA DEL PAGO REALIZADO CON ANTERIORIDAD</span
					>

					<input
						type="text"
						maxlength="12"
						pattern="[0-9]+"
						min="0"
						max="12"
						class="input p-1 text-black"
						placeholder="ejemplo: 111100001111000011"
						required
					/>
					<small class="text-sm text-gray-500">_ </small>
				</label>

				<!-- C20 - MONTO PAGADO CON ANTERIORIDAD -->
				<label class="block">
					<span class="block font-semibold text-[#621132]">C20 - MONTO PAGADO CON ANTERIORIDAD</span
					>

					<input
						type="text"
						maxlength="12"
						pattern="[0-9]+"
						min="0"
						max="12"
						class="input p-1 text-black"
						placeholder="ejemplo: 111100001111000011"
						required
					/>
					<small class="text-sm text-gray-500">_ </small>
				</label>

				<!-- C20B - ¿USTED REALIZÓ EN LAS ÚLTIMAS 48 HORAS UN PAGO PARA ESTE CONCEPTO? -->
				<label class="block">
					<span class="block font-semibold text-[#621132]"
						>C20B - ¿USTED REALIZÓ EN LAS ÚLTIMAS 48 HORAS UN PAGO PARA ESTE CONCEPTO?</span
					>

					<div class="space-y-2">
						<label class="flex items-center space-x-2">
							<input class="radio" type="radio" checked name="radio-direct" value="1" />
							<p class="text-[#121132]">Si</p>
						</label>
						<label class="flex items-center space-x-2">
							<input class="radio" type="radio" name="radio-direct" value="2" />
							<p class="text-[#121132]">No</p>
						</label>
					</div>

					<small class="text-sm text-gray-500">_ </small>
				</label>

				<!-- C20A - IMPORTE PAGADO EN LAS ÚLTIMAS 48 HORAS-->
				<label class="block">
					<span class="block font-semibold text-[#621132]"
						>C20A - IMPORTE PAGADO EN LAS ÚLTIMAS 48 HORAS</span
					>

					<input
						type="text"
						maxlength="12"
						pattern="[0-9]+"
						min="0"
						max="12"
						class="input p-1 text-black"
						placeholder="ejemplo: 111100001111000011"
						required
					/>

					<small class="text-sm text-gray-500">_ </small>
				</label>

				<!-- C22 - CANTIDAD A CARGO -->
				<label class="block">
					<span class="block font-semibold text-[#621132]">C22 - CANTIDAD A CARGO</span>

					<input
						type="text"
						maxlength="12"
						pattern="[0-9]+"
						min="0"
						max="12"
						class="input p-1 text-black"
						placeholder="ejemplo: 111100001111000011"
						required
					/>

					<small class="text-sm text-gray-500">_ </small>
				</label>

				<!-- C23A - ¿APLICA PRIMERA PARCIALIDAD? -->
				<label class="block">
					<span class="block font-semibold text-[#621132]">C23A - ¿APLICA PRIMERA PARCIALIDAD?</span
					>

					<div class="space-y-2">
						<label class="flex items-center space-x-2">
							<input class="radio" type="radio" checked name="radio-direct2" value="1" />
							<p class="text-[#121132]">Si</p>
						</label>
						<label class="flex items-center space-x-2">
							<input class="radio" type="radio" name="radio-direct2" value="2" />
							<p class="text-[#121132]">No</p>
						</label>
					</div>

					<!-- C23 - IMPORTE DE LA 1RA. PARCIALIDAD -->
					<label class="block">
						<span class="block font-semibold text-[#621132]"
							>C23 - IMPORTE DE LA 1RA. PARCIALIDAD</span
						>

						<input
							type="text"
							maxlength="12"
							pattern="[0-9]+"
							min="0"
							max="12"
							class="input p-1 text-black"
							placeholder="ejemplo: 111100001111000011"
							required
						/>

						<small class="text-sm text-gray-500"
							>Monto del primer pago cuando se haya solicitado el pago a plazos, ya sea en
							parcialidades o diferido. Para las solicitudes del pago en parcialidades o diferido de
							las contribuciones retenidas, trasladadas o recaudadas procederán siempre que exista
							un decreto publicado en el Diario Oficial de la Federación en el cuál se otorgue este
							beneficio</small
						>
					</label>

					<!-- C24 - IMPORTE SIN LA 1RA. PARCIALIDAD -->
					<label class="block">
						<span class="block font-semibold text-[#621132]"
							>C24 - IMPORTE SIN LA 1RA. PARCIALIDAD</span
						>

						<input
							type="text"
							maxlength="12"
							pattern="[0-9]+"
							min="0"
							max="12"
							class="input p-1 text-black"
							placeholder="ejemplo: 111100001111000011"
							required
						/>

						<small class="text-sm text-gray-500"
							>Cantidad pendiente de pago, una vez disminuida la primera parcialidad. Para las
							solicitudes del pago en parcialidades o diferido de las contribuciones retenidas,
							trasladadas o recaudadas procederán siempre que exista un decreto publicado en el
							Diario Oficial de la Federación en el cuál se otorgue este beneficio</small
						>
					</label>

					<!-- C25 - CANTIDAD A FAVOR -->
					<label class="block">
						<span class="block font-semibold text-[#621132]">C25 - CANTIDAD A FAVOR</span>

						<input
							type="text"
							maxlength="12"
							pattern="[0-9]+"
							min="0"
							max="12"
							class="input p-1 text-black"
							placeholder="ejemplo: 111100001111000011"
							required
						/>

						<small class="text-sm text-gray-500">_</small>
					</label>

					<!-- C26 - CANTIDAD A PAGAR -->
					<label class="block">
						<span class="block font-semibold text-[#621132]">C26 - CANTIDAD A PAGAR</span>

						<input
							type="text"
							maxlength="12"
							pattern="[0-9]+"
							min="0"
							max="12"
							class="input p-1 text-black"
							placeholder="ejemplo: 111100001111000011"
							required
						/>

						<small class="text-sm text-gray-500">_</small>
					</label>

					<hr class="hr" />
				</label>
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
		console.log('action');
		showAlert220619 = false;
	}}
	on:cancel={() => {
		// logic here
		showAlert220619 = false;
	}}
/>

<AlertDialog
	bind:open={showAlertC8}
	title="C8 - PARTE ACTUALIZADA"
	description="Hacer uso de este beneficio implica que sus datos (nombre, denominación o razón social, clave del RFC y el monto de la actualización causada que no pagará) sean publicados en el Portal del SAT.

Si no desea ser publicado, puede optar por hacer el pago.

¿Desea pagar la actualización?   SI   NO"
	on:action={() => {
		// logic here
		console.log('action');
		showAlertC8 = false;
	}}
	on:cancel={() => {
		// logic here
		showAlertC8 = false;
	}}
/>
