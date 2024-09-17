import { column, defineDb, defineTable, FALSE } from "astro:db";

const Question = defineTable({
	columns: {
		question: column.text(),
		answered: column.boolean({ default: FALSE }),
	},
});

export default defineDb({
	tables: {
		Question,
	},
});
