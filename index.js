import unified from 'unified'
import reorg from '@orgajs/reorg-parse'
import mkast from '@orgajs/reorg-rehype'
import stringify from 'rehype-stringify'

export default async function org_html(instr) {
  const out = await unified().use(reorg).use(mkast).use(stringify).process(instr)
  return String(out)
}
