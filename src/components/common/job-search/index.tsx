"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

type SearchProps = {
  onSearch: (keyword: string) => void;
};

function JobSearch({ onSearch }: SearchProps) {
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    onSearch(keyword);
  };

  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>Search Jobs</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center space-x-2">
        <Input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search by keyword"
        />
        <Button onClick={handleSearch}>Search</Button>
      </CardContent>
    </Card>
  );
}

export default JobSearch;
