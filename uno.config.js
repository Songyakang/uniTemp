import { defineConfig } from "unocss"

export default defineConfig({
	rules: [
		[/^m-([\.\d]+)$/, ([_, num]) => ({ margin: `${num}rpx` })],
		[/^w-([\.\d]+)$/, ([_, num]) => ({ width: `${num}rpx` })],
		[/^h-([\.\d]+)$/, ([_, num]) => ({ height: `${num}rpx` })],
		[/^p-([\.\d]+)$/, ([_, num]) => ({ padding: `${num}rpx` })],
		[/^b-([\w+]+)$/, ([_, num]) => ({ "background-color": `#${num}` })],
		[/^flex-(\w+)-(\w+)-(\w+)-(\w+)/, 
			([_, flexflow, justifyContent, alignItem, wrap]) => ({
				"display": "flex",
				"flex-flow": flexflow,
				"justify-content": justifyContent,
				"align-items": alignItem,
				"flex-wrap": wrap
			})
		]
	]
})