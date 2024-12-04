"use client";
import React, { useState } from "react";
import ProjectForm from "./project-form";
import { Button } from "@/components/ui/button";

export default function AddProject() {
  const [showForm, setShowForm] = useState(false);
  function onClick() {
    setShowForm(!showForm);
  }
  return (
    <div>
      <Button onClick={onClick}>{showForm ? "Cancel" : "Add project"}</Button>
      {showForm ? <ProjectForm /> : undefined}
    </div>
  );
}
