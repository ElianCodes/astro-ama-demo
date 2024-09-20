import { defineAction } from "astro:actions";
import { db, Question } from "astro:db";
import { z } from "astro:schema";

export const server = {
	submitQuestion: defineAction({
		accept: "json",
		input: z.object({
			question: z.string(),
		}),
		handler: async ({ question }) => {
			console.log(`Received question: ${question}`);
			await db.insert(Question).values({ question, answered: false });
			
		},
	}),
};
