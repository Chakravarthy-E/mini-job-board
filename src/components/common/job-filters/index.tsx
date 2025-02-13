"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
type FilterProps = {
  onFilterChange: (filters: {
    category: string;
    location: string;
    salaryRange: string;
  }) => void;
};

function JobFilters({ onFilterChange }: FilterProps) {
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [salaryRange, setSalaryRange] = useState("");

  const handleFilterChange = () => {
    onFilterChange({ category, location, salaryRange });
  };

  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>Filter Jobs</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category (e.g., Software Development)"
        />
        <Input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location (e.g., Bangalore)"
        />
        <Input
          type="text"
          value={salaryRange}
          onChange={(e) => setSalaryRange(e.target.value)}
          placeholder="Salary Range (e.g., 8,00,000 - 12,00,000)"
        />
        <Button onClick={handleFilterChange} className="w-full">
          Apply Filters
        </Button>
      </CardContent>
    </Card>
  );
}
export default JobFilters;
