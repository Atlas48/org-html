# org-html
Javascript org-mode to html converter utilising [Orga](https://github.com/orgapp/orgajs).

Provides a single function as well as some helpers for various static site generators.

# `org_html()`
```typescript
declare async function org_html(in:string): Promise<string>
```
In goes the org-mode data, out goes the HTML

```js
console.log(org_html("- hello :: world"))
```
