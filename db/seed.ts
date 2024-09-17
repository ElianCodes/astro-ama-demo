import { db, Question } from "astro:db";

export default async function () {
	await db.insert(Question).values([
		{ question: "What is the capital of France?", answered: false },
		{ question: "What is the capital of Germany?", answered: false },
	]);
}
