"use client";
import React, { useEffect, useRef, useState } from "react";
import ProjectForm from "./project-form";
import { Button } from "@/components/ui/button";

export default function AddProject() {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  function onClick() {
    setShowForm(!showForm);
  }

  useEffect(() => {
    if (showForm && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showForm]);
  return (
    <div>
      <Button onClick={onClick}>{showForm ? "Cancel" : "Add project"}</Button>
      {showForm && (
        <div ref={formRef}>
          <ProjectForm />
        </div>
      )}
    </div>
  );
}
