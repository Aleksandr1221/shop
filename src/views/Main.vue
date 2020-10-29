<template>
	<div>
  	<vHeader></vHeader>
		<router-view></router-view>
	</div>
</template>

<script>
import vHeader from "../components/vHeader"
export default {
  name: "vMain",
	components: {
		vHeader
	}
}
</script>