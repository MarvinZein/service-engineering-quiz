<script lang="ts">
	import '../app.postcss';
</script>

<div class="h-screen w-screen flex justify-center items-center bg-base-300">
	<div class="mockup-phone border-primary">
		<div class="camera" />
		<div class="display">
			<div class="artboard artboard-demo phone-1 p-3">
				<slot />
			</div>
		</div>
	</div>
</div>
