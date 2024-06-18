"use client";
import { createEmbedding } from "@/lib/actions";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
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
    <div className="text-textPrimary min-h-screen bg-primary p-8">
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
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="p-6">
          <h2 className="mb-4 text-2xl font-semibold text-accent">
            Create Embedding
          </h2>
          <div className="mb-4 flex gap-4">
            <Input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter text for embedding"
              className="flex-grow"
            />
            <Button
              onClick={handleCreateEmbedding}
              className="text-textSecondary bg-accent hover:bg-accent/70"
            >
              Create Embedding
            </Button>
          </div>
          {embedding && (
            <div className="rounded-md bg-primary p-4">
              <h3 className="text-xl font-semibold text-accent">
                Embedding Result:
              </h3>
              <pre className="rounded-md bg-secondary p-2 text-sm">
                {JSON.stringify(embedding, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </motion.div>

      <motion.div
        className="mb-8"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="p-6">
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
              className="flex-grow"
            />
            <Input
              type="email"
              name="email"
              value={newUser.email}
              onChange={handleInputChange}
              placeholder="Enter user email"
              className="flex-grow"
            />
            <Button
              onClick={handleAddUser}
              className="text-textSecondary bg-accent hover:bg-accent/70"
            >
              Add User
            </Button>
          </div>
          <h3 className="mb-4 text-xl font-semibold text-accent">Users List</h3>
          <ul className="list-inside list-disc rounded-md p-4 text-white">
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
