import {
	integer,
	pgTable,
	serial,
	varchar,
	timestamp,
} from "drizzle-orm/pg-core";

export const userTable = pgTable("users", {
	id: serial("id").primaryKey(),
	username: varchar("username", { length: 50 }).unique().notNull(),
	password: varchar("password", { length: 255 }).notNull(),
	email: varchar("email", { length: 50 }).unique().notNull(),
	googleId: varchar("goodle_id", { length: 255 }).unique(),
	githubId: varchar("github_id", { length: 255 }).unique(),
	created_at: timestamp("created_at").defaultNow(),
	updated_at: timestamp("updated_at").defaultNow(),
});

export const sessionTable = pgTable("sessions", {
	id: varchar("id").primaryKey(),
	userId: integer("user_id")
		.notNull()
		.references(() => userTable.id),
	expiresAt: timestamp("expires_at").notNull(),
});
