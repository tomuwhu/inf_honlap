# $x_{1,2}=\frac{-b\pm\sqrt{b^2-4ac}}{2a}$

```
<script>
 // @ts-nocheck
 import { base } from '$app/paths'
 import { Code, Tabs, Space, Box, Text, Group, NativeSelect } from '@svelteuidev/core'
 import { onMount } from 'svelte'
 import axios from 'axios'
 import Md from 'markdown-it'
 import mathjax3 from 'markdown-it-mathjax3'
 import mhl from 'markdown-it-highlightjs'
 const md = new Md()
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
  ['algo', 'Algoritmizálás'],
  ['eli1', 'Elemi Informatika 1'],
  ['eli2', 'Elemi Informatika 2'],
  ['ifi', 'Intelligens felhasználói intefészek'],
  ['infalk', 'Informatikai alkalmazások'],
  ['mwt', 'Informatikai alapismeretek és modern webtechnológiák'],
  ['otir', 'Oktatást Támogató Informatikai Rendszerek'],
  ['pmsz', 'Programozási versenyek feladatainak megoldása'],
  ['szmt1', 'Szakmódszertan 1'],
  ['sztai', '1. Számítástechnikai alapismeretek'],
  ['szgr', 'Számítógépes rendszerek'],
  ['test', 'Teszt']
 ]
 var ns = 'algo'
 const fx = (e) => axios.get(`${base}/targyak/${ns}.md`).then((v) => (text = v.data))
 const getcv = (e) =>
  ['cv', 'pl'].map((md) => axios.get(`${base}/${md}.md`).then((v) => (cv[md] = v.data)))
 const boxcss = {
  fontSize: '12px',
  backgroundColor: '#193944',
  color: '#f8f8f2',
  padding: '20px',
  paddingTop: '4px',
  margin: '10px',
  borderRadius: '8px',
  boxShadow: '1px 1px 3px black',
  border: 'solid 10px white'
 }
</script>

{#if appdata.mounted}
 <Tabs>
  <Tabs.Tab label="Oktatás">
   <Box css={boxcss}>
    <Group>
     <Space w="sm" />
     <Text css={{ color: '#def6f4' }}>Oktatott tárgyak:</Text>
     <NativeSelect
      data={targylist.map((v) => ({ label: v[1], value: v[0] }))}
      bind:value={ns}
      radius="md"
      size="xs"
      on:change={fx}
     />
    </Group>
    <Code>
     {@html md.render(text)}
    </Code>
   </Box>
  </Tabs.Tab>
  <Tabs.Tab label="Kutatás">
   <Box css={boxcss}>
    <Code>
     {@html md.render(cv.pl)}
    </Code>
   </Box>
  </Tabs.Tab>
  <Tabs.Tab label="CV">
   <Box css={boxcss}>
    <Code>
     {@html md.render(cv.cv)}
    </Code>
   </Box>
  </Tabs.Tab>
 </Tabs>
{/if}
```