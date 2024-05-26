<script>
	// @ts-nocheck
	import { base } from '$app/paths'
	import {
		Image,
		Flex,
		Title,
		Code,
		Tabs,
		Space,
		Box,
		Text,
		Group,
		NativeSelect
	} from '@svelteuidev/core'
	import { onMount } from 'svelte'
	import axios from 'axios'
	import Md from 'markdown-it'
	import mathjax3 from 'markdown-it-mathjax3'
	import mhl from 'markdown-it-highlightjs'
	const md = new Md({
		html: true,
		breaks: true
	})
	md.use(mathjax3)
	md.use(mhl, { auto: true })
	const appdata = { mounted: false }
	onMount(() => {
		appdata.mounted = true
		setTimeout(() => {
			Array.from(document.getElementsByClassName('svelteui-Code-root')).map(
				(v) => (v.style.all = 'unset')
			)
			fx('')
			getcv('')
		})
	})
	var text = ``,
		cv = { cv: '', pl: '' }
	const targylist = [
		['alga1', 'Algoritmusok és Adatszerkezetek I. (levelező)'],
		['algo', 'Algoritmizálás'],
		['eli1', 'Elemi Informatika 1'],
		['eli2', 'Elemi Informatika 2'],
		['ifi', 'Intelligens felhasználói intefészek'],
		['infalk', 'Informatikai alkalmazások'],
		['mwt', 'Informatikai alapismeretek és modern webtechnológiák'],
		['otir', 'Oktatást Támogató Informatikai Rendszerek'],
		['pmsz', 'Programozási versenyek feladatainak megoldása'],
		['szmt1', 'Szakmódszertan 1'],
		['sztai', 'Számítástechnikai alapismeretek'],
		['szgr', 'Számítógépes rendszerek']
	]
	var ns = 'alga1'
	const fx = (e) => axios.get(`${base}/targyak/${ns}.md`).then((v) => (text = v.data))
	const getcv = (e) =>
		['cv', 'pl'].map((md) => axios.get(`${base}/${md}.md`).then((v) => (cv[md] = v.data)))
	const boxcss = {
		fontSize: '12px',
		paddingLeft: '30px',
		paddingRight: '10px',
		paddingTop: '0px',
		margin: '10px',
		lineHeight: '135%'
	}
	var c
</script>

{#if appdata.mounted}
	<Tabs>
		<Tabs.Tab label="Kezdőlap">
			<Flex>
				<Box css={{ marginLeft: '30px', marginRight: '10px', marginTop: '10px' }}>
					<Image width={200} radius="md" src="{base}/myface.jpg" alt="Random unsplash image" />
				</Box>
				<Box css={{ marginLeft: '30px', marginRight: '10px', marginTop: '30px' }}>
					<Title css={{ fontSize: '24px' }}>Dr. Németh Tamás</Title>
					<Text css={{ fontSize: '13px', color: 'gray' }}>egyetemi adjunktus - SZTE TTIK</Text>
					<Space h="lg" />
					<Text>Árpád tér 2. 42-es szoba. <nobr>Tel.: +36 (62) 343-435</nobr></Text>
				</Box>
			</Flex>
		</Tabs.Tab>
		<Tabs.Tab label="Oktatás">
			<Text>
				<Box css={boxcss}>
					<Space h="lg" />
					<Group>
						<Text css={{ color: '#1e2634' }}>Oktatott tárgyak:</Text>
						<NativeSelect
							data={targylist.map((v) => ({ label: v[1], value: v[0] }))}
							bind:value={ns}
							radius="xs"
							size="xs"
							on:change={fx}
						/>
					</Group>
					<Code block>
						{@html md.render(text)}
					</Code>
				</Box>
			</Text>
		</Tabs.Tab>
		<Tabs.Tab label="Kutatás">
			<Text>
				<Box css={boxcss}>
					<Code block>
						{@html md.render(cv.pl)}
					</Code>
				</Box>
			</Text>
		</Tabs.Tab>
		<Tabs.Tab label="CV">
			<Text>
				<Box css={boxcss}>
					<Code block>
						{@html md.render(cv.cv)}
					</Code>
				</Box>
			</Text>
		</Tabs.Tab>
	</Tabs>
{/if}
<style>
	:global(table) {
		border-spacing: 5px;
		margin: auto;
	}
	:global(td) {
		padding: 5px;
		padding-top: 3px;
		padding-bottom: 3px;
		background-color: rgb(237, 237, 237);
	}
	:global(td:nth-child(1)) {
		padding-right: 30px;
		background-color: rgb(87, 87, 87);
		color:white;
	}
	:global(td:nth-child(2)) {
		min-width: 200px;
	}
	:global(th) {
		min-width: 50px;
		padding: 5px;
		padding-left: 20px;
		padding-right: 20px;
		background-color: rgb(26, 26, 26);
		color:white;
	}
	:global(th:nth-child(2)) {
		min-width: 200px;
	}
	:global(h4){
		text-align: center;
		font-size: 14px;
		color: rgb(67, 67, 67);
		text-shadow: 1px 1px 3px gray;
	}
	:global(h2){
		padding-top: 15px;
		font-size: 18px;
		color: rgb(81, 20, 20);
		text-decoration: underline;
	}
</style>