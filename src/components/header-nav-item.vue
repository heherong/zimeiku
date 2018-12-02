<template>
	<li class="header-nav-item" @click="tab" :class="{Bactive:bol}">
		<span :class="{Active:bol}">{{txt}}</span>
	</li>
</template>

<script>
	export default {
		props: ['txt', 'mark', 'sel'],
		computed: {
			bol: function() {
				if (this.mark == this.sel) {
					return true
				}
				return false
			}
		},
		methods: {
			tab: function() {
				this.$emit('change', this.mark);
				this.$router.push(`/${this.mark}`);
			}
		}
	}
</script>
<style>
	.Active {
		color: #4895E7;
	}

	li.Bactive {
		border-bottom: 2px solid #4895E7
	}

	.header-list-wrap li {
		float: left;
	}

	.header-nav-item {
		padding: 0 14px;
		display: inline-block;
		font-size: 16px;
		color: #82868A;
		border-bottom: 2px solid transparent;
		padding: 19px 0;
		cursor: pointer;
		margin: 0 20px;
	}

	.header-nav-item:hover span {
		color: #4895E7;
	}

	.header-nav-item:hover {
		border-bottom: 2px solid #4895E7;
	}
</style>