import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const tasks = sqliteTable('task', {
  id: integer("id", { mode: "number"}).primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  completed: integer("completed", { mode: "boolean"}).notNull().default(false)
});

export type Task = InferSelectModel<typeof tasks>;
