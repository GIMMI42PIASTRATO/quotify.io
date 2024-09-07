import {
	boolean,
	timestamp,
	pgTable,
	text,
	primaryKey,
	integer,
} from "drizzle-orm/pg-core";

export const users = pgTable("user", {
	id: text("id")
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	name: text("name"),
	email: text("email").unique(),
	emailVerified: timestamp("emailVerified", { mode: "date" }),
	image: text("image"),
});

export const test = pgTable("test", {
	id: text("id")
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
});
