import org_html from '../index.js'
import { should } from 'chai'
should()

describe("org_html", function() {
    it("Should output valid HTML", async function() {
        var out = await org_html("- hello :: world")
        out.should.equal('<dl><dd>hello</dd><dt>world</dt>')
    })
})
