import { pgTable, varchar, uuid } from "drizzle-orm/pg-core";

export const userTable = pgTable("user", {
	id: uuid("id").primaryKey().defaultRandom(),
	name: varchar("name", { length: 255 }).notNull(),
});
