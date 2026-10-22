import matter from "gray-matter";
import { load, dump } from "js-yaml";

// Gray-matter defaults to js-yaml 3's retired safeLoad/safeDump API.
// Explicitly use js-yaml 4's safe-by-default equivalents for checked-in content.
export default function frontmatter(input: string) {
  return matter(input, { engines: { yaml: { parse: (text: string) => load(text) as object, stringify: dump } } });
}
