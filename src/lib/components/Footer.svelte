<script lang="ts">
	import logoblanco from '$lib/images/logo_blanco.svg';
	import pleca from '$lib/images/pleca.svg';
	import { PUBLIC_BASE_PATH } from '$env/static/public';
	import { PUBLIC_APP_PATH } from '$env/static/public';
	const basePath = PUBLIC_BASE_PATH;
	const appPath = PUBLIC_APP_PATH;
</script>

<footer class="flex flex-col bg-[#611232]">
	<div class="flex min-h-[200px] flex-col items-center justify-between gap-4 p-4 sm:flex-row">
		<!-- Logo Blanco -->
		<div class="flex w-full justify-center sm:w-64 sm:justify-start">
			<a href="https://svelte.dev">
				<img src={logoblanco} alt="SvelteKit" class="h-[75px] object-contain" />
			</a>
		</div>

		<!-- Navigation -->
		<nav>
			<ul class="flex flex-col items-center justify-center gap-2 sm:flex-row">
				<li>
					<a
						href="{basePath}/privacy"
						class="text-sm font-bold text-[var(--color-text)] uppercase hover:text-[var(--color-theme-1)]"
						>Aviso de Privacidad</a
					>
				</li>
				<li>
					<a
						href="{basePath}/terms"
						class="text-sm font-bold text-[var(--color-text)] uppercase hover:text-[var(--color-theme-1)]"
						>Términos y Condiciones</a
					>
				</li>
			</ul>
		</nav>

		<!-- Copyright -->
		<div class="text-center text-xs text-white sm:text-right">
			<p class="leading-none">&copy; {new Date().getFullYear()} SAT</p>
		</div>
	</div>

	<!-- Pleca inferior -->
	<div class="h-[50px] w-full bg-cover bg-center" style={`background-image: url('${pleca}')`}>
		<!-- contenido -->
	</div>
</footer>
