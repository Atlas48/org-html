import reorg from '@orgajs/reorg'
import {stream} from 'unified-stream'
import mutate from '@orgajs/reorg-rehype'
import html from 'rehype-stringify'
import {Readable} from 'stream'

const processor = reorg().use(mutate).use(html)

//https://stackoverflow.com/questions/10623798/how-do-i-read-the-contents-of-a-node-js-stream-into-a-string-variable#49428486
function streamToString (stream) {
    const chunks = [];
    return new Promise((resolve, reject) => {
      stream.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
      stream.on('error', reject);
      stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    })
  }

export default async function org_html(instr) {
    var buf = new Readable
    buf._read ??= ()=>{} //probably not a good idea but eh
    buf.push(instr)
    buf.push(null)
    return await streamToString(buf.pipe(stream(processor)))
}
