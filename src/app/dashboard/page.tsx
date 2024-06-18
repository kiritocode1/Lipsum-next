"use client";
import { createEmbedding } from "@/lib/actions";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Dashboard: React.FC = () => {
  const [inputText, setInputText] = useState("");
  const [embedding, setEmbedding] = useState<any>(null);
  const [users, setUsers] = useState<
    { id: number; name: string; email: string }[]
  >([]);
  const [newUser, setNewUser] = useState({ name: "", email: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleCreateEmbedding = async () => {
    try {
      const result = await createEmbedding(inputText);
      setEmbedding(result);
    } catch (error) {
      console.error("Error creating embedding:", error);
    }
  };

  const handleAddUser = () => {
    setUsers([...users, { id: users.length + 1, ...newUser }]);
    setNewUser({ name: "", email: "" });
  };

  return (
    <div className="min-h-screen bg-primary p-8">
      <motion.h1
        className="mb-8 text-center text-4xl font-bold text-accent"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Dashboard
      </motion.h1>

      <motion.div
        className="mb-8"
        initial={{ y: "40px", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="rounded-lg bg-secondary p-6 shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-accent">
            Create Embedding
          </h2>
          <div className="mb-4 flex gap-4">
            <Input
              value={inputText}
              onChange={(e: {
                target: { value: React.SetStateAction<string> };
              }) => setInputText(e.target.value)}
              placeholder="Enter text for embedding"
              className="text-textPrimary flex-grow rounded-md border-accent bg-secondary p-2"
            />
            <Button
              onClick={handleCreateEmbedding}
              className="text-textSecondary rounded-md bg-accent p-2"
            >
              Create Embedding
            </Button>
          </div>
          {embedding && (
            <div className="rounded-md bg-primary p-4">
              <h3 className="text-xl font-semibold text-accent">
                Embedding Result:
              </h3>
              <pre className="text-textPrimary rounded-md bg-secondary p-2 text-sm">
                {JSON.stringify(embedding, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </motion.div>

      <motion.div
        className="mb-8"
        initial={{ y: "40px", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="rounded-lg bg-secondary p-6 shadow-lg">
          <h2 className="mb-4 text-2xl font-semibold text-accent">
            User Management
          </h2>
          <div className="mb-4 flex gap-4">
            <Input
              type="text"
              name="name"
              value={newUser.name}
              onChange={handleInputChange}
              placeholder="Enter user name"
              className="text-textPrimary flex-grow rounded-md border border-accent bg-secondary p-2"
            />
            <Input
              type="email"
              name="email"
              value={newUser.email}
              onChange={handleInputChange}
              placeholder="Enter user email"
              className="text-textPrimary flex-grow rounded-md border border-accent bg-secondary p-2"
            />
            <Button
              onClick={handleAddUser}
              className="text-textSecondary rounded-md bg-accent p-2"
            >
              Add User
            </Button>
          </div>
          <h3 className="mb-4 text-xl font-semibold text-accent">Users List</h3>
          <ul className="text-textPrimary list-inside list-disc rounded-md bg-primary p-4">
            {users.map((user) => (
              <li key={user.id}>
                {user.name} ({user.email})
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
